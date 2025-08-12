"use client";
import { FC, useState, useEffect } from "react";
import { Banner } from "@/components/shared/banner/Banner";
import { Link } from "@/i18n/navigation";
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
    const [page, setPage] = useState(0);
    const [lastPage, setLastPage] = useState(false);

    const pageSize = 8;

    // Fetch reviews with pagination
    const fetchReviews = async (pageNum: number) => {
        try {
            const res = await axiosInstance.get<PaginatedResponse>(
                `/reviews?page=${pageNum}&size=${pageSize}&sort=createdAt,desc`
            );
            setReviews((prev) => [...prev, ...res.data.content]);
            setLastPage(res.data.last);
        } catch (err) {
            console.error("Ошибка загрузки отзывов", err);
        }
    };

    useEffect(() => {
        fetchReviews(0);
    }, []);

    // Submit new review
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.message) return;

        try {
            setLoading(true);
            const res = await axiosInstance.post<Review>("/reviews", form);
            setReviews((prev) => [res.data, ...prev]); // prepend new review
            setForm({ name: "", phone: "", message: "" });
        } catch (err) {
            console.error("Ошибка отправки отзыва", err);
        } finally {
            setLoading(false);
        }
    };

    // Load more handler
    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchReviews(nextPage);
    };

    return (
        <>
            <Banner
                title="Отзывы"
                backgroundImage="/specialists-banner.jpg"
                overlayColor="rgba(1, 168, 91, 0.6)"
                breadcrumb={
                    <>
                        <Link href="/">Главная</Link> <span className="mx-1">•</span>{" "}
                        <span className="font-semibold">Отзывы</span>
                    </>
                }
            />

            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-sm"
                >
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Ваше Имя"
                            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Ваш Телефон"
                            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                    </div>
                    <textarea
                        placeholder="Напишите отзыв"
                        rows={4}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
                    >
                        {loading ? "Отправка..." : "Отправить"}
                    </button>
                </form>

                {/* Reviews Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <h3 className="font-bold text-lg">{review.name}</h3>
                            <p className="text-gray-400 text-sm">
                                {review.phone || "None"}
                            </p>
                            <p className="mt-2">{review.message}</p>
                        </div>
                    ))}
                </div>

                {/* Show More */}
                {!lastPage && reviews.length > 0 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Показать ещё
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ReviewsPage;
