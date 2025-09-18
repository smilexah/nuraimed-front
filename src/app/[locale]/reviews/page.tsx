"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import axiosInstance from "@/api/axiosInstance";

type Review = {
    id: number;
    name: string;
    phone: string;
    message: string;
    createdAt: string;
};

type PaginatedResponse = {
    content: Review[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
};

const ReviewsPage: FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(false);
    const [totalElements, setTotalElements] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const initialLoadRef = useRef(false);

    const pageSize = 8;

    const fetchReviews = async (pageNum: number, replace = false) => {
        try {
            setError(null);
            if (pageNum === 0) {
                setLoading(true);
            } else {
                setLoadingMore(true);
            }

            const res = await axiosInstance.get<PaginatedResponse>(
                `/reviews?page=${pageNum}&size=${pageSize}&sort=createdAt,desc`
            );

            if (replace) {
                setReviews(res.data.content);
            } else {
                setReviews((prev) => pageNum === 0 ? res.data.content : [...prev, ...res.data.content]);
            }

            setLastPage(res.data.last);
            setPage(pageNum);
            setTotalElements(res.data.totalElements);
        } catch (err) {
            console.error("Ошибка загрузки отзывов", err);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        if (!initialLoadRef.current) {
            initialLoadRef.current = true;
            fetchReviews(0);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name.trim()) {
            setError("Пожалуйста, введите ваше имя");
            return;
        }

        if (!form.message.trim()) {
            setError("Пожалуйста, напишите отзыв");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await axiosInstance.post<Review>("/reviews", {
                name: form.name.trim(),
                phone: form.phone.trim(),
                message: form.message.trim()
            });

            setForm({ name: "", phone: "", message: "" });
            await fetchReviews(0, true);

        } catch (err) {
            console.error("Ошибка отправки отзыва", err);
            setError("Ошибка при отправке отзыва. Попробуйте еще раз.");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        if (!lastPage && !loadingMore) {
            await fetchReviews(page + 1);
        }
    };

    return (
        <>
            <Banner
                title="ОТЗЫВЫ"
                backgroundImage="/banners/reviews-banner.jpg"
                breadcrumbItems={["Отзывы"]}
            />

            <div className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-[#F59E2D]/10 text-[#F59E2D] rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Отзывы наших пациентов
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A5963] mb-6 leading-tight">
                                Ваше мнение важно для нас
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Поделитесь своим опытом лечения в нашей клинике. Ваши отзывы помогают нам становиться лучше и помогают другим пациентам сделать правильный выбор.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg max-w-4xl mx-auto">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </div>
                            </div>
                        )}

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                    <h2 className="text-2xl font-bold text-[#2A5963]">
                                        Оставить отзыв
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Ваше имя *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Введите ваше имя"
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E2D] focus:border-transparent transition-all"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                disabled={loading}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Ваш телефон
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+7 (___) ___-__-__"
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E2D] focus:border-transparent transition-all"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ваш отзыв *
                                        </label>
                                        <textarea
                                            placeholder="Расскажите о своем опыте лечения в нашей клинике..."
                                            rows={5}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E2D] focus:border-transparent transition-all resize-none"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            disabled={loading}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#F59E2D] border-t-transparent mr-2"></div>
                                                Отправка...
                                            </div>
                                        ) : (
                                            "Отправить отзыв"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {loading && reviews.length === 0 && (
                            <div className="flex justify-center items-center py-16">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#F59E2D] border-t-transparent"></div>
                                    <p className="text-[#2A5963] text-lg font-medium">Загрузка отзывов...</p>
                                </div>
                            </div>
                        )}

                        {reviews.length > 0 && (
                            <div>
                                <div className="flex items-center mb-8">
                                    <div className="w-1 h-8 bg-[#F59E2D] rounded-full mr-4"></div>
                                    <h2 className="text-2xl font-bold text-[#2A5963]">
                                        Отзывы пациентов
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {reviews.map((review) => (
                                        <article
                                            key={review.id}
                                            className="flex flex-col gap-3  bg-white rounded-2xl border border-gray-100 p-6 text-[#2A5963] shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-12 h-12 bg-[#F59E2D]/10 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-[#F59E2D]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="font-bold text-[#2A5963] text-lg">{review.name}</h3>
                                                    <div className="flex gap-2 items-center text-slate-400 text-sm">
                                                        <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd"
                                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                        {new Date(review.createdAt).toLocaleDateString("ru-RU", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric"
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="leading-7">{review.message}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!loading && reviews.length === 0 && (
                            <div className="text-center py-16">
                                <div
                                    className="w-24 h-24 bg-[#F59E2D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-[#F59E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7m3 4h4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#2A5963] mb-4">Пока нет отзывов</h3>
                                <p className="text-gray-500 text-lg">Будьте первым, кто оставит отзыв о нашей клинике!</p>
                            </div>
                        )}

                        {totalElements > 8 && !lastPage && reviews.length > 0 && !loading && (
                            <div className="mt-8 text-center">
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
                                        "Показать ещё отзывы"
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

export default ReviewsPage;