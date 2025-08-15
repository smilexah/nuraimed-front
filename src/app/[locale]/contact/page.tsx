"use client";
import { FC } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import Image from "next/image";

const ContactPage: FC = () => {
    return (
        <>
            <Banner
                title="КОНТАКТЫ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["Контакты"]}
            />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#0A1F44]">
                    ОСТАВИТЬ ЗАЯВКУ НА ПРИЁМ
                </h2>

                <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                    {/* Левая часть */}
                    <div className="flex flex-col justify-center gap-4 p-8 flex-1 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
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
                            className="bg-white text-green-600 hover:bg-green-50 font-medium py-3 px-5 rounded-lg shadow-md transition-all flex items-center gap-2 w-fit"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            Написать в WhatsApp
                        </button>
                    </div>

                    {/* Правая часть */}
                    <div className="relative md:w-1/3 h-64 md:h-auto">
                        <Image
                            src="/specialists-banner.jpg"
                            alt="Call Center"
                            className="w-full h-full object-cover"
                            width={500}
                            height={400}
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#0A1F44]">
                    Наш филиал в Алматы
                </h2>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-64 md:h-96">
                        <Image
                            src="/nuraimed.jpg" // положи сюда картинку
                            alt="Филиал Алматы"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <a
                        href="https://go.2gis.com/l1HtW" // вставь сюда ссылку на 2GIS
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-4 flex items-center gap-2 hover:bg-green-600 transition-colors text-lg font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 11c0 .828-.672 1.5-1.5 1.5S9 11.828 9 11s.672-1.5 1.5-1.5S12 10.172 12 11zM21 10c0 6.627-9 13-9 13S3 16.627 3 10a9 9 0 1118 0z"
                            />
                        </svg>
                        г. Алматы, ул. Жунисова, 4а
                    </a>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
