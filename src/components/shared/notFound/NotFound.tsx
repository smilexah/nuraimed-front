'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {FC} from "react";

export const NotFound: FC = () => {
    const t = useTranslations('NotFound');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-[96px] font-bold text-[#4147BF] dark:text-[#666CF4] mb-4">404</h1>
            <h2 className="text-2xl md:text-[32px] font-bold text-[#232323] dark:text-white mb-2">
                {t('title')}
            </h2>
            <p className="text-base md:text-lg text-[#232323] dark:text-white mb-6">
                {t('description')}
            </p>
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-[#4147BF] dark:bg-[#666CF4] text-white rounded hover:bg-[#363aa0] transition"
            >
                {t('back')}
            </Link>
        </div>
    );
}
