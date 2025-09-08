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

            <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-3">О враче</h2>
                        <p className="leading-7">{translation?.description || 'Описание недоступно'}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-1">Образование</h3>
                        <p className="leading-7">{translation?.education || 'Информация об образовании недоступна'}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-1">Опыт работы</h3>
                        <p className="leading-7">{translation?.experience || 'Информация об опыте недоступна'}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-1">Специализация</h3>
                        <p className="leading-7">{translation?.specialization || 'Специализация не указана'}</p>
                    </div>
                </section>

                <aside className="lg:sticky lg:top-6 h-fit rounded-xl border shadow-sm overflow-hidden">
                    <div className="p-5 text-center">
                        <Image
                            src={`data:image/png;base64,${specialist.profileImage}`}
                            alt={fullName}
                            width={220}
                            height={280}
                            className="mx-auto rounded-xl object-cover"
                            priority
                        />

                        <p className="font-semibold mt-4 text-lg">{fullName}</p>

                        <p className="text-sm text-gray-500 mt-1">
                            Стаж: {translation?.serviceRecord || 'Не указано'}
                        </p>

                        <button
                            className="mt-4 w-full rounded-lg bg-emerald-600 text-white py-2.5 hover:bg-emerald-700 transition"
                            onClick={() => {
                                const message = `Здравствуйте! Мне нужна консультация врача ${fullName}. Можете помочь записаться на приём?`;
                                window.open(
                                    `https://wa.me/77086073074?text=${encodeURIComponent(message)}`,
                                    "_blank"
                                );
                            }}
                        >
                            Записаться
                        </button>
                    </div>
                </aside>
            </div>
        </>
    );
};
