"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { MegaMenu } from "./ui/MegaMenu";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-[72px] md:h-[88px]">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 md:gap-4 group">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
                            <img
                                src="https://dsnlu.ac.in/storage/2023/11/dsnlulogo0-1.png"
                                alt="DSNLU Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm md:text-lg font-bold text-dsnlu-dark-slate leading-tight group-hover:text-dsnlu-azure transition-colors">
                                DAMODARAM SANJIVAYYA
                                <span className="block text-xs md:text-sm font-semibold text-gray-600">NATIONAL LAW UNIVERSITY</span>
                            </h1>
                            <span className="text-[10px] md:text-xs text-dsnlu-lime font-medium italic">
                                "Yato Dharmastato Jayah"
                            </span>
                        </div>
                    </Link>

                    {/* Mega Menu */}
                    <MegaMenu />
                </div>
            </div>
        </nav>
    );
}
