"use client";

import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const LangSelector: FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value;
        if (locale === currentLocale) return;
        const segments = pathname.split("/");
        segments[1] = locale;
        const newPath = segments.join("/");
        router.push(newPath);
    };

    return (
        <select
            value={currentLocale}
            onChange={changeLocale}
            className="bg-transparent border border-[#F59E2D] text-[#F59E2D] rounded px-2 py-1 cursor-pointer"
        >
            <option value="ru">🇷🇺 RU</option>
            <option value="kk">🇰🇿 KZ</option>
        </select>
    );
};
