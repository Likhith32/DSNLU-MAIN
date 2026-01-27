import React from "react";

interface BannerProps {
    title: string;
    backgroundImage?: string;
}

export function Banner({
    title,
    backgroundImage = "https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg",
}: BannerProps) {
    return (
        <div className="relative h-[300px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative container mx-auto flex h-full flex-col justify-center px-4 text-white">
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                    {title}
                </h1>
                <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
            </div>
        </div>
    );
}
