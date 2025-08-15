import Link from "next/link";
import Image from "next/image";
import DepartmentsCarousel from "@/components/shared/departments/DepartmentsCarousel";
import ReviewsCarousel from "@/components/shared/reviews/ReviewsCarousel";

export default async function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Главный баннер */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Добро пожаловать в NuraiMed
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                        Современный медицинский центр с индивидуальным подходом к каждому пациенту
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                        >
                            Записаться на прием
                        </Link>
                        <Link
                            href="/about-us"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                        >
                            О клинике
                        </Link>
                    </div>
                </div>
            </section>

            {/* Преимущества клиники */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Почему выбирают NuraiMed
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Опытные врачи
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Наша команда состоит из квалифицированных специалистов
                                с многолетним опытом работы в ведущих медицинских центрах
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Современное оборудование
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Используем новейшее медицинское оборудование для
                                точной диагностики и эффективного лечения
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Удобное время
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Работаем без выходных и предлагаем гибкое
                                расписание для вашего удобства
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* О клинике кратко */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/nuraimed.jpg"
                                alt="NuraiMed медицинский центр"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                О медицинском центре NuraiMed
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                NuraiMed — это современный медицинский центр, который предоставляет
                                комплексные медицинские услуги на высоком профессиональном уровне.
                                Мы используем передовые методы диагностики и лечения.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Наша миссия — обеспечить каждому пациенту качественную медицинскую
                                помощь в комфортных условиях с индивидуальным подходом к лечению.
                            </p>
                            <Link
                                href="/about-us"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                            >
                                Подробнее о клинике
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Наши направления */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Наши направления
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Мы предлагаем широкий спектр медицинских услуг в различных областях медицины
                        </p>
                    </div>
                    <DepartmentsCarousel />
                </div>
            </section>

            {/* Экстренная помощь */}
            <section className="py-20 bg-red-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">
                            Нужна экстренная помощь?
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed">
                            Наша служба экстренной медицинской помощи работает круглосуточно.
                            Обратитесь к нам в любое время!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+77012345678"
                                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                            >
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Вызвать скорую
                            </a>
                            <Link
                                href="/contact"
                                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center"
                            >
                                Связаться с нами
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Отзывы пациентов */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Отзывы наших пациентов
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Мы гордимся доверием наших пациентов и стремимся к их полному выздоровлению
                        </p>
                    </div>
                    <ReviewsCarousel />
                </div>
            </section>

            {/* Статистика */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        NuraiMed в цифрах
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-5xl font-bold mb-2">1500+</div>
                            <div className="text-xl text-blue-100">Довольных пациентов</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold mb-2">15+</div>
                            <div className="text-xl text-blue-100">Медицинских направлений</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold mb-2">20+</div>
                            <div className="text-xl text-blue-100">Опытных врачей</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold mb-2">7</div>
                            <div className="text-xl text-blue-100">Лет работы</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Призыв к действию */}
            <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">
                            Позаботьтесь о своем здоровье сегодня
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed">
                            Запишитесь на консультацию к нашим специалистам и получите
                            профессиональную медицинскую помощь в комфортной обстановке
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                            >
                                Записаться на прием
                            </Link>
                            <Link
                                href="/specialists"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-all"
                            >
                                Наши специалисты
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}