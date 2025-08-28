"use client";

import { FC } from "react";
import { Banner } from "@/components/shared/banner/Banner";

const ContactClient: FC = () => {
    return (
        <>
            <Banner
                title="КОНТАКТЫ"
                backgroundImage="/contact-banner.png"
                breadcrumbItems={["Контакты"]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Свяжитесь с нами
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Как с нами связаться
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Мы всегда готовы ответить на ваши вопросы и записать на прием к специалистам
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-[#2A5963]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-[#2A5963]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A5963] mb-4">Телефон</h3>
                                <p className="text-gray-600 mb-2">+7 (727) XXX-XX-XX</p>
                                <p className="text-gray-600">+7 (708) XXX-XX-XX</p>
                                <p className="text-sm text-gray-500 mt-2">Ежедневно 8:00 - 20:00</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A5963] mb-4">Адрес</h3>
                                <p className="text-gray-600 mb-2">г. Алматы</p>
                                <p className="text-gray-600">ул. Примерная, 123</p>
                                <p className="text-sm text-gray-500 mt-2">БЦ &ldquo;Медицинский&rdquo;, 2 этаж</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-[#2A5963]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-[#2A5963]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A5963] mb-4">Email</h3>
                                <p className="text-gray-600 mb-2">info@di-clinic.kz</p>
                                <p className="text-gray-600">appointment@di-clinic.kz</p>
                                <p className="text-sm text-gray-500 mt-2">Ответим в течение часа</p>
                            </div>
                        </div>

                        {/* Contact Form & Map */}
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-[#2A5963] mb-6">Записаться на прием</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Имя *
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5963] focus:border-transparent"
                                                placeholder="Ваше имя"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Телефон *
                                            </label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5963] focus:border-transparent"
                                                placeholder="+7 (___) ___-__-__"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5963] focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Специалист
                                        </label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5963] focus:border-transparent">
                                            <option value="">Выберите специалиста</option>
                                            <option value="therapist">Терапевт</option>
                                            <option value="cardiologist">Кардиолог</option>
                                            <option value="neurologist">Невролог</option>
                                            <option value="gastroenterologist">Гастроэнтеролог</option>
                                            <option value="endocrinologist">Эндокринолог</option>
                                            <option value="dermatologist">Дерматолог</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Сообщение
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5963] focus:border-transparent"
                                            placeholder="Опишите ваши симптомы или вопросы..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#2A5963] hover:bg-[#2A5963]/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                                    >
                                        Отправить заявку
                                    </button>

                                    <p className="text-sm text-gray-500 text-center">
                                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                                    </p>
                                </form>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-[#2A5963] mb-6">Как нас найти</h2>
                                <div className="aspect-w-16 aspect-h-9 mb-6">
                                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <p className="text-gray-500">Карта (Здесь будет интеграция с Google Maps)</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-[#F59E2D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Адрес</h4>
                                            <p className="text-gray-600">г. Алматы, ул. Примерная, 123</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-[#2A5963] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Режим работы</h4>
                                            <p className="text-gray-600">Пн-Вс: 8:00 - 20:00</p>
                                            <p className="text-gray-600">Без выходных</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">WhatsApp</h4>
                                            <p className="text-gray-600">+7 (708) XXX-XX-XX</p>
                                            <p className="text-sm text-gray-500">Быстрая связь 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center">
                            <div className="bg-gradient-to-r from-[#2A5963] to-[#3B6B75] rounded-2xl p-8 lg:p-12 text-white">
                                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                    Нужна срочная консультация?
                                </h2>
                                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                                    Позвоните нам прямо сейчас, и мы подберем удобное время для приема
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="tel:+77271234567"
                                        className="bg-[#F59E2D] hover:bg-[#F59E2D]/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                                    >
                                        Позвонить сейчас
                                    </a>
                                    <a
                                        href="https://wa.me/77081234567"
                                        className="border-2 border-white text-white hover:bg-white hover:text-[#2A5963] px-8 py-4 rounded-xl font-medium transition-all duration-300"
                                    >
                                        Написать в WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactClient;
