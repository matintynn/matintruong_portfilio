import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <div className="mx-auto">
                {/* Section 1: Chat About Your Project - 250px height */}
                <div className="h-[250px] flex flex-col items-center justify-center px-5">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl md:text-[40px] font-semibold dark:text-white text-center">
                            Chat about your project
                        </h2>
                        <i className="ri-arrow-right-up-line text-2xl md:text-[56px] dark:text-neutral-300"></i>
                    </div>
                    <div className="text-neutral-500 dark:text-neutral-300 flex justify-center items-center gap-2 mt-2">
                        <div className="relative w-[10px] h-[10px] bg-emerald-100 dark:bg-emerald-400 flex items-center justify-center rounded-full dark:shadow-[0_0_16px_rgba(52,211,153,1)]">
                            <div className="absolute inset-0 rounded-full bg-emerald-200 dark:bg-emerald-400 dark:animate-status-ping"></div>
                            <div className="relative w-[5px] h-[5px] bg-emerald-500 dark:bg-emerald-100 rounded-full animate-status-pulse dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]">
                            </div>
                        </div>
                        <p className="text-sm dark:text-emerald-400">Open for new opportunities</p>
                    </div>
                </div>

                {/* Section 2: Social Links - 40px height on desktop, auto on mobile */}
                <div className="min-h-10 px-5 py-4 md:py-0 md:h-10 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
                    <p className="text-2xl font-semibold dark:text-white">Let's connect</p>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <a
                            href="mailto:matintyson.design@gmail.com"
                            className="text-sm font-semibold uppercase text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
                        >
                            EMAIL
                        </a>
                        <a
                            href="https://www.instagram.com/matin_uxdesign/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold uppercase text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
                        >
                            INSTAGRAM
                        </a>
                        <a
                            href="https://x.com/matin_uxdesign"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold uppercase text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
                        >
                            TWITTER (X)
                        </a>
                        <a
                            href="https://www.behance.net/matin_truong"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold uppercase text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
                        >
                            BEHANCE
                        </a>
                        <a
                            href="https://dribbble.com/matintruong42"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold uppercase text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
                        >
                            DRIBBBLE
                        </a>
                    </div>
                </div>

                {/* Section 3: Copyright - 40px height */}
                <div className="h-10 px-5 flex items-center justify-between border-t border-border dark:border-borderDark">
                    <p className="text-sm text-neutral-400 dark:text-neutral-300">
                        ©2025 All Rights Reserved
                    </p>
                    <p className="text-sm text-neutral-400 dark:text-neutral-300">
                        Designed & Built by Matin
                    </p>
                </div>
            </div>
        </footer>
    );
}
