"use client";

import { FC } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const AboutUsClient: FC = () => {
    return (
        <>
            <Banner
                title="О КЛИНИКЕ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["О клинике"]}
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
                                О нашей клинике
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Добро пожаловать в DI-CLINIC
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Современный медицинский центр с высококачественными услугами и индивидуальным подходом к каждому пациенту
                            </p>
                        </div>

                        {/* Основная информация о клинике */}
                        <section className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-6">
                                            Наша история и миссия
                                        </h2>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            DI-CLINIC — это современный медицинский центр, который предоставляет
                                            высококачественные медицинские услуги с использованием передовых
                                            технологий и индивидуального подхода к каждому пациенту.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            Наша клиника объединяет опытных специалистов различных направлений,
                                            которые работают в команде для достижения наилучших результатов
                                            в лечении и профилактике заболеваний.
                                        </p>
                                    </div>
                                    <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/nuraimed.jpg"
                                            alt="DI-CLINIC клиника"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Статистика */}
                        <section className="mb-16">
                            <div className="bg-gradient-to-r from-[#2A5963] to-[#3B6B75] rounded-2xl p-8 lg:p-12 text-white">
                                <div className="text-center mb-12">
                                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                        DI-CLINIC в цифрах
                                    </h2>
                                    <p className="text-white/80 max-w-2xl mx-auto">
                                        Наши достижения говорят сами за себя
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                    <div className="group">
                                        <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                                        <div className="text-white/80">Довольных пациентов</div>
                                    </div>
                                    <div className="group">
                                        <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                                        <div className="text-white/80">Специализаций</div>
                                    </div>
                                    <div className="group">
                                        <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
                                        <div className="text-white/80">Лет опыта</div>
                                    </div>
                                    <div className="group">
                                        <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                                        <div className="text-white/80">Поддержка</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Контактная информация */}
                        <section className="text-center">
                            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-6">
                                    Готовы помочь вам
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                                    Наша команда профессионалов готова предоставить вам качественную медицинскую помощь.
                                    Записывайтесь на консультацию уже сегодня!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="bg-[#2A5963] hover:bg-[#2A5963]/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                                    >
                                        Связаться с нами
                                    </Link>
                                    <Link
                                        href="/specialists"
                                        className="border-2 border-[#F59E2D] text-[#F59E2D] hover:bg-[#F59E2D] hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
                                    >
                                        Наши специалисты
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsClient;
