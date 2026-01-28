"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { href: "/", label: "WORKS" },
        { href: "/services", label: "SERVICES" },
        { href: "/lab", label: "LAB" },
        { href: "/about", label: "ABOUT" },
    ];

    // Dark mode toggle
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDark(isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        localStorage.setItem('darkMode', String(newDarkMode));
        if (newDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    // Scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
                setIsMenuOpen(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div
            role="banner"
            className={`h-20 border-b border-border dark:border-borderDark sticky top-0 bg-white dark:bg-neutral-900 z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <nav className="max-w-container mx-auto px-5 h-full flex items-center justify-between" aria-label="Main navigation">
                {/* Logo */}
                <Link href="/" className="text-[1.5rem] font-extrabold dark:text-neutral-50">
                    <div className="w-[220px] flex flex-col leading-[0.8] tracking-tighter">
                        <span>MATIN</span>
                        <span>STUDIO.</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-semibold uppercase transition-colors ${pathname === link.href
                                ? "text-title dark:text-titleDark"
                                : "text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Group of buttons */}
                <div className="hidden lg:flex w-[220px] justify-end gap-6">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-sm font-semibold uppercase text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
                    >
                        {isDark ? 'LIGHTMODE' : 'DARKMODE'}
                    </button>

                    {/* Contact Link with Arrow */}
                    <Link
                        href="mailto:matintyson.design@gmail.com"
                        className="text-sm font-semibold uppercase flex items-center text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
                    >
                        CONTACT
                        <i className="ri-arrow-right-up-line text-lg"></i>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border dark:border-borderDark rounded-full text-sm font-semibold uppercase transition-colors text-title dark:text-titleDark"
                >
                    {isMenuOpen ? 'CLOSE' : 'OPEN'}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed left-0 right-0 top-20 h-[calc(100vh-80px)] bg-white dark:bg-neutral-900 z-40 flex flex-col items-center pt-16 gap-8 transition-all duration-400 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                        }`}
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-semibold uppercase transition-all ease-out ${pathname === link.href
                                ? "text-title dark:text-titleDark"
                                : "text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark"
                                } ${isMenuOpen
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-10 opacity-0'
                                }`}
                            style={{
                                transitionDuration: '700ms',
                                transitionDelay: isMenuOpen
                                    ? `${index * 120 + 100}ms`
                                    : `${(navLinks.length - index) * 80}ms`
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={toggleDarkMode}
                        className={`text-2xl font-semibold uppercase transition-all ease-out text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark ${isMenuOpen
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-10 opacity-0'
                            }`}
                        style={{
                            transitionDuration: '700ms',
                            transitionDelay: isMenuOpen
                                ? `${navLinks.length * 120 + 100}ms`
                                : '160ms'
                        }}
                    >
                        {isDark ? 'LIGHTMODE' : 'DARKMODE'}
                    </button>

                    <Link
                        href="mailto:matintyson.design@gmail.com"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-2xl font-semibold uppercase flex items-center gap-2 transition-all ease-out text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark ${isMenuOpen
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-10 opacity-0'
                            }`}
                        style={{
                            transitionDuration: '700ms',
                            transitionDelay: isMenuOpen
                                ? `${(navLinks.length + 1) * 120 + 100}ms`
                                : '80ms'
                        }}
                    >
                        CONTACT
                        <i className="ri-arrow-right-up-line text-2xl"></i>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
