"use client";

import {FC} from "react";
import {Banner} from "@/components/shared/banner/Banner";
import DepartmentsCarousel from "@/components/shared/departments/DepartmentsCarousel";
import ReviewsCarousel from "@/components/shared/reviews/ReviewsCarousel";

const DepartmentPage: FC = () => {
    return (
        <>
            <Banner
                title="ОТДЕЛЕНИЯ"
                backgroundImage="/department-banner.jpg"
                breadcrumbItems={["Отделения"]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                </svg>
                                Медицинские отделения
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Сеть многопрофильных клиник &quot;DI-CLINIC&quot;
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                В DI-CLINIC своё здоровье доверяют те, для кого важны конфиденциальность и безупречное качество медицинской помощи.
                            </p>
                        </div>

                        <div className="mb-16">
                            <DepartmentsCarousel/>
                        </div>

                        <div className="max-w-7xl mx-auto mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                    <h2 className="text-2xl font-bold text-[#2A5963]">
                                        О наших отделениях
                                    </h2>
                                </div>

                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Мы собрали команду опытных специалистов разных профилей, что позволяет оказывать
                                        пациентам высококвалифицированную комплексную поддержку и при необходимости оперативно
                                        организовывать консилиумы с участием узких экспертов.
                                    </p>
                                    <p>
                                        Мультидисциплинарный подход — основа нашей работы. Хирурги, онкологи, терапевты, гистопатологи,
                                        радиологи и другие врачи ежедневно совместно разбирают клинические случаи, что обеспечивает
                                        предельно точную диагностику и выверенные решения в лечении.
                                    </p>
                                    <p>
                                        Такой формат работы гарантирует высокий результат во всех направлениях медицины,
                                        представленных в клинике.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Отзывы пациентов
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Отзывы наших пациентов
                            </h2>
                        </div>

                        <ReviewsCarousel/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DepartmentPage;
