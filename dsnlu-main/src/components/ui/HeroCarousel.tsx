"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  // Admin Props
  admin?: boolean;
  onAdd?: () => void;
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
}

export function HeroCarousel({
  images,
  autoPlayInterval = 5000,
  admin = false,
  onAdd,
  onEdit,
  onDelete,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ FIX 2: Reset currentIndex if it becomes invalid (e.g., after deletion)
  useEffect(() => {
    if (currentIndex >= images.length && images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images.length, currentIndex]);

  // ✅ FIX 3: Stop autoplay when in admin mode for better UX
  useEffect(() => {
    if (admin || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval, admin]);

  // ✅ FIX 1: Empty state guard (Avoids backgroundImage crash)
  if (!images || images.length === 0) {
    return (
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-slate-900 flex items-center justify-center text-white border-b border-white/10">
        <div className="text-center">
          <p className="text-slate-400 mb-4 font-medium">No carousel slides found.</p>
          {admin && (
            <button
              onClick={onAdd}
              className="bg-dsnlu-azure text-white px-6 py-2.5 rounded shadow-lg hover:bg-dsnlu-azure/90 flex items-center gap-2 mx-auto transition-all"
            >
              <Plus size={20} /> Add First Slide
            </button>
          )}
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-slate-900">
      
      {/* ✅ ADMIN CONTROLS OVERLAY */}
      {admin && (
        <div className="absolute top-6 right-6 z-30 flex gap-2">
          <button
            onClick={onAdd}
            className="bg-dsnlu-azure text-white px-3 py-1.5 rounded shadow-lg hover:bg-dsnlu-azure/90 text-sm flex items-center gap-1 font-medium transition-all"
          >
            <Plus size={16} /> Add
          </button>

          <button
            onClick={() => onEdit?.(currentIndex)}
            className="bg-white text-slate-700 px-3 py-1.5 rounded shadow-lg hover:bg-gray-100 text-sm flex items-center gap-1 font-medium transition-all"
          >
            <Pencil size={14} /> Edit
          </button>

          <button
            onClick={() => onDelete?.(currentIndex)}
            className="bg-red-500 text-white px-3 py-1.5 rounded shadow-lg hover:bg-red-600 text-sm flex items-center gap-1 font-medium transition-all"
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      )}

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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
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
      {images.length > 1 && (
        <>
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
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-dsnlu-azure" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}