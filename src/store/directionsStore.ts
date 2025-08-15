import { create } from 'zustand';
import axiosInstance from '@/api/axiosInstance';

type DirectionNamesResponse = {
    id: number;
    title: string;
}

interface DirectionsState {
    directions: DirectionNamesResponse[];
    loading: boolean;
    error: string | null;
    lastFetchedLocale: string | null;
    fetchDirections: (locale: string) => Promise<void>;
    resetError: () => void;
    clearDirections: () => void;
}

export const useDirectionsStore = create<DirectionsState>((set, get) => ({
    directions: [],
    loading: false,
    error: null,
    lastFetchedLocale: null,

    fetchDirections: async (locale: string) => {
        const currentState = get();

        // Если данные уже загружены для этой локали и нет ошибки, не загружаем повторно
        if (currentState.directions.length > 0 &&
            currentState.lastFetchedLocale === locale &&
            !currentState.error &&
            !currentState.loading) {
            return;
        }

        set({ loading: true, error: null });

        try {
            console.log(`Fetching directions for locale: ${locale}`);
            console.log(`API URL: ${process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.nuraimed.kz"}/directions/navbar?languageCode=${locale}`);

            const response = await axiosInstance.get<DirectionNamesResponse[]>(
                `/directions/navbar?languageCode=${locale}`
            );

            console.log('Directions loaded successfully:', response.data);

            set({
                directions: response.data,
                loading: false,
                error: null,
                lastFetchedLocale: locale
            });
        } catch (error: unknown) {
            console.error('Error fetching directions:', error);

            let errorMessage = 'Ошибка загрузки отделений';

            if (error && typeof error === 'object' && 'code' in error) {
                if (error.code === 'ECONNABORTED') {
                    errorMessage = 'Превышено время ожидания запроса';
                } else if (error.code === 'NETWORK_ERROR' || ('message' in error && error.message === 'Network Error')) {
                    errorMessage = 'Ошибка сети. Проверьте подключение к интернету';
                }
            }

            if (error && typeof error === 'object' && 'response' in error && error.response) {
                // Сервер ответил с кодом ошибки
                const response = error.response as { status: number };
                const status = response.status;
                if (status === 404) {
                    errorMessage = 'Отделения не найдены';
                } else if (status === 500) {
                    errorMessage = 'Ошибка сервера. Попробуйте позже';
                } else if (status >= 400 && status < 500) {
                    errorMessage = `Ошибка запроса (${status})`;
                } else {
                    errorMessage = `Ошибка сервера (${status})`;
                }
            } else if (error && typeof error === 'object' && 'request' in error) {
                // Запрос был отправлен, но ответа не получено
                errorMessage = 'Сервер не отвечает. Проверьте подключение';
            }

            set({
                directions: [],
                loading: false,
                error: errorMessage,
                lastFetchedLocale: null
            });
        }
    },

    resetError: () => set({ error: null }),

    clearDirections: () => set({
        directions: [],
        error: null,
        lastFetchedLocale: null
    }),
}));
