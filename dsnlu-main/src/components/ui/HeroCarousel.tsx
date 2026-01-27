"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CarouselProps {
    images: string[];
    autoPlayInterval?: number;
}

export function HeroCarousel({ images, autoPlayInterval = 5000 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [images.length, autoPlayInterval]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center space-y-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-dsnlu-lime/20 text-dsnlu-lime border border-dsnlu-lime/30 text-sm font-medium mb-4 backdrop-blur-sm">
                            Admissions Open for 2025-26
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            Yato Dharmastato <span className="text-dsnlu-azure">Jayah</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto mt-4 drop-shadow-md font-medium">
                            "Where there is Dharma, there is Victory"
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                            <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-xl">
                                Explore Academics
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 shadow-xl">
                                Virtual Tour
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm z-20"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm z-20"
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-dsnlu-azure" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
