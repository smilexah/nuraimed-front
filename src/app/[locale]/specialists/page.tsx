"use client";

import { FC, useState, useEffect, useRef } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import Image from "next/image";
import axiosInstance from "@/api/axiosInstance";
import { Link } from "@/i18n/navigation";

type Specialist = {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    profileImage: string[];
    translations: {
        languageCode: string;
        description: string;
        education: string;
        experience: string;
        specialization: string;
    }[];
};

type PaginatedResponse = {
    content: Specialist[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
};

const SpecialistsPage: FC = () => {
    const [specialists, setSpecialists] = useState<Specialist[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(false);
    const initialLoadRef = useRef(false);

    const pageSize = 8;

    const fetchSpecialists = async (pageNum: number, replace = false) => {
        try {
            if (pageNum === 0) {
                setLoading(true);
            } else {
                setLoadingMore(true);
            }

            const res = await axiosInstance.get<PaginatedResponse>(
                `/doctors?page=${pageNum}&size=${pageSize}&sort=id,desc`
            );

            if (replace) {
                setSpecialists(res.data.content);
            } else {
                setSpecialists((prev) =>
                    pageNum === 0 ? res.data.content : [...prev, ...res.data.content]
                );
            }

            setLastPage(res.data.last);
            setPage(pageNum);
        } catch (err) {
            console.error("Ошибка загрузки специалистов", err);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        if (!initialLoadRef.current) {
            initialLoadRef.current = true;
            fetchSpecialists(0);
        }
    }, []);

    const handleLoadMore = async () => {
        if (!lastPage && !loadingMore) {
            await fetchSpecialists(page + 1);
        }
    };

    return (
        <>
            <Banner
                title="СПЕЦИАЛИСТЫ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["Специалисты"]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                Наши врачи
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Медицинские специалисты
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Наша команда опытных врачей готова оказать вам качественную медицинскую помощь. Каждый специалист имеет высокую квалификацию и многолетний опыт работы.
                            </p>
                        </div>

                        {loading && specialists.length === 0 && (
                            <div className="flex justify-center items-center py-16">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#F59E2D] border-t-transparent"></div>
                                    <p className="text-[#2A5963] text-lg font-medium">Загрузка специалистов...</p>
                                </div>
                            </div>
                        )}

                        {specialists.length > 0 && (
                            <div>
                                <div className="flex items-center mb-8">
                                    <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                    <h2 className="text-2xl font-bold text-[#2A5963]">
                                        Наши специалисты ({specialists.length})
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {specialists.map((spec) => {
                                        const fullName = `${spec.lastName} ${spec.firstName} ${spec.middleName}`;
                                        const specialization = spec.translations[0]?.specialization || "";
                                        const profileImage = spec.profileImage
                                            ? `data:image/jpeg;base64,${spec.profileImage}`
                                            : "/placeholder-doctor.jpg";

                                        return (
                                            <div
                                                key={spec.id}
                                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                            >
                                                <Link href={`/specialists/${spec.id}`}>
                                                    <div className="relative w-full h-64 overflow-hidden">
                                                        <Image
                                                            src={profileImage}
                                                            alt={fullName}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    </div>
                                                    <div className="p-6">
                                                        <h3 className="font-bold text-lg text-[#2A5963] mb-2 group-hover:text-[#F59E2D] transition-colors">
                                                            {fullName}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                            {specialization}
                                                        </p>
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 text-[#F59E2D] mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                                                </svg>
                                                                <span className="text-[#2A5963] font-bold text-lg">7000 ₸</span>
                                                            </div>
                                                            <div className="flex items-center text-xs text-gray-500">
                                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                                </svg>
                                                                Консультация
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className="px-6 pb-6">
                                                    <Link
                                                        href={`/specialists/${spec.id}`}
                                                        className="w-full block text-center bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                                    >
                                                        Записаться на приём
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {!loading && specialists.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#2A5963] mb-4">Пока нет специалистов</h3>
                                <p className="text-gray-500 text-lg">Мы работаем над добавлением информации о наших врачах.</p>
                            </div>
                        )}

                        {!lastPage && specialists.length > 0 && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={handleLoadMore}
                                    disabled={loadingMore}
                                    className="bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] px-8 py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    {loadingMore ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#F59E2D] border-t-transparent mr-2"></div>
                                            Загрузка...
                                        </div>
                                    ) : (
                                        "Показать ещё специалистов"
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialistsPage;
