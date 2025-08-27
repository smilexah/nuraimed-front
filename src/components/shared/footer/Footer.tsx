"use client";

import {FC, useEffect} from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {useLocale} from "next-intl";
import {useDirectionsStore} from "@/store/directionsStore";

export const Footer: FC = () => {
    const locale = useLocale();
    const { directions, loading, fetchDirections } = useDirectionsStore();

    useEffect(() => {
        fetchDirections(locale);
    }, [locale, fetchDirections]);

    return (
        <footer className="bg-[rgba(42,89,99,0.1)] py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-4 items-start lg:col-span-1">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="DI-CLINIC Logo"
                                width={100}
                                height={50}
                                className="h-10 w-auto sm:h-12"
                            />
                            <span className="ml-2 text-[#F59E2D] font-bold text-lg sm:text-xl">
                                DI-CLINIC
                            </span>
                        </Link>
                        <div className="flex gap-3 items-start">
                            <Image
                                src="/footer-location-point.svg"
                                alt="Location"
                                width={16}
                                height={16}
                                className="mt-1 flex-shrink-0"
                            />
                            <p className="text-sm text-gray-700 leading-relaxed">
                                г. Алматы, ул. Абая, 123<br />
                                БЦ &quot;Медицинский&quot;, 2 этаж
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-start lg:col-span-1">
                        <h3 className="font-semibold text-lg text-[#2A5963] mb-2">Отделения</h3>
                        {loading ? (
                            <div className="space-y-2">
                                {[...Array(6)].map((_, index) => (
                                    <div key={index} className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {directions.slice(0, 8).map(direction => (
                                    <Link
                                        key={direction.id}
                                        href={`/department/${direction.id}`}
                                        className="block text-sm text-gray-700 hover:text-[#F59E2D] transition-colors duration-200"
                                    >
                                        {direction.title}
                                    </Link>
                                ))}
                                {directions.length > 8 && (
                                    <Link
                                        href="/department"
                                        className="block text-sm text-[#F59E2D] font-medium hover:text-[#2A5963] transition-colors duration-200 pt-2"
                                    >
                                        Все отделения →
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 items-start lg:col-span-1">
                        <h3 className="font-semibold text-lg text-[#2A5963] mb-2">Пациентам</h3>
                        <div className="space-y-2">
                            <Link
                                href="/about-us"
                                className="block text-sm text-gray-700 hover:text-[#F59E2D] transition-colors duration-200"
                            >
                                О клинике
                            </Link>
                            <Link
                                href="/specialists"
                                className="block text-sm text-gray-700 hover:text-[#F59E2D] transition-colors duration-200"
                            >
                                Наши врачи
                            </Link>
                            <Link
                                href="/reviews"
                                className="block text-sm text-gray-700 hover:text-[#F59E2D] transition-colors duration-200"
                            >
                                Отзывы пациентов
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-sm text-gray-700 hover:text-[#F59E2D] transition-colors duration-200"
                            >
                                Записаться на прием
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-start lg:col-span-1">
                        <h3 className="font-semibold text-lg text-[#2A5963] mb-2">Контакты</h3>

                        <div className="flex gap-3 items-start">
                            <Image
                                src="/footer-phone.svg"
                                alt="Phone"
                                width={20}
                                height={20}
                                className="mt-1 flex-shrink-0"
                            />
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-600 mb-1">Круглосуточно</p>
                                <a
                                    href="tel:+77472068196"
                                    className="text-sm font-semibold text-[#2A5963] hover:text-[#F59E2D] transition-colors duration-200"
                                >
                                    +7 (747) 206-81-96
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <Image
                                src="/footer-phone.svg"
                                alt="Phone"
                                width={20}
                                height={20}
                                className="mt-1 flex-shrink-0"
                            />
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-600 mb-1">Жалобы и предложения</p>
                                <a
                                    href="tel:+77472068196"
                                    className="text-sm font-semibold text-[#2A5963] hover:text-[#F59E2D] transition-colors duration-200"
                                >
                                    +7 (747) 206-81-96
                                </a>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-3">Мы в социальных сетях:</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://wa.me/77472068196"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform duration-200"
                                >
                                    <Image
                                        src="/whatsapp-icon.svg"
                                        alt="WhatsApp"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                                <a
                                    href="https://instagram.com/di_clinic.kz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform duration-200"
                                >
                                    <Image
                                        src="/instagram-icon.svg"
                                        alt="Instagram"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                                {/*<a*/}
                                {/*    href="https://facebook.com/nuray.med"*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noopener noreferrer"*/}
                                {/*    className="hover:scale-110 transition-transform duration-200"*/}
                                {/*>*/}
                                {/*    <Image*/}
                                {/*        src="/facebook-icon.svg"*/}
                                {/*        alt="Facebook"*/}
                                {/*        width={32}*/}
                                {/*        height={32}*/}
                                {/*    />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Разделительная линия и копирайт */}
                <div className="border-t border-gray-300 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600 text-center md:text-left">
                            © 2025 DI-CLINIC. Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}