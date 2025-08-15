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
                                            overlayColor = "rgba(1, 168, 91, 0.6)",
                                        }) => {
    return (
        <div className="relative w-full h-[200px] flex items-center">
            <div className="container mx-auto">
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

                <div className="relative z-10 text-white">
                    <h1 className="text-3xl font-bold uppercase">{title}</h1>
                    <div className="mt-3 text-base md:text-lg opacity-90">
                        <Link href="/">Главная</Link>
                        {breadcrumbItems && breadcrumbItems.map((item, index) => (
                            <span key={index}>
                                <span className="mx-1">•</span>
                                <span>{item}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
