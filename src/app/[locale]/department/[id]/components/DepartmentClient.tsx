"use client";

import { FC, useState, useEffect } from "react";
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

interface DepartmentClientProps {
    id: string;
    locale: string;
}

const DepartmentClient: FC<DepartmentClientProps> = ({ id, locale }) => {
    const [department, setDepartment] = useState<DepartmentResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchDepartment = async () => {
            try {
                const response = await axiosInstance.get<DepartmentResponse>(`/directions/${id}`);
                setDepartment(response.data);
            } catch (error) {
                console.error('Error fetching department:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartment();
    }, [id]);

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
        t => t.languageCode === locale
    ) || department.translations[0];

    return (
        <>
            <Banner
                title={currentTranslation.title}
                backgroundImage={department.directionImage ? `data:image/jpeg;base64,${department.directionImage}` : "/banners/department-banner.jpg"}
                breadcrumbItems={["Отделения", currentTranslation.title]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Медицинское отделение
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                {currentTranslation.title}
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Профессиональная медицинская помощь с использованием современных методов диагностики и лечения
                            </p>
                        </div>

                        {/* Main Content Section */}
                        <section className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-6">
                                            Описание отделения
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                            {currentTranslation.description}
                                        </p>
                                        {currentTranslation.offerDetails && (
                                            <div className="bg-gradient-to-r from-[#2A5963]/10 to-[#F59E2D]/10 rounded-xl p-6 border-l-4 border-[#F59E2D]">
                                                <h3 className="text-xl font-semibold text-[#2A5963] mb-3 flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                    </svg>
                                                    Особенности отделения
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {currentTranslation.offerDetails}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    {department.directionImage && (
                                        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                                            <Image
                                                src={`data:image/jpeg;base64,${department.directionImage}`}
                                                alt={currentTranslation.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Services Section */}
                        <section className="mb-16">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-4">
                                    Наши преимущества
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Что делает наше отделение особенным
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#2A5963]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A5963] transition-colors duration-300">
                                        <svg className="w-8 h-8 text-[#2A5963] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                        Качественная диагностика
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Современное оборудование для точной диагностики и выявления заболеваний на ранних стадиях
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F59E2D] transition-colors duration-300">
                                        <svg className="w-8 h-8 text-[#F59E2D] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                        Опытные специалисты
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Врачи с многолетним опытом работы и высокой квалификацией в различных областях медицины
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#2A5963]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A5963] transition-colors duration-300">
                                        <svg className="w-8 h-8 text-[#2A5963] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                        Индивидуальный подход
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Каждому пациенту уделяется максимальное внимание, план лечения составляется индивидуально
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Statistics Section */}
                        {/*<section className="mb-16">*/}
                        {/*    <div className="bg-gradient-to-r from-[#2A5963] to-[#3B6B75] rounded-2xl p-8 lg:p-12 text-white">*/}
                        {/*        <div className="text-center mb-12">*/}
                        {/*            <h2 className="text-2xl lg:text-3xl font-bold mb-4">*/}
                        {/*                Наше отделение в цифрах*/}
                        {/*            </h2>*/}
                        {/*            <p className="text-white/80 max-w-2xl mx-auto">*/}
                        {/*                Наши достижения и показатели работы*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">*/}
                        {/*            <div className="group">*/}
                        {/*                <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>*/}
                        {/*                <div className="text-white/80">Довольных пациентов</div>*/}
                        {/*            </div>*/}
                        {/*            <div className="group">*/}
                        {/*                <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>*/}
                        {/*                <div className="text-white/80">Доступность консультаций</div>*/}
                        {/*            </div>*/}
                        {/*            <div className="group">*/}
                        {/*                <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>*/}
                        {/*                <div className="text-white/80">Лет опыта</div>*/}
                        {/*            </div>*/}
                        {/*            <div className="group">*/}
                        {/*                <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">08:00-18:00</div>*/}
                        {/*                <div className="text-white/80">Ежедневно</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}

                        {/* Contact Section */}
                        <section>
                            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                                <div className="text-center max-w-4xl mx-auto">
                                    <div className="w-20 h-20 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <svg className="w-10 h-10 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>

                                    <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-6">
                                        Нужна консультация?
                                    </h2>
                                    <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                                        Свяжитесь с нашими специалистами для получения подробной информации об услугах отделения или записи на прием
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                                        <Link
                                            href="/contact"
                                            className="bg-[#2A5963] hover:bg-[#1e4147] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            Записаться на прием
                                        </Link>
                                        <a
                                            href="tel:+77086073074"
                                            className="border-2 border-[#2A5963] text-[#2A5963] hover:bg-[#2A5963] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            Позвонить сейчас
                                        </a>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium">Ежедневно с 08:00 до 18:00</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium">г. Алматы</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <span className="font-medium">+7 (708) 607 30-74</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DepartmentClient;
