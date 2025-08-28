import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DI-CLINIC - Медицинская клиника в Алматы | Качественная медицина",
    description:
        "DI-CLINIC - современная медицинская клиника в Алматы. Квалифицированные врачи, современное оборудование, индивидуальный подход. Запись на прием онлайн.",
    keywords:
        "медицинская клиника, врачи Алматы, медицина, здоровье, лечение, диагностика, консультация врача, медицинские услуги",
    authors: [{ name: "DI-CLINIC" }],
    creator: "DI-CLINIC",
    publisher: "DI-CLINIC",
    metadataBase: new URL("https://di-clinic.kz"),
    alternates: {
        canonical: "/",
        languages: {
            ru: "/ru",
            kk: "/kk",
        },
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "https://di-clinic.kz",
        siteName: "DI-CLINIC",
        title: "DI-CLINIC - Медицинская клиника в Алматы",
        description:
            "Современная медицинская клиника в Алматы. Квалифицированные врачи, современное оборудование, индивидуальный подход.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "DI-CLINIC - Медицинская клиника в Алматы",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "DI-CLINIC - Медицинская клиника в Алматы",
        description:
            "Современная медицинская клиника в Алматы. Квалифицированные врачи, современное оборудование.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
            <meta name="theme-color" content="#2A5963" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="format-detection" content="telephone=yes" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Analytics
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID}
          yandexMetricaId={process.env.NEXT_PUBLIC_YM_ID}
        />
        </body>
        </html>
    );
}
