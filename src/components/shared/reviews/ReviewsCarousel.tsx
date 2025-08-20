"use client";

import { useEffect, useRef, useState } from "react";
import axiosInstance from "@/api/axiosInstance";

type ReviewDto = {
    id: number;
    name: string;
    phone: string;
    message: string;
    createdAt: string;
};

type Page<T> = {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    empty: boolean;
};

export default function ReviewsCarousel() {
    const ref = useRef<HTMLDivElement>(null);
    const [reviews, setReviews] = useState<ReviewDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    // загрузка отзывов
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { data } = await axiosInstance.get<Page<ReviewDto>>(
                    "/reviews",
                    { params: { page: 0, size: 20 } }
                );
                if (mounted && data.content) {
                    setReviews(data.content);
                }
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => { mounted = false; };
    }, []);

    const update = () => {
        const el = ref.current;
        if (!el) return;
        setCanLeft(el.scrollLeft > 0);
        setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        update();
        const el = ref.current;
        el?.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            el?.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [reviews.length]);

    const scrollBy = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

    if (loading) {
        return (
            <div className="flex gap-6 overflow-hidden pl-4 pr-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="w-[340px] md:w-[380px] h-[200px] rounded-2xl bg-slate-100 animate-pulse" />
                ))}
            </div>
        );
    }

    if (!reviews.length) {
        return (
            <div className="text-center text-slate-500 py-6">
                Отзывов пока нет.
            </div>
        );
    }

    return (
        <div className="relative">
            {canLeft && (
                <button
                    aria-label="Назад"
                    onClick={() => scrollBy(-420)}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[#2A5963] text-white shadow-lg hover:bg-[#2A5963]/90 hover:shadow-xl transition-all duration-300 text-xl font-bold"
                >
                    ‹
                </button>
            )}
            {canRight && (
                <button
                    aria-label="Вперёд"
                    onClick={() => scrollBy(420)}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[#2A5963] text-white shadow-lg hover:bg-[#2A5963]/90 hover:shadow-xl transition-all duration-300 text-xl font-bold"
                >
                    ›
                </button>
            )}
            {canLeft && <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-[5]" />}
            {canRight && <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-[5]" />}

            <div
                ref={ref}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-4 pl-4 pr-4 no-scrollbar"
            >
                {reviews.map((r) => (
                    <article
                        key={r.id}
                        className="snap-start shrink-0 w-[340px] md:w-[380px] rounded-2xl bg-white border border-gray-100 p-6 text-[#2A5963] shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <h4 className="text-2xl font-bold">{r.name || "Аноним"}</h4>
                        <p className="text-slate-400 mt-1">
                            {new Date(r.createdAt).toLocaleDateString("ru-RU", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </p>
                        <p className="mt-6 leading-7">{r.message}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
