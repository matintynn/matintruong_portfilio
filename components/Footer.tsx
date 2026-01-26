"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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
                        <div className="text-body dark:text-bodyDark flex justify-center items-center gap-2 mt-2">
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
                                className="text-sm font-semibold uppercase text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
                            >
                                EMAIL
                            </a>
                            <a
                                href="https://www.instagram.com/matin_uxdesign/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold uppercase text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
                            >
                                INSTAGRAM
                            </a>
                            <a
                                href="https://x.com/matin_uxdesign"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold uppercase text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
                            >
                                TWITTER (X)
                            </a>
                            <a
                                href="https://www.behance.net/matin_truong"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold uppercase text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
                            >
                                BEHANCE
                            </a>
                            <a
                                href="https://dribbble.com/matintruong42"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold uppercase text-body hover:text-title dark:text-bodyDark dark:hover:text-titleDark transition-colors"
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
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-sm text-neutral-400 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                        >
                            Read Me
                        </button>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-neutral-200 dark:border-neutral-800"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                {/* Modal Content */}
                                <div className="space-y-4">
                                    <p className="text-md text-neutral-900 dark:text-neutral-100 font-semibold">
                                        Designed in Figma, built with Next.js by Matin
                                    </p>

                                    <div className="text-base space-y-3 text-neutral-500 dark:text-neutral-500">
                                        <p>
                                            Thanks for checking out my work! Really happy you stopped by. Hope something here caught your eye and got you thinking.
                                        </p>
                                        <p>
                                            Got questions? Want to chat? Hit me up—I would love to connect!
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href="mailto:matintyson.design@gmail.com"
                                            className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                                        >
                                            Get in touch
                                            <i className="ri-arrow-right-up-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}