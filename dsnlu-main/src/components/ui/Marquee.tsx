"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";

interface MarqueeProps {
    notifications: string[];
    speed?: number;
}

export function Marquee({ notifications, speed = 20 }: MarqueeProps) {
    return (
        <div className="bg-dsnlu-azure text-white py-2 overflow-hidden relative flex items-center z-40">
            <div className="absolute left-0 top-0 bottom-0 bg-dsnlu-azure z-10 px-4 flex items-center shadow-lg">
                <span className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <Bell size={16} className="animate-pulse" /> Latest Updates
                </span>
                <div className="h-4 w-[1px] bg-white/30 ml-4" />
            </div>

            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 pl-48" // Padding left to clear the label
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed,
                    }}
                >
                    {[...notifications, ...notifications].map((note, i) => (
                        <span key={i} className="text-sm font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-dsnlu-lime" />
                            {note}
                        </span>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop if needed, though the above map handles basic doubling. 
            For a true infinite marquee with varying widths, a more complex setup is needed, 
            but this simple version works well for standard text. 
        */}
            </div>
        </div>
    );
}
