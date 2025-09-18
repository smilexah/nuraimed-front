"use client";

import { Link } from "@/i18n/navigation";
import DepartmentsCarousel from "@/components/shared/departments/DepartmentsCarousel";
import ReviewsCarousel from "@/components/shared/reviews/ReviewsCarousel";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className="min-h-screen">
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
                            className="bg-[#F59E2D] hover:bg-[#F59E2D]/80 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/icons/no-photo-icon.svg"
                                        alt="DI-CLINIC медицинский центр - временное изображение"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        О нашей клинике
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-[#2A5963] mb-6">
                                        О медицинском центре DI-CLINIC
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        DI-CLINIC — это современный медицинский центр, который предоставляет
                                        комплексные медицинские услуги на высоком профессиональном уровне.
                                        Мы используем передовые методы диагностики и лечения.
                                    </p>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Наша миссия — обеспечить каждому пациенту качественную медицинскую
                                        помощь в комфортных условиях с индивидуальным подходом к лечению.
                                    </p>
                                    <Link
                                        href="/about-us"
                                        className="bg-[#2A5963] hover:bg-[#2A5963]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-block"
                                    >
                                        Подробнее о клинике
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Медицинские услуги
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Наши направления
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Мы предлагаем широкий спектр медицинских услуг в различных областях медицины
                            </p>
                        </div>
                        <DepartmentsCarousel />
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Отзывы пациентов
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Отзывы наших пациентов
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Мы гордимся доверием наших пациентов и стремимся к их полному выздоровлению
                            </p>
                        </div>
                        <ReviewsCarousel />
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-16 bg-gradient-to-r from-[#2A5963] to-[#3B6B75] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                DI-CLINIC в цифрах
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Наши достижения говорят сами за себя
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div className="group">
                                <div className="text-3xl lg:text-5xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">1500+</div>
                                <div className="text-white/80">Довольных пациентов</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl lg:text-5xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                                <div className="text-white/80">Медицинских направлений</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl lg:text-5xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                                <div className="text-white/80">Опытных врачей</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl lg:text-5xl font-bold text-[#F59E2D] mb-2 group-hover:scale-110 transition-transform duration-300">7</div>
                                <div className="text-white/80">Лет работы</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-16 bg-gradient-to-r from-[#F59E2D] to-[#E8922A] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                Запись на приём
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                Позаботьтесь о своем здоровье сегодня
                            </h2>
                            <p className="text-xl mb-8 leading-relaxed opacity-90">
                                Запишитесь на консультацию к нашим специалистам и получите
                                профессиональную медицинскую помощь в комфортной обстановке
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-white text-[#F59E2D] hover:bg-gray-200 px-10 py-4 rounded-xl font-bold text-lg transition-all"
                                >
                                    Записаться на прием
                                </Link>
                                <Link
                                    href="/specialists"
                                    className="border-2 border-white text-white hover:bg-white hover:text-[#F59E2D] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    Наши специалисты
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
