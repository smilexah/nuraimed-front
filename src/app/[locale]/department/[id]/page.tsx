"use client";

import { FC, useState, useEffect, use } from "react";
import axiosInstance from "@/api/axiosInstance";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Banner } from "@/components/shared/banner/Banner";

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
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#F59E2D] border-t-transparent"></div>
                    <p className="text-[#2A5963] text-lg font-medium">Загрузка отделения...</p>
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
        <>
            <Banner
                title={currentTranslation.title}
                backgroundImage={department.directionImage ? `data:image/jpeg;base64,${department.directionImage}` : "/placeholder-department.jpg"}
                breadcrumbItems={["Отделения", currentTranslation.title]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
                            {department.directionImage && (
                                <div className="relative">
                                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                                        <Image
                                            src={`data:image/jpeg;base64,${department.directionImage}`}
                                            alt={currentTranslation.title}
                                            width={600}
                                            height={400}
                                            className="w-full rounded-xl object-cover aspect-[4/3]"
                                        />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F59E2D] rounded-full opacity-20"></div>
                                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#2A5963] rounded-full opacity-10"></div>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                        <h2 className="text-2xl font-bold text-[#2A5963]">
                                            Описание отделения
                                        </h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {currentTranslation.description}
                                    </p>
                                </div>

                                {currentTranslation.offerDetails && (
                                    <div className="bg-gradient-to-br from-[#2A5963] to-[#1e4147] rounded-2xl shadow-lg p-6 lg:p-8 text-white">
                                        <div className="flex items-center mb-6">
                                            <svg className="w-6 h-6 mr-3 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            <h3 className="text-xl font-bold">
                                                Особенности отделения
                                            </h3>
                                        </div>
                                        <p className="text-blue-50 leading-relaxed text-lg">
                                            {currentTranslation.offerDetails}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2A5963] mb-2">Качественная диагностика</h3>
                                <p className="text-gray-600 text-sm">Современное оборудование для точной диагностики</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2A5963] mb-2">Опытные специалисты</h3>
                                <p className="text-gray-600 text-sm">Врачи с многолетним опытом работы</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2A5963] mb-2">Работаем ежедневно</h3>
                                <p className="text-gray-600 text-sm">с 08:00 до 18:00</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
                            <div className="text-center max-w-3xl mx-auto">
                                <div className="w-20 h-20 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>

                                <h3 className="text-3xl font-bold text-[#2A5963] mb-4">
                                    Нужна консультация?
                                </h3>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Свяжитесь с нашими специалистами для получения подробной информации об услугах отделения или записи на прием
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <Link
                                        href="/contact"
                                        className="bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                                    >
                                        Записаться на прием
                                    </Link>
                                    <a
                                        href="tel:+77086073074"
                                        className="border-2 border-[#2A5963] text-[#2A5963] hover:bg-[#2A5963] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 text-center"
                                    >
                                        Позвонить сейчас
                                    </a>
                                </div>

                                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        Ежедневно с 08:00 до 18:00
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        г. Алматы
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        +7 (708) 607 30-74
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UniqueDepartmentPage;