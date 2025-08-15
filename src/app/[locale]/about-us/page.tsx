import {FC} from "react";
import {Banner} from "@/components/shared/banner/Banner";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage: FC = () => {
    return (
        <>
            <Banner
                title="О КЛИНИКЕ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["О клинике"]}
            />

            <div className="container mx-auto px-4 py-16">
                {/* Основная информация о клинике */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Добро пожаловать в NuraiMed
                            </h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                NuraiMed — это современный медицинский центр, который предоставляет
                                высококачественные медицинские услуги с использованием передовых
                                технологий и индивидуального подхода к каждому пациенту.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Наша клиника объединяет опытных специалистов различных направлений,
                                которые работают в команде для достижения наилучших результатов
                                в лечении и профилактике заболеваний.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/nuraimed.jpg"
                                alt="NuraiMed клиника"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Миссия и ценности */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Наша миссия
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Обеспечить доступную и качественную медицинскую помощь,
                                основанную на современных методах диагностики и лечения,
                                с заботой о здоровье и благополучии каждого пациента.
                            </p>
                        </div>
                        <div className="bg-green-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Наши ценности
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Профессионализм и компетентность</li>
                                <li>• Индивидуальный подход к каждому пациенту</li>
                                <li>• Соблюдение медицинской этики</li>
                                <li>• Непрерывное развитие и обучение</li>
                                <li>• Современные технологии и оборудование</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Преимущества клиники */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Почему выбирают NuraiMed
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Опытные специалисты
                            </h3>
                            <p className="text-gray-600">
                                Наша команда состоит из врачей с многолетним опытом и
                                высокой квалификацией в различных областях медицины.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Современное оборудование
                            </h3>
                            <p className="text-gray-600">
                                Используем передовое медицинское оборудование для
                                точной диагностики и эффективного лечения.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Индивидуальный подход
                            </h3>
                            <p className="text-gray-600">
                                Каждому пациенту уделяется максимальное внимание,
                                план лечения составляется индивидуально.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Статистика */}
                <section className="bg-gray-50 py-16 -mx-4 px-4 mb-16">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            NuraiMed в цифрах
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-600">Довольных пациентов</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                                <div className="text-gray-600">Специализаций</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
                                <div className="text-gray-600">Лет опыта</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                                <div className="text-gray-600">Поддержка</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Контактная информация */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Свяжитесь с нами
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Готовы предоставить вам профессиональную медицинскую помощь.
                        Записывайтесь на консультацию уже сегодня!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            Связаться с нами
                        </Link>
                        <Link
                            href="/specialists"
                            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            Наши специалисты
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUsPage;