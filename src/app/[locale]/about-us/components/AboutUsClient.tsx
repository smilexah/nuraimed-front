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
                                            src="/no-photo.svg"
                                            alt="DI-CLINIC клиника - временное изображение"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-16">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-4">
                                    Наши принципы работы
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Мы руководствуемся четкими принципами в нашей работе
                                </p>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#2A5963]">
                                    <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                        Наша миссия
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Обеспечить доступную и качественную медицинскую помощь,
                                        основанную на современных методах диагностики и лечения,
                                        с заботой о здоровье и благополучии каждого пациента.
                                    </p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#F59E2D]">
                                    <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                        Наши ценности
                                    </h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-[#F59E2D] mr-2">•</span>
                                            Профессионализм и компетентность
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F59E2D] mr-2">•</span>
                                            Индивидуальный подход к каждому пациенту
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F59E2D] mr-2">•</span>
                                            Соблюдение медицинской этики
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F59E2D] mr-2">•</span>
                                            Непрерывное развитие и обучение
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F59E2D] mr-2">•</span>
                                            Современные технологии и оборудование
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-16">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-4">
                                    Почему выбирают DI-CLINIC
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Наши преимущества делают нас лидером в области медицинских услуг
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
                                        Опытные специалисты
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Наша команда состоит из врачей с многолетним опытом и
                                        высокой квалификацией в различных областях медицины.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F59E2D] transition-colors duration-300">
                                        <svg className="w-8 h-8 text-[#F59E2D] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                        Современное оборудование
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Используем передовое медицинское оборудование для
                                        точной диагностики и эффективного лечения.
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
                                        Каждому пациенту уделяется максимальное внимание,
                                        план лечения составляется индивидуально.
                                    </p>
                                </div>
                            </div>
                        </section>

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
                                        <div className="text-3xl lg:text-4xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">08:00-18:00</div>
                                        <div className="text-white/80">Ежедневно</div>
                                    </div>
                                </div>
                            </div>
                        </section>

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
                                        className="bg-[#2A5963] hover:bg-[#2A5963]/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
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
