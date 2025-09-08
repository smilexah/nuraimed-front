"use client";

import { FC } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import Image from "next/image";

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
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Свяжитесь с нами
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Наши контакты
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Мы готовы оказать вам качественную медицинскую помощь. Свяжитесь с нами удобным для вас способом.
                            </p>
                        </div>

                        <div className="max-w-7xl mb-16">
                            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                                <div className="flex flex-col justify-center gap-4 p-8 flex-1 bg-gradient-to-br from-[#2A5963] to-[#1e4147] text-white">
                                    <h3 className="text-2xl font-semibold">
                                        Срочная консультация?
                                    </h3>
                                    <p className="opacity-90">
                                        Напишите нам в WhatsApp для быстрой связи и записи на приём.
                                    </p>
                                    <button
                                        onClick={() =>
                                            window.open(
                                                "https://wa.me/77086073074?text=Здравствуйте! Мне нужна срочная консультация врача. Можете помочь записаться на приём?",
                                                "_blank"
                                            )
                                        }
                                        className="bg-[#F59E2D] text-white hover:bg-[#e8931e] font-medium py-3 px-5 rounded-lg shadow-md transition-all flex items-center gap-2 w-fit"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                        Написать в WhatsApp
                                    </button>
                                </div>

                                <div className="hidden lg:block lg:w-1/3 lg:h-auto relative">
                                    <Image
                                        src="/specialists-banner.jpg"
                                        alt="Медицинская консультация"
                                        className="w-full h-full object-cover"
                                        width={500}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                        <h3 className="text-2xl font-bold text-[#2A5963]">
                                            Контактная информация
                                        </h3>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#2A5963] mb-1">Телефон</h4>
                                                <a href="tel:+77086073074" className="text-gray-600 hover:text-[#F59E2D] transition-colors">
                                                    +7 (708) 607 30-74
                                                </a>
                                                <p className="text-sm text-gray-500 mt-1">Ежедневно с 08:00 до 18:00</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#2A5963] mb-1">Жалобы и предложения</h4>
                                                <a href="tel:+77086073075" className="text-gray-600 hover:text-[#F59E2D] transition-colors">
                                                    +7 (708) 607 30-75
                                                </a>
                                                <p className="text-sm text-gray-500 mt-1">Для обратной связи и предложений</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#2A5963] mb-1">Адрес</h4>
                                                <p className="text-gray-600">г. Алматы, ул. Жунисова, 4а</p>
                                                <p className="text-sm text-gray-500 mt-1">Центральная поликлиника</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#2A5963] mb-1">Режим работы</h4>
                                                <p className="text-gray-600">Ежедневно с 08:00 до 18:00</p>
                                                <p className="text-sm text-gray-500 mt-1">Понедельник - Воскресенье</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#2A5963] mb-1">Email</h4>
                                                <a href="mailto:info@nuraimed.kz" className="text-gray-600 hover:text-[#F59E2D] transition-colors">
                                                    info@di-clinic.kz
                                                </a>
                                                <p className="text-sm text-gray-500 mt-1">Ответим в течение часа</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#2A5963] to-[#1e4147] rounded-2xl shadow-lg p-6 lg:p-8 text-white">
                                    <div className="flex items-center mb-6">
                                        <svg className="w-6 h-6 mr-3 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <h3 className="text-xl font-bold">Мы в социальных сетях</h3>
                                    </div>
                                    <p className="text-blue-50 mb-6">
                                        Следите за новостями и получайте полезные советы о здоровье
                                    </p>
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://wa.me/77086073074?text=Здравствуйте!%20Пишу%20Вам%20с%20сайта.%20Хочу%20записаться%20на%20консультацию."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://instagram.com/di_clinic.kz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://shorturl.at/rKvTS"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="p-6 lg:p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                        <h3 className="text-2xl font-bold text-[#2A5963]">
                                            Как нас найти
                                        </h3>
                                    </div>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-[#F59E2D]/10 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2A5963]">г. Алматы, ул. Жунисова, 4а</p>
                                                <p className="text-sm text-gray-500">Центральная поликлиника</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-[#F59E2D]/10 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2A5963]">Ежедневно с 08:00 до 18:00</p>
                                                <p className="text-sm text-gray-500">Понедельник - Воскресенье</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-96 bg-gray-100 relative">
                                    <iframe
                                        src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A43.256543%2C%22lon%22%3A76.947321%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22almaty%22%7D%2C%22org%22%3A%2270000001082729148%22%7D"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="rounded-b-2xl"
                                    />

                                    <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-[#F59E2D] rounded-full"></div>
                                            <span className="text-sm font-semibold text-[#2A5963]">DI-CLINIC</span>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">ул. Жунисова, 4а</p>
                                    </div>

                                    <div className="absolute bottom-4 right-4">
                                        <a
                                            href="https://2gis.kz/almaty/firm/70000001082729148"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] px-4 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center space-x-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                            <span>Открыть в 2GIS</span>
                                        </a>
                                    </div>
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
