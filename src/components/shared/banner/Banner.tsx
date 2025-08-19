"use client";

import {FC} from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";

interface BannerProps {
    title: string;
    breadcrumbItems?: string[];
    backgroundImage?: string;
    overlayColor?: string;
}

export const Banner: FC<BannerProps> = ({
                                            title,
                                            breadcrumbItems,
                                            backgroundImage,
                                            overlayColor = "rgba(42, 89, 99, 0.8)",
                                        }) => {
    return (
        <div className="relative w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] flex items-center">
            <div className="container mx-auto px-4">
                {backgroundImage && (
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                )}

                <div
                    className="absolute inset-0"
                    style={{background: overlayColor}}
                ></div>

                <div className="relative z-10 text-white px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight">
                        {title}
                    </h1>
                    <div className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg opacity-90">
                        <Link href="/" className="hover:text-[#F59E2D] transition-colors">
                            Главная
                        </Link>
                        {breadcrumbItems && breadcrumbItems.map((item, index) => (
                            <span key={index}>
                                <span className="mx-1 sm:mx-2">•</span>
                                <span className="hover:text-[#F59E2D] transition-colors">{item}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
