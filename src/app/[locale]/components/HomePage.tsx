"use client";

import { Link } from "@/i18n/navigation";
import DepartmentsCarousel from "@/components/shared/departments/DepartmentsCarousel";
import ReviewsCarousel from "@/components/shared/reviews/ReviewsCarousel";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            {/* Главный баннер */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#2A5963] to-[#3B6B75]">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Добро пожаловать в DI-CLINIC
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                        Современный медицинский центр с индивидуальным подходом к каждому пациенту
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-[#F59E2D] hover:bg-[#F59E2D]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg"
                        >
                            Записаться на прием
                        </Link>
                        <Link
                            href="/about-us"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#2A5963] px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                        >
                            О клинике
                        </Link>
                    </div>
                </div>
            </section>

            {/* Преимущества клиники */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Наши преимущества
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Почему выбирают DI-CLINIC
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Мы предоставляем высококачественные медицинские услуги с использованием современных технологий
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-[#2A5963]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A5963] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-[#2A5963] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                    Опытные врачи
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Наша команда состоит из квалифицированных специалистов
                                    с многолетним опытом работы в ведущих медицинских центрах
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F59E2D] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-[#F59E2D] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                    Современное оборудование
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Используем новейшее медицинское оборудование для
                                    точной диагностики и эффективного лечения
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-[#2A5963]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A5963] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-[#2A5963] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A5963] mb-4">
                                    Удобное время
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Работаем без выходных и предлагаем гибкое
                                    расписание для вашего удобства
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Отделения */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-[#2A5963]/10 text-[#2A5963] rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Наши отделения
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6">
                            Медицинские направления
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Широкий спектр медицинских услуг от ведущих специалистов
                        </p>
                    </div>
                    <DepartmentsCarousel />
                </div>
            </section>

            {/* Отзывы */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Отзывы пациентов
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6">
                            Что говорят наши пациенты
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Реальные отзывы людей, которым мы помогли
                        </p>
                    </div>
                    <ReviewsCarousel />
                </div>
            </section>

            {/* CTA секция */}
            <section className="bg-gradient-to-r from-[#2A5963] to-[#3B6B75] py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Готовы записаться на прием?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Наши специалисты готовы помочь вам в решении любых вопросов, связанных с вашим здоровьем
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-[#F59E2D] hover:bg-[#F59E2D]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg"
                            >
                                Записаться на прием
                            </Link>
                            <Link
                                href="/specialists"
                                className="border-2 border-white text-white hover:bg-white hover:text-[#2A5963] px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                            >
                                Наши специалисты
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
