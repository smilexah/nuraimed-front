"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useLocale} from "next-intl";
import axiosInstance from "@/api/axiosInstance";

type DirectionTranslation = {
    languageCode: string; // "ru" | "kz" | etc
    title: string;
    description: string;
    offerDetails: string;
};

type Direction = {
    id: number;
    directionImage: string[]; // массив URL/BASE64
    translations: DirectionTranslation[];
};

type Page<T> = {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number; // page index
    size: number;
    empty: boolean;
};

const normalizeLocale = (raw: string) => {
    const base = raw.split("-")[0].toLowerCase();
    console.log(`normalizeLocale: ${raw} → ${base}`);
    return base === "kk" ? "kz" : base; // мэппинг BCP-47 → ваши коды
};

export default function DepartmentsCarousel() {
    const scroller = useRef<HTMLDivElement>(null);
    const locale = useLocale();
    const code = normalizeLocale(locale);

    const [page, setPage] = useState<Page<Direction> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                // подстрой размер под ширину — по 6 на десктоп, 3 на мобилке можно варьировать
                const size = 20;
                const { data } = await axiosInstance.get<Page<Direction>>(`/directions`, {
                    params: { page: 0, size }
                });
                if (mounted) setPage(data);
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => { mounted = false; };
    }, []);

    const items = useMemo(() => {
        if (!page || !page.content) return [];
        return page.content.map((d) => {
            const t =
                d.translations.find(x => x.languageCode === code) ??
                d.translations.find(x => x.languageCode === "ru") ??
                d.translations[0];
            const title = t?.title || "Отделение";
            const img = d.directionImage
                ? `data:image/jpeg;base64,${d.directionImage}`
                : "/placeholder-doctor.jpg";
            const href = `/department/${d.id}`;
            // поддержка base64 и обычных URL
            // const src = img.startsWith("data:") || img.startsWith("http") ? img : `data:image/jpeg;base64,${img}`;
            return { id: d.id, title, img, href };
        });
    }, [page, code]);

    // управление стрелками
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);
    const updateArrows = () => {
        const el = scroller.current;
        if (!el) return;
        const left = el.scrollLeft > 0;
        const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
        setCanLeft(left);
        setCanRight(right);
    };
    useEffect(() => {
        const el = scroller.current;
        updateArrows();
        if (!el) return;
        el.addEventListener("scroll", updateArrows, { passive: true });
        window.addEventListener("resize", updateArrows);
        return () => {
            el.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, [items.length]);

    const scrollBy = (dx: number) => scroller.current?.scrollBy({ left: dx, behavior: "smooth" });

    if (loading) {
        return (
            <div className="relative">
                <div className="flex gap-6 overflow-hidden pl-4 pr-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="w-[320px] md:w-[360px] h-[420px] rounded-2xl bg-slate-100 animate-pulse" />
                    ))}
                </div>
            </div>
        );
    }

    if (!items.length) {
        return (
            <div className="rounded-xl border p-6 text-center text-slate-500">
                Отделения пока недоступны.
            </div>
        );
    }

    return (
        <section>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 mb-8">
                ОТДЕЛЕНИЯ
            </h2>

            <div className="relative">
                {/* стрелка влево */}
                {canLeft && (
                    <button
                        aria-label="Назад"
                        onClick={() => scrollBy(-400)}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50"
                    >
                        ‹
                    </button>
                )}

                {/* стрелка вправо */}
                {canRight && (
                    <button
                        aria-label="Вперёд"
                        onClick={() => scrollBy(400)}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50"
                    >
                        ›
                    </button>
                )}

                {/* градиенты по краям при наличии скролла */}
                {canLeft && <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" />}
                {canRight && <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />}

                {/* лента */}
                <div
                    ref={scroller}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-4 pr-4 pl-4 no-scrollbar"
                >
                    {items.map((d, idx) => (
                        <Link
                            key={d.id ?? idx}
                            href={d.href}
                            className="relative snap-start shrink-0 w-[320px] md:w-[360px] h-[420px] rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <Image
                                src={d.img}
                                alt={d.title}
                                fill
                                sizes="(max-width: 768px) 320px, 360px"
                                className="object-cover"
                                priority={idx < 3}
                            />
                            <div className="absolute inset-0 bg-black/25" />
                            <div className="absolute left-4 right-4 top-4">
                                <p className="text-white font-extrabold text-xl leading-tight drop-shadow">
                                    {d.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
