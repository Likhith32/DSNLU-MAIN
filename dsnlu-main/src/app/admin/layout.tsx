"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Bell, FileText, Image as ImageIcon, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simple client-side auth check
    useEffect(() => {
        if (pathname === "/admin/login") {
            setIsAuthenticated(true);
            return;
        }

        const authCookie = document.cookie.split("; ").find(row => row.startsWith("admin_auth="));
        if (!authCookie) {
            router.push("/admin/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [pathname, router]);

    if (!isAuthenticated) return null;

    if (pathname === "/admin/login") return <>{children}</>;

    const navItems = [
        { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { label: "Notifications", href: "/admin/notifications", icon: Bell },
        { label: "Results", href: "/admin/results", icon: FileText },
        { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    ];

    const handleLogout = () => {
        document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        router.push("/admin/login");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-dsnlu-dark-blue text-white fixed h-full hidden md:block">
                <div className="p-6 border-b border-slate-700">
                    <h1 className="text-xl font-bold">DSNLU Admin</h1>
                </div>
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-dsnlu-azure text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors mt-8"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
