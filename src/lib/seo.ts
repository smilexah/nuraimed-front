import { Metadata } from 'next';

export interface SEOData {
    title: string | { default: string; template: string };
    description: string;
    keywords?: string;
    canonical?: string;
    openGraph?: {
        title?: string;
        description?: string;
        image?: string;
        type?: 'website' | 'article';
    };
    twitter?: {
        card?: 'summary' | 'summary_large_image';
        title?: string;
        description?: string;
        image?: string;
    };
}

export function generateMetadata(seoData: SEOData, locale: string = 'ru'): Metadata {
    const baseUrl = 'https://di-clinic.kz';

    return {
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        alternates: {
            canonical: seoData.canonical ? `${baseUrl}${seoData.canonical}` : undefined,
            languages: {
                ru: seoData.canonical ? `${baseUrl}/ru${seoData.canonical}` : `${baseUrl}/ru`,
                kk: seoData.canonical ? `${baseUrl}/kk${seoData.canonical}` : `${baseUrl}/kk`,
            },
        },
        openGraph: {
            title:
                seoData.openGraph?.title ||
                (typeof seoData.title === 'string'
                    ? seoData.title
                    : seoData.title.default), // 👈 fallback для объектов
            description: seoData.openGraph?.description || seoData.description,
            url: seoData.canonical ? `${baseUrl}${seoData.canonical}` : baseUrl,
            siteName: 'DI-CLINIC',
            images: seoData.openGraph?.image
                ? [
                    {
                        url: seoData.openGraph.image,
                        width: 1200,
                        height: 630,
                        alt:
                            seoData.openGraph?.title ||
                            (typeof seoData.title === 'string'
                                ? seoData.title
                                : seoData.title.default),
                    },
                ]
                : [
                    {
                        url: `${baseUrl}/og-image.jpg`,
                        width: 1200,
                        height: 630,
                        alt: 'DI-CLINIC - Медицинская клиника в Алматы',
                    },
                ],
            locale,
            type: seoData.openGraph?.type || 'website',
        },
        twitter: {
            card: seoData.twitter?.card || 'summary_large_image',
            title:
                seoData.twitter?.title ||
                (typeof seoData.title === 'string'
                    ? seoData.title
                    : seoData.title.default),
            description: seoData.twitter?.description || seoData.description,
            images: seoData.twitter?.image
                ? [seoData.twitter.image]
                : [`${baseUrl}/og-image.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: process.env.GOOGLE_SITE_VERIFICATION,
            yandex: process.env.YANDEX_VERIFICATION,
        },
    };
}

export const defaultSEO = {
    ru: {
        title: {
            default: 'DI-CLINIC - Медицинская клиника в Алматы | Качественная медицина',
            template: '%s | DI-CLINIC',
        },
        description:
            'DI-CLINIC - современная медицинская клиника в Алматы. Квалифицированные врачи, современное оборудование, индивидуальный подход. Запись на прием онлайн.',
        keywords:
            'медицинская клиника, врачи Алматы, медицина, здоровье, лечение, диагностика, консультация врача, медицинские услуги',
    },
    kk: {
        title: {
            default: 'DI-CLINIC - Алматыдағы медициналық клиника | Сапалы медицина',
            template: '%s | DI-CLINIC',
        },
        description:
            'DI-CLINIC - Алматыдағы заманауи медициналық клиника. Білікті дәрігерлер, заманауи жабдықтар, жеке көзқарас. Онлайн жазылу.',
        keywords:
            'медициналық клиника, Алматы дәрігерлері, медицина, денсаулық, емдеу, диагностика, дәрігерге кеңес, медициналық қызметтер',
    },
};
