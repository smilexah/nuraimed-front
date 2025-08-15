"use client";

import { FC, useState, useEffect, useRef } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import Image from "next/image";
import axiosInstance from "@/api/axiosInstance";
import Link from "next/link";

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
    const [error, setError] = useState<string | null>(null);
    const initialLoadRef = useRef(false);

    const pageSize = 8;

    const fetchSpecialists = async (pageNum: number, replace = false) => {
        try {
            setError(null);
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
            setError("Ошибка при загрузке специалистов. Попробуйте еще раз.");
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

            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-start text-2xl md:text-3xl font-bold mb-8 text-[#0A1F44]">
                    Медицинские специалисты
                </h2>

                {error && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {loading && specialists.length === 0 && (
                    <div className="flex justify-center items-center py-12">
                        <div className="text-gray-500">Загрузка специалистов...</div>
                    </div>
                )}

                {specialists.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialists.map((spec) => {
                            const fullName = `${spec.lastName} ${spec.firstName} ${spec.middleName}`;
                            const specialization = spec.translations[0]?.specialization || "";
                            const profileImage = spec.profileImage
                                ? `data:image/jpeg;base64,${spec.profileImage}`
                                : "/placeholder-doctor.jpg";

                            return (
                                <div
                                    key={spec.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition cursor-pointer"
                                >
                                    <Link href={`/specialists/${spec.id}`}>
                                        <div className="relative w-full h-64">
                                            <Image
                                                src={profileImage}
                                                alt={fullName}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col gap-1">
                                            <h3 className="font-semibold text-lg">{fullName}</h3>
                                            <p className="text-sm text-gray-500">{specialization}</p>
                                            <div className="mt-3">
                                                <p className="text-green-600 font-bold text-lg">
                                                    7000 ₸
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="p-4 pt-0">
                                        <Link
                                            href={`/specialists/${spec.id}`}
                                            className="mt-2 w-full block text-center bg-green-50 text-green-600 border border-green-200 py-2 rounded-lg hover:bg-green-100 transition"
                                        >
                                            Записаться
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {!loading && specialists.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        Пока нет специалистов.
                    </div>
                )}

                {!lastPage && specialists.length > 0 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleLoadMore}
                            disabled={loadingMore}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loadingMore ? "Загрузка..." : "Показать ещё"}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default SpecialistsPage;
