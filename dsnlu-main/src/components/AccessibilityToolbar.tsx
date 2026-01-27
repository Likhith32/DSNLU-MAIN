"use client";

import { useState, useEffect } from "react";
import { Settings, Type, Eye, Sun, Moon, Underline, RotateCcw, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccessibilityToolbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100);
    const [modes, setModes] = useState({
        grayscale: false,
        highContrast: false,
        negativeContrast: false,
        lightBackground: false,
        linksUnderline: false,
        readableFont: false,
    });

    // Apply modes to body
    useEffect(() => {
        const body = document.body;

        // Font Size
        document.documentElement.style.fontSize = `${fontSize}%`;

        // Grayscale
        if (modes.grayscale) body.classList.add("a11y-grayscale");
        else body.classList.remove("a11y-grayscale");

        // High Contrast
        if (modes.highContrast) body.classList.add("a11y-high-contrast");
        else body.classList.remove("a11y-high-contrast");

        // Negative Contrast
        if (modes.negativeContrast) body.classList.add("a11y-negative-contrast");
        else body.classList.remove("a11y-negative-contrast");

        // Light Background
        if (modes.lightBackground) body.classList.add("a11y-light-background");
        else body.classList.remove("a11y-light-background");

        // Links Underline
        if (modes.linksUnderline) body.classList.add("a11y-links-underline");
        else body.classList.remove("a11y-links-underline");

        // Readable Font
        if (modes.readableFont) body.classList.add("a11y-readable-font");
        else body.classList.remove("a11y-readable-font");

    }, [modes, fontSize]);

    const toggleMode = (mode: keyof typeof modes) => {
        setModes((prev) => {
            const newModes = { ...prev };

            // Handle mutually exclusive modes if necessary
            if (mode === 'highContrast') {
                newModes.negativeContrast = false;
                newModes.lightBackground = false;
            } else if (mode === 'negativeContrast') {
                newModes.highContrast = false;
                newModes.lightBackground = false;
            } else if (mode === 'lightBackground') {
                newModes.highContrast = false;
                newModes.negativeContrast = false;
            }

            newModes[mode] = !prev[mode];
            return newModes;
        });
    };

    const resetAll = () => {
        setFontSize(100);
        setModes({
            grayscale: false,
            highContrast: false,
            negativeContrast: false,
            lightBackground: false,
            linksUnderline: false,
            readableFont: false,
        });
    };

    const increaseFont = () => setFontSize((prev) => Math.min(prev + 10, 150));
    const decreaseFont = () => setFontSize((prev) => Math.max(prev - 10, 90));

    return (
        <div className="fixed top-1/2 right-0 z-[100] transform -translate-y-1/2 flex items-start">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-dsnlu-azure text-white p-3 rounded-l-md shadow-lg hover:bg-dsnlu-dark-slate transition-colors flex flex-col items-center gap-1"
                aria-label="Accessibility Tools"
            >
                {isOpen ? <X size={24} /> : <Settings size={24} />}
                <span className="text-[10px] font-bold hidden md:block">A11Y</span>
            </button>

            {/* Toolbar Panel */}
            {isOpen && (
                <div className="bg-white p-4 rounded-l-md shadow-2xl w-64 border border-gray-200 mr-2">
                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <h3 className="font-bold text-gray-800">Accessibility Tools</h3>
                        <button onClick={resetAll} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                            <RotateCcw size={12} /> Reset
                        </button>
                    </div>

                    <div className="space-y-3">
                        {/* Font Resize */}
                        <div className="flex gap-2">
                            <button onClick={decreaseFont} className="flex-1 bg-gray-100 hover:bg-gray-200 p-2 rounded text-sm font-medium flex items-center justify-center gap-2">
                                <Type size={14} /> A-
                            </button>
                            <button onClick={increaseFont} className="flex-1 bg-gray-100 hover:bg-gray-200 p-2 rounded text-sm font-medium flex items-center justify-center gap-2">
                                <Type size={18} /> A+
                            </button>
                        </div>

                        {/* Modes Grid */}
                        <div className="grid grid-cols-2 gap-2">
                            <ToolButton
                                icon={<Eye size={16} />}
                                label="Grayscale"
                                active={modes.grayscale}
                                onClick={() => toggleMode('grayscale')}
                            />
                            <ToolButton
                                icon={<Sun size={16} />}
                                label="High Contrast"
                                active={modes.highContrast}
                                onClick={() => toggleMode('highContrast')}
                            />
                            <ToolButton
                                icon={<Moon size={16} />}
                                label="Negative"
                                active={modes.negativeContrast}
                                onClick={() => toggleMode('negativeContrast')}
                            />
                            <ToolButton
                                icon={<Sun size={16} className="text-yellow-500" />}
                                label="Light Bg"
                                active={modes.lightBackground}
                                onClick={() => toggleMode('lightBackground')}
                            />
                            <ToolButton
                                icon={<Underline size={16} />}
                                label="Underline"
                                active={modes.linksUnderline}
                                onClick={() => toggleMode('linksUnderline')}
                            />
                            <ToolButton
                                icon={<Type size={16} />}
                                label="Readable"
                                active={modes.readableFont}
                                onClick={() => toggleMode('readableFont')}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ToolButton({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center p-3 rounded border transition-all gap-1 text-xs font-medium",
                active
                    ? "bg-dsnlu-azure text-white border-dsnlu-azure"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            )}
        >
            <div className="relative">
                {icon}
                {active && <div className="absolute -top-1 -right-2 bg-white text-dsnlu-azure rounded-full p-[1px]"><Check size={8} strokeWidth={4} /></div>}
            </div>
            <span>{label}</span>
        </button>
    );
}
