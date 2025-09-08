"use client";

import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { LangSelector } from "@/components/shared/header/LangSelector";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useDirectionsStore } from "@/store/directionsStore";

export const Header: FC = () => {
    const locale = useLocale();
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const desktopDropdownRef = useRef<HTMLLIElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

    const { directions, fetchDirections } = useDirectionsStore();

    useEffect(() => {
        void fetchDirections(locale);
    }, [locale, fetchDirections]);

    useEffect(() => {
        function handlePointerDown(event: PointerEvent) {
            const target = event.target as Node;

            if (
                desktopDropdownRef.current &&
                !desktopDropdownRef.current.contains(target)
            ) {
                setIsDesktopDropdownOpen(false);
            }

            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                mobileMenuButtonRef.current &&
                !mobileMenuButtonRef.current.contains(target)
            ) {
                setIsMobileMenuOpen(false);
                setIsMobileDropdownOpen(false);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    return (
        <header className="bg-white py-4 w-full sticky top-0 z-[10000] shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="DI-CLINIC Logo"
                                width={100}
                                height={50}
                                className="h-8 w-auto sm:h-12"
                                priority
                            />
                            <span className="ml-2 text-[#F59E2D] font-bold text-lg sm:text-xl">
                                DI-CLINIC
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex space-x-6 text-[#F59E2D] font-medium">
                            <li>
                                <Link
                                    href="/about-us"
                                    className="hover:text-[#2A5963] transition-colors duration-200"
                                >
                                    О клинике
                                </Link>
                            </li>

                            <li ref={desktopDropdownRef} className="relative">
                                <button
                                    type="button"
                                    className="flex items-center hover:text-[#2A5963] cursor-pointer transition-colors duration-200"
                                    onClick={() =>
                                        setIsDesktopDropdownOpen((v) => !v)
                                    }
                                    onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                                    aria-expanded={isDesktopDropdownOpen}
                                    aria-haspopup="menu"
                                >
                                    <span>Отделения</span>
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                                            isDesktopDropdownOpen ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {isDesktopDropdownOpen && (
                                    <div
                                        role="menu"
                                        className={`absolute top-full left-0 bg-white border border-gray-200 min-w-[220px] rounded-lg shadow-xl z-20 py-2 mt-1 ${
                                            directions.length > 5
                                                ? "max-h-80 overflow-y-auto dropdown-scroll"
                                                : ""
                                        }`}
                                        onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                                    >
                                        {directions.map((direction) => (
                                            <Link
                                                key={direction.id}
                                                href={`/department/${direction.id}`}
                                                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2A5963] transition-colors duration-200"
                                                onClick={() => setIsDesktopDropdownOpen(false)}
                                                role="menuitem"
                                            >
                                                {direction.title}
                                            </Link>
                                        ))}
                                        <hr className="my-2 border-gray-200" />
                                        <Link
                                            href="/department"
                                            className="block px-4 py-3 text-[#F59E2D] font-medium hover:bg-gray-50 hover:text-[#2A5963] transition-colors duration-200"
                                            onClick={() => setIsDesktopDropdownOpen(false)}
                                            role="menuitem"
                                        >
                                            Все отделения
                                        </Link>
                                    </div>
                                )}
                            </li>

                            <li>
                                <Link
                                    href="/specialists"
                                    className="hover:text-[#2A5963] transition-colors duration-200"
                                >
                                    Врачи
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-[#2A5963] transition-colors duration-200"
                                >
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/reviews"
                                    className="hover:text-[#2A5963] transition-colors duration-200"
                                >
                                    Отзывы
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden xl:flex gap-3 items-center">
                        <div className="hidden xl:flex gap-2 items-center">
                            <Image src="/header-phone.svg" alt="Phone" width={24} height={24} />
                            <div className="flex flex-col">
                                <a
                                    href="tel:+77086073074"
                                    className="text-[#2A5963] font-semibold hover:text-[#F59E2D] transition-colors duration-200"
                                >
                                    +7 (708) 607 30-74
                                </a>
                                <p className="text-xs text-gray-600">Ежедневно с 08:00 до 18:00</p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-[#2A5963] hover:bg-[#1e4147] px-3 xl:px-6 py-2 rounded-[15px] text-[#F59E2D] font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
                        >
                            <span className="hidden xl:inline">Записаться онлайн</span>
                            <span className="xl:hidden">Запись</span>
                        </Link>

                        <div className="hidden lg:block">
                            <LangSelector />
                        </div>
                    </div>

                    <button
                        ref={mobileMenuButtonRef}
                        type="button"
                        className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={() => {
                            setIsMobileMenuOpen((v) => !v);
                            setIsDesktopDropdownOpen(false);
                        }}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
            <span
                className={`w-6 h-0.5 bg-[#2A5963] transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
            />
                        <span
                            className={`w-6 h-0.5 bg-[#2A5963] transition-all duration-300 ${
                                isMobileMenuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-[#2A5963] transition-all duration-300 origin-center ${
                                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </button>
                </div>

                <div
                    ref={mobileMenuRef}
                    className={`xl:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
                        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
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
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between py-2 text-[#2A5963] font-medium"
                                        onClick={() => setIsMobileDropdownOpen((v) => !v)}
                                        aria-expanded={isMobileDropdownOpen}
                                        aria-controls="mobile-departments"
                                    >
                                        <span>Отделения</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                                isMobileDropdownOpen ? "rotate-180" : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {isMobileDropdownOpen && (
                                        <div
                                            id="mobile-departments"
                                            className={`pl-4 mt-2 space-y-2 ${
                                                directions.length > 5
                                                    ? "max-h-60 overflow-y-auto dropdown-scroll"
                                                    : ""
                                            }`}
                                        >
                                            {directions.map((direction) => (
                                                <Link
                                                    key={direction.id}
                                                    href={`/department/${direction.id}`}
                                                    className="block py-2 text-gray-600 hover:text-[#F59E2D] transition-colors duration-200"
                                                    onClick={() => {
                                                        setIsMobileDropdownOpen(false);
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
                                                    setIsMobileDropdownOpen(false);
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
                                <Image src="/header-phone.svg" alt="Phone" width={20} height={20} />
                                <div>
                                    <a
                                        href="tel:+77086073074"
                                        className="text-[#2A5963] font-semibold text-base lg:text-lg hover:text-[#F59E2D] transition-colors duration-200"
                                    >
                                        +7 (708) 607 30-74
                                    </a>
                                    <p className="text-xs lg:text-sm text-gray-600">
                                        Ежедневно с 08:00 до 18:00
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="flex-1 bg-[#2A5963] hover:bg-[#1e4147] px-4 py-3 lg:py-2 rounded-[15px] text-[#F59E2D] font-medium text-center transition-colors duration-200 text-sm lg:text-base min-w-0 whitespace-nowrap"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Записаться онлайн
                                </Link>
                                <div className="flex justify-center lg:block">
                                    <LangSelector />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
