"use client";

import { FC, useState, useEffect, use } from "react";
import axiosInstance from "@/api/axiosInstance";
import { notFound } from "next/navigation";

interface Translation {
    languageCode: string;
    title: string;
    description: string;
    offerDetails: string;
}

interface DepartmentResponse {
    id: number;
    directionImage: string;
    translations: Translation[];
}

interface DepartmentPageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

const UniqueDepartmentPage: FC<DepartmentPageProps> = ({ params }) => {
    const resolvedParams = use(params);
    const [department, setDepartment] = useState<DepartmentResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchDepartment = async () => {
            try {
                const response = await axiosInstance.get<DepartmentResponse>(`/directions/${resolvedParams.id}`);
                setDepartment(response.data);
            } catch (error) {
                console.error('Error fetching department:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartment();
    }, [resolvedParams.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                    <p className="text-gray-600 text-lg">Загрузка отделения...</p>
                </div>
            </div>
        );
    }

    if (error || !department) {
        notFound();
    }

    const currentTranslation = department.translations.find(
        t => t.languageCode === resolvedParams.locale
    ) || department.translations[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                            Медицинское отделение
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {currentTranslation.title}
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Content Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        {department.directionImage && (
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                                <img
                                    src={`data:image/jpeg;base64,${department.directionImage}`}
                                    alt={currentTranslation.title}
                                    className="relative w-full rounded-xl shadow-2xl object-cover aspect-square lg:aspect-[4/3]"
                                />
                            </div>
                        )}

                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                                    Описание отделения
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {currentTranslation.description}
                                </p>
                            </div>

                            {currentTranslation.offerDetails && (
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        Детали предложения
                                    </h3>
                                    <p className="text-blue-50 leading-relaxed text-lg">
                                        {currentTranslation.offerDetails}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Нужна консультация?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Свяжитесь с нашими специалистами для получения подробной информации об услугах отделения
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Записаться на прием
                                </button>
                                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition duration-300">
                                    Связаться с отделением
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UniqueDepartmentPage;