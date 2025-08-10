"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";

interface BannerProps {
    title: string;
    breadcrumb?: ReactNode;
    backgroundImage?: string; // путь к картинке
    overlayColor?: string; // rgba(...) или hex с альфой
}

export const Banner: FC<BannerProps> = ({
                                            title,
                                            breadcrumb,
                                            backgroundImage,
                                            overlayColor = "rgba(42, 89, 99, 0.6)",
                                        }) => {
    return (
        <div className="relative w-full h-[200px] flex items-center">
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            )}

            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{ background: overlayColor }}
            ></div>

            <div className="relative z-10 px-8 text-white">
                <h1 className="text-3xl font-bold uppercase">{title}</h1>
                {breadcrumb && (
                    <div className="mt-2 text-sm opacity-80">{breadcrumb}</div>
                )}
            </div>
        </div>
    );
};
