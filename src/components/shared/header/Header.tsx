"use client";

import {FC, useState, useRef, useEffect} from "react";
import Image from "next/image";
import {LangSelector} from "@/components/shared/header/LangSelector";
import {Link} from "@/i18n/navigation";
import {useLocale} from "next-intl";
import {useDirectionsStore} from "@/store/directionsStore";

export const Header: FC = () => {
    const locale = useLocale();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const {directions, fetchDirections} = useDirectionsStore();

    useEffect(() => {
        fetchDirections(locale);
    }, [locale, fetchDirections]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white py-4 w-full sticky top-0 z-[10000] shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="NuraiMed Logo"
                                width={100}
                                height={50}
                                className="h-8 w-auto sm:h-12"
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex space-x-6 text-[#F59E2D] font-medium">
                            <li>
                                <Link href="/about-us" className="hover:text-[#2A5963] transition-colors duration-200">
                                    О клинике
                                </Link>
                            </li>
                            <li ref={dropdownRef} className="relative">
                                <div
                                    className="flex items-center hover:text-[#2A5963] cursor-pointer transition-colors duration-200"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                >
                                    <span>Отделения</span>
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </div>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute top-full left-0 bg-white border border-gray-200 min-w-[220px] rounded-lg shadow-xl z-20 py-2 mt-1"
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        {directions.map(direction => (
                                            <Link
                                                key={direction.id}
                                                href={`/department/${direction.id}`}
                                                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2A5963] transition-colors duration-200"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                {direction.title}
                                            </Link>
                                        ))}
                                        <hr className="my-2 border-gray-200"/>
                                        <Link
                                            href="/department"
                                            className="block px-4 py-3 text-[#F59E2D] font-medium hover:bg-gray-50 hover:text-[#2A5963] transition-colors duration-200"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            Все отделения
                                        </Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link href="/specialists"
                                      className="hover:text-[#2A5963] transition-colors duration-200">
                                    Врачи
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#2A5963] transition-colors duration-200">
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="hover:text-[#2A5963] transition-colors duration-200">
                                    Отзывы
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden md:flex lg:flex gap-3 items-center">
                        <div className="hidden lg:flex gap-2 items-center">
                            <Image
                                src="/header-phone.svg"
                                alt="Phone"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col">
                                <a
                                    href="tel:+7 (708) 911-37-90"
                                    className="text-[#2A5963] font-semibold hover:text-[#F59E2D] transition-colors duration-200"
                                >
                                    +7 (708) 911-37-90
                                </a>
                                <p className="text-xs text-gray-600">Отвечаем 24/7</p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-[#2A5963] hover:bg-[#1e4147] px-4 lg:px-6 py-2 rounded-[15px] text-[#F59E2D] font-medium transition-colors duration-200 text-sm lg:text-base"
                        >
                            <span className="hidden lg:inline">Записаться онлайн</span>
                            <span className="lg:hidden">Запись</span>
                        </Link>

                        <div className="hidden md:block">
                            <LangSelector/>
                        </div>
                    </div>

                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-[#2A5963] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span
                            className={`w-6 h-0.5 bg-[#2A5963] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span
                            className={`w-6 h-0.5 bg-[#2A5963] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                <div
                    ref={mobileMenuRef}
                    className={`lg:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <div className="container mx-auto px-4 py-4">
                        <nav className="mb-4">
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/about-us"
                                        className="block py-2 text-[#2A5963] font-medium hover:text-[#F59E2D] transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        О клинике
                                    </Link>
                                </li>
                                <li>
                                    <div
                                        className="flex items-center justify-between py-2 text-[#2A5963] font-medium cursor-pointer"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <span>Отделения</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                    {isDropdownOpen && (
                                        <div className="pl-4 mt-2 space-y-2">
                                            {directions.map(direction => (
                                                <Link
                                                    key={direction.id}
                                                    href={`/department/${direction.id}`}
                                                    className="block py-2 text-gray-600 hover:text-[#F59E2D] transition-colors duration-200"
                                                    onClick={() => {
                                                        setIsDropdownOpen(false);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    {direction.title}
                                                </Link>
                                            ))}
                                            <Link
                                                href="/department"
                                                className="block py-2 text-[#F59E2D] font-medium hover:text-[#2A5963] transition-colors duration-200"
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Все отделения
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/specialists"
                                        className="block py-2 text-[#2A5963] font-medium hover:text-[#F59E2D] transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Врачи
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="block py-2 text-[#2A5963] font-medium hover:text-[#F59E2D] transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Контакты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/reviews"
                                        className="block py-2 text-[#2A5963] font-medium hover:text-[#F59E2D] transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Отзывы
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/header-phone.svg"
                                    alt="Phone"
                                    width={20}
                                    height={20}
                                />
                                <div>
                                    <a
                                        href="tel:+77089113790"
                                        className="text-[#2A5963] font-semibold text-lg hover:text-[#F59E2D] transition-colors duration-200"
                                    >
                                        +7 (708) 911-37-90
                                    </a>
                                    <p className="text-sm text-gray-600">Отвечаем 24/7 без выходных</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="flex-1 bg-[#2A5963] hover:bg-[#1e4147] px-4 py-3 rounded-[15px] text-[#F59E2D] font-medium text-center transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Записаться онлайн
                                </Link>
                                <div className="md:hidden">
                                    <LangSelector/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}