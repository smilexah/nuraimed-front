"use client";

import { FC, useState, useEffect, useRef } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import axiosInstance from "@/api/axiosInstance";

type Review = {
    id: number;
    name: string;
    phone: string;
    message: string;
    createdAt: string;
};

type PaginatedResponse = {
    content: Review[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
};

const ReviewsPage: FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(0); // Начинаем с 0, а не -1
    const [lastPage, setLastPage] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const initialLoadRef = useRef(false);

    const pageSize = 8;

    const fetchReviews = async (pageNum: number, replace = false) => {
        try {
            setError(null);
            if (pageNum === 0) {
                setLoading(true);
            } else {
                setLoadingMore(true);
            }

            const res = await axiosInstance.get<PaginatedResponse>(
                `/reviews?page=${pageNum}&size=${pageSize}&sort=createdAt,desc`
            );

            if (replace) {
                // Заменяем все отзывы (например, после добавления нового)
                setReviews(res.data.content);
            } else {
                // Добавляем к существующим (загрузка следующей страницы)
                setReviews((prev) => pageNum === 0 ? res.data.content : [...prev, ...res.data.content]);
            }

            setLastPage(res.data.last);
            setPage(pageNum);
        } catch (err) {
            console.error("Ошибка загрузки отзывов", err);
            setError("Ошибка при загрузке отзывов. Попробуйте еще раз.");
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        if (!initialLoadRef.current) {
            initialLoadRef.current = true;
            fetchReviews(0);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name.trim()) {
            setError("Пожалуйста, введите ваше имя");
            return;
        }

        if (!form.message.trim()) {
            setError("Пожалуйста, напишите отзыв");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await axiosInstance.post<Review>("/reviews", {
                name: form.name.trim(),
                phone: form.phone.trim(),
                message: form.message.trim()
            });

            setForm({ name: "", phone: "", message: "" });

            await fetchReviews(0, true);

        } catch (err) {
            console.error("Ошибка отправки отзыва", err);
            setError("Ошибка при отправке отзыва. Попробуйте еще раз.");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        if (!lastPage && !loadingMore) {
            await fetchReviews(page + 1);
        }
    };

    return (
        <>
            <Banner
                title="ОТЗЫВЫ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["Отзывы"]}
            />

            <div className="max-w-7xl mx-auto px-4 py-10">
                {error && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-sm"
                >
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Ваше Имя *"
                            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            disabled={loading}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Ваш Телефон"
                            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            disabled={loading}
                        />
                    </div>
                    <textarea
                        placeholder="Напишите отзыв *"
                        rows={4}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        disabled={loading}
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Отправка..." : "Отправить"}
                    </button>
                </form>

                {loading && reviews.length === 0 && (
                    <div className="flex justify-center items-center py-12">
                        <div className="text-gray-500">Загрузка отзывов...</div>
                    </div>
                )}

                {reviews.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <h3 className="font-bold text-lg">{review.name}</h3>
                                <p className="text-gray-400 text-sm">
                                    {review.phone || "Телефон не указан"}
                                </p>
                                <p className="mt-2 text-gray-700">{review.message}</p>
                                <p className="mt-2 text-xs text-gray-400">
                                    {new Date(review.createdAt).toLocaleDateString("ru-RU")}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && reviews.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        Пока нет отзывов. Будьте первым!
                    </div>
                )}

                {!lastPage && reviews.length > 0 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleLoadMore}
                            disabled={loadingMore}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loadingMore ? "Загрузка..." : "Показать ещё"}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ReviewsPage;