import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dsnlu-azure disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-dsnlu-azure text-white hover:bg-blue-600 shadow-md":
                            variant === "primary",
                        "bg-dsnlu-lime text-dsnlu-slate hover:bg-lime-400 shadow-md":
                            variant === "secondary",
                        "border border-dsnlu-azure text-dsnlu-azure hover:bg-dsnlu-azure/10":
                            variant === "outline",
                        "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200":
                            variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-10 px-6 py-2": size === "md",
                        "h-12 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
