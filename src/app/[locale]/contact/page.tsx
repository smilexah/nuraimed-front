"use client";

import { FC } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import Image from "next/image";

const ContactPage: FC = () => {
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
                                Наши контакты
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Мы готовы оказать вам качественную медицинскую помощь. Свяжитесь с нами удобным для вас способом.
                            </p>
                        </div>

                        {/* WhatsApp Banner */}
                        <div className="max-w-6xl mx-auto mb-16">
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
                                                "https://wa.me/77472068196?text=Здравствуйте! Мне нужна срочная консультация врача. Можете помочь записаться на приём?",
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

                                <div className="relative md:w-1/3 h-64 md:h-auto">
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

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Contact Information */}
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
                                                <a href="tel:+77089113790" className="text-gray-600 hover:text-[#F59E2D] transition-colors">
                                                    +7 (708) 911-37-90
                                                </a>
                                                <p className="text-sm text-gray-500 mt-1">Круглосуточно</p>
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
                                                <p className="text-gray-600">г. Алматы, ул. Абая 150/230</p>
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
                                                <p className="text-gray-600">Ежедневно 24/7</p>
                                                <p className="text-sm text-gray-500 mt-1">Без выходных и праздников</p>
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
                                                    info@nuraimed.kz
                                                </a>
                                                <p className="text-sm text-gray-500 mt-1">Ответим в течение часа</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Социальные сети */}
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
                                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.036 6.011c-3.3 0-5.978 2.678-5.978 5.978 0 3.3 2.678 5.978 5.978 5.978 3.3 0 5.978-2.678 5.978-5.978 0-3.3-2.678-5.978-5.978-5.978zm0 9.868c-2.148 0-3.89-1.742-3.89-3.89s1.742-3.89 3.89-3.89 3.89 1.742 3.89 3.89-1.742 3.89-3.89 3.89zM19.836 5.746c0 .77-.624 1.394-1.394 1.394-.77 0-1.394-.624-1.394-1.394s.624-1.394 1.394-1.394 1.394.624 1.394 1.394zM24 7.244c-.269-2.24-1.565-4.228-3.805-4.497C18.245 2.475 5.755 2.475 3.805 2.747 1.565 3.016.269 5.004 0 7.244c-.272 1.95-.272 14.54 0 16.49.269 2.24 1.565 4.228 3.805 4.497 1.95.272 14.44.272 16.39 0 2.24-.269 4.536-2.257 4.805-4.497.272-1.95.272-14.54 0-16.49zm-4.293 16.829c-.537 1.347-1.577 2.387-2.924 2.924-2.025.804-6.83.618-9.071.618s-7.046.186-9.071-.618c-1.347-.537-2.387-1.577-2.924-2.924-.804-2.025-.618-6.83-.618-9.071s-.186-7.046.618-9.071c.537-1.347 1.577-2.387 2.924-2.924 2.025-.804 6.83-.618 9.071-.618s7.046-.186 9.071.618c1.347.537 2.387 1.577 2.924 2.924.804 2.025.618 6.83.618 9.071s.186 7.046-.618 9.071z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section */}
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
                                                <p className="font-semibold text-[#2A5963]">г. Алматы, ул. Абая 150/230</p>
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
                                                <p className="font-semibold text-[#2A5963]">Круглосуточно</p>
                                                <p className="text-sm text-gray-500">Без выходных и праздников</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Container */}
                                <div className="h-96 bg-gray-100 relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5668932881467!2d76.94732131552748!3d43.25654377913746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e86710cdc87%3A0x46b4dd82a21c3c1b!2z0YPQuy4g0JDQsdCw0Y8sINCQ0LvQvNCw0YLRiywg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2s!4v1640764891234!5m2!1sru!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-b-2xl"
                                    />

                                    {/* Map Overlay with Address */}
                                    <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-[#F59E2D] rounded-full"></div>
                                            <span className="text-sm font-semibold text-[#2A5963]">NuraiMed</span>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">ул. Абая 150/230</p>
                                    </div>

                                    {/* Directions Button */}
                                    <div className="absolute bottom-4 right-4">
                                        <a
                                            href="https://maps.google.com/?q=43.25654377913746,76.94732131552748"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] px-4 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center space-x-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                            <span>Маршрут</span>
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

export default ContactPage;
