"use client";

import {FC} from "react";
import Image from "next/image";
import {useLocale} from "next-intl";
import {Banner} from "@/components/shared/banner/Banner";

interface SpecialistTranslation {
    languageCode: string;
    description: string;
    education: string;
    experience: string;
    serviceRecord: string;
    specialization: string;
}

interface Specialist {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    profileImage: string; // base64
    translations: SpecialistTranslation[];
}

export const SpecialistView: FC<{ specialist: Specialist }> = ({specialist}) => {
    const locale = useLocale();
    const localeMapping: Record<string, string> = {
        'kk': 'kz',
        'ru': 'ru'
    };

    const backendLocale = localeMapping[locale] || locale;

    const translation =
        specialist.translations.find(t => t.languageCode === backendLocale) ??
        specialist.translations.find(t => t.languageCode === "ru") ??
        specialist.translations[0];

    const fullName = `${specialist.lastName} ${specialist.firstName} ${specialist.middleName}`;

    return (
        <>
            <Banner
                title={fullName}
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["Специалисты", fullName]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                Специалист клиники
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                {fullName}
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                {translation?.specialization || 'Специализация не указана'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                        <h2 className="text-2xl font-bold text-[#2A5963]">О враче</h2>
                                    </div>
                                    <div className="text-gray-600 leading-7 text-lg space-y-4">
                                        {(translation?.description || 'Описание недоступно')
                                            .split(/\r\n|\r|\n/)
                                            .filter(line => line.trim())
                                            .map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))
                                        }
                                    </div>
                                </section>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-[#2A5963]/10 rounded-full flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-[#2A5963]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-[#2A5963]">Образование</h3>
                                        </div>
                                        <div className="text-gray-600 leading-7 space-y-2">
                                            {(translation?.education || 'Информация об образовании недоступна')
                                                .split(/\r\n|\r|\n/)
                                                .filter(line => line.trim())
                                                .map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))
                                            }
                                        </div>
                                    </section>

                                    <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0H8m0 0v-.5A2.5 2.5 0 0110.5 3h3A2.5 2.5 0 0116 5.5V6m-8 0h8" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-[#2A5963]">Опыт работы</h3>
                                        </div>
                                        <div className="text-gray-600 leading-7 space-y-2">
                                            {(translation?.experience || 'Информация об опыте недоступна')
                                                .split(/\r\n|\r|\n/)
                                                .filter(line => line.trim())
                                                .map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))
                                            }
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <aside className="lg:sticky lg:top-6 h-fit">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                    <div className="p-6 lg:p-8 text-center">
                                        <div className="mb-6">
                                            <Image
                                                src={`data:image/png;base64,${specialist.profileImage}`}
                                                alt={fullName}
                                                width={200}
                                                height={250}
                                                className="mx-auto rounded-xl object-cover shadow-lg"
                                                priority
                                            />
                                        </div>

                                        <h3 className="font-bold text-[#2A5963] text-xl mb-2">{fullName}</h3>

                                        <p className="text-[#F59E2D] font-medium mb-4">
                                            {translation?.specialization || 'Специализация не указана'}
                                        </p>

                                        {translation?.serviceRecord && (
                                            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                                <div className="flex items-center justify-center mb-2">
                                                    <svg className="w-5 h-5 text-[#2A5963] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-[#2A5963]">Стаж работы</span>
                                                </div>
                                                <p className="text-gray-600 font-semibold">
                                                    {translation.serviceRecord}
                                                </p>
                                            </div>
                                        )}

                                        <button
                                            className="w-full bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                            onClick={() => {
                                                const message = `Здравствуйте! Мне нужна консультация врача ${fullName}. Можете помочь записаться на приём?`;
                                                window.open(
                                                    `https://wa.me/77086073074?text=${encodeURIComponent(message)}`,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            Записаться на прием
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
