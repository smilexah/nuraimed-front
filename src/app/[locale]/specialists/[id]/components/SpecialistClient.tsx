"use client";

import { useEffect, useState } from "react";
import { SpecialistView } from "@/components/SpecialistView";
import axiosInstance from "@/api/axiosInstance";
import { Link } from "@/i18n/navigation";

interface SpecialistTranslation {
    languageCode: string;
    description: string;
    education: string;
    experience: string;
    serviceRecord: string;
    specialization: string;
}

interface Specialist {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    profileImage: string; // base64
    translations: SpecialistTranslation[];
}

interface SpecialistClientProps {
    specialistId: string;
}

export default function SpecialistClient({ specialistId }: SpecialistClientProps) {
    const [specialist, setSpecialist] = useState<Specialist | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`/doctors/${specialistId}`)
            .then(({ data }) => {
                setSpecialist(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Ошибка при загрузке данных специалиста:', err);
                setError('Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.');
                setLoading(false);
            });
    }, [specialistId]);

    if (loading) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="text-center p-6 bg-red-50 rounded-lg max-w-md">
                    <p className="text-red-600 text-lg mb-2">⚠️ {error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                    >
                        Повторить попытку
                    </button>
                </div>
            </div>
        );
    }

    if (!specialist) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="text-center p-6 bg-yellow-50 rounded-lg max-w-md">
                    <p className="text-amber-600 text-lg">Специалист не найден</p>
                    <Link
                        href="/specialists"
                        className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                    >
                        К списку специалистов
                    </Link>
                </div>
            </div>
        );
    }

    return <SpecialistView specialist={specialist} />;
}
