"use client";

import {FC, useState, useRef, useEffect} from "react";
import Image from "next/image";
import {LangSelector} from "@/components/shared/header/LangSelector";
import {Link} from "@/i18n/navigation";

export const Header: FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-gray-800 text-white p-4 w-full sticky top-0 z-[10000] gap-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </Link>
                    <nav>
                        <ul className="flex space-x-4 text-[#F59E2D]">
                            <li>
                                <Link href="/about-us" className="hover:underline">О клинике</Link>
                            </li>
                            <li ref={dropdownRef} className="relative">
                                <div
                                    className="flex items-center hover:underline cursor-pointer"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                >
                                    <span>Отделения</span>
                                </div>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute top-full left-0 bg-gray-700 min-w-[200px] rounded shadow-lg z-20 py-2"
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <Link href="/department/cardiology"
                                              className="block px-4 py-2 hover:bg-gray-600">
                                            Кардиология
                                        </Link>
                                        <Link href="/department/neurology"
                                              className="block px-4 py-2 hover:bg-gray-600">
                                            Неврология
                                        </Link>
                                        <Link href="/department/surgery" className="block px-4 py-2 hover:bg-gray-600">
                                            Хирургия
                                        </Link>
                                        <Link href="/department/therapy" className="block px-4 py-2 hover:bg-gray-600">
                                            Терапия
                                        </Link>
                                        <Link href="/department"
                                              className="block px-4 py-2 hover:bg-gray-600 border-t border-gray-600 mt-1 pt-2">
                                            Все отделения
                                        </Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link href="/specialists" className="hover:underline">Врачи</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">Контакты</Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="hover:underline">Отзывы</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-[10px] items-center">
                    <Image
                        src="/header-phone.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                    <div className="flex flex-col">
                        <a href="tel:+7 (708) 911-37-90">+7 (708) 911-37-90</a>
                        <p>Отвечаем 24/7 без выходных </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-[#2A5963] px-5 py-1 rounded-[15px] text-[#F59E2D]">
                        Записаться онлайн
                    </button>
                    <LangSelector/>
                </div>
            </div>
        </header>
    );
}