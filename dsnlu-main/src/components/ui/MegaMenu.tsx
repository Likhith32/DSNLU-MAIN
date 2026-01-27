"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { MenuItem, menuData } from "@/lib/menuData";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function MegaMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveMenu(null);
                setActiveSubMenu(null);
                setActiveSubSubMenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Mobile menu handling
    const toggleMobileMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative" ref={menuRef}>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
                {menuData.map((item) => (
                    <div
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => setActiveMenu(item.label)}
                        onMouseLeave={() => {
                            setActiveMenu(null);
                            setActiveSubMenu(null);
                            setActiveSubSubMenu(null);
                        }}
                    >
                        {item.children ? (
                            <button
                                className={cn(
                                    "px-3 py-2 text-sm font-semibold uppercase tracking-wide flex items-center gap-1 transition-colors rounded-md",
                                    activeMenu === item.label
                                        ? "bg-dsnlu-azure text-white"
                                        : "text-dsnlu-dark-slate hover:bg-dsnlu-azure/10 hover:text-dsnlu-azure"
                                )}
                            >
                                {item.label}
                                <ChevronDown size={14} />
                            </button>
                        ) : (
                            <Link
                                href={item.href || "#"}
                                target={item.target}
                                className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-dsnlu-dark-slate hover:bg-dsnlu-azure/10 hover:text-dsnlu-azure rounded-md transition-colors block"
                            >
                                {item.label}
                            </Link>
                        )}

                        {/* Level 1 Dropdown */}
                        <AnimatePresence>
                            {activeMenu === item.label && item.children && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-dsnlu-azure py-2 z-50"
                                >
                                    {item.children.map((child) => (
                                        <div
                                            key={child.label}
                                            className="relative group/sub"
                                            onMouseEnter={() => setActiveSubMenu(child.label)}
                                            onMouseLeave={() => setActiveSubMenu(null)}
                                        >
                                            {child.children ? (
                                                <button
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-dsnlu-azure flex items-center justify-between"
                                                >
                                                    {child.label}
                                                    <ChevronRight size={14} />
                                                </button>
                                            ) : (
                                                <Link
                                                    href={child.href || "#"}
                                                    target={child.target}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-dsnlu-azure"
                                                >
                                                    {child.label}
                                                </Link>
                                            )}

                                            {/* Level 2 Dropdown */}
                                            {activeSubMenu === child.label && child.children && (
                                                <div className="absolute top-0 left-full w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 -ml-1">
                                                    {child.children.map((subChild) => (
                                                        <div
                                                            key={subChild.label}
                                                            className="relative group/subsub"
                                                            onMouseEnter={() => setActiveSubSubMenu(subChild.label)}
                                                            onMouseLeave={() => setActiveSubSubMenu(null)}
                                                        >
                                                            {subChild.children ? (
                                                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-dsnlu-azure flex items-center justify-between">
                                                                    {subChild.label}
                                                                    <ChevronRight size={14} />
                                                                </button>
                                                            ) : (
                                                                <Link
                                                                    href={subChild.href || "#"}
                                                                    target={subChild.target}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-dsnlu-azure"
                                                                >
                                                                    {subChild.label}
                                                                </Link>
                                                            )}

                                                            {/* Level 3 Dropdown */}
                                                            {activeSubSubMenu === subChild.label && subChild.children && (
                                                                <div className="absolute top-0 left-full w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 -ml-1">
                                                                    {subChild.children.map((subSubChild) => (
                                                                        <Link
                                                                            key={subSubChild.label}
                                                                            href={subSubChild.href || "#"}
                                                                            target={subSubChild.target}
                                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-dsnlu-azure"
                                                                        >
                                                                            {subSubChild.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
                <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-dsnlu-dark-slate hover:bg-gray-100 rounded-md"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[72px] md:top-[88px] left-0 right-0 bg-white shadow-xl border-t border-gray-100 lg:hidden overflow-y-auto max-h-[calc(100vh-72px)] z-40"
                    >
                        <div className="p-4 space-y-2">
                            {menuData.map((item) => (
                                <MobileMenuItem key={item.label} item={item} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function MobileMenuItem({ item, depth = 0 }: { item: MenuItem; depth?: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("border-l-2 border-transparent", depth > 0 && "ml-4 border-gray-100 pl-2")}>
            {item.children ? (
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700"
                    >
                        {item.label}
                        <ChevronDown
                            size={14}
                            className={cn("transition-transform", isOpen && "rotate-180")}
                        />
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                {item.children.map((child) => (
                                    <MobileMenuItem key={child.label} item={child} depth={depth + 1} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ) : (
                <Link
                    href={item.href || "#"}
                    target={item.target}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-dsnlu-azure"
                >
                    {item.label}
                </Link>
            )}
        </div>
    );
}
