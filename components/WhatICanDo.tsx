"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const services = [
    {
        title: "Product Design",
        description: "End-to-end product thinking — from research and wireframes to polished interfaces and design systems.",
    },
    {
        title: "Web Design & Development",
        description: "Custom websites built with Next.js, Tailwind, and clean code. Designed and developed from scratch.",
    },
    {
        title: "Brand Identity",
        description: "Logos, visual systems, and brand guidelines that give businesses a cohesive, memorable presence.",
    },
    {
        title: "Social Media Content",
        description: "Creating engaging and visually appealing content for various social media platforms.",
    },
    {
        title: "Video Editing",
        description: "Turning raw clips into clean, engaging videos — from short social content to simple brand stories that are easy to watch and share.",
    },
];

export default function WhatICanDo() {
    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column — Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionLabel label="Things I Work On" />
                    </motion.div>

                    {/* Right Column — Description + Services List */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-xl lg:text-2xl font-bold text-title dark:text-titleDark">
                                I mainly work on product design and web design & development, but I also take on projects in brand identity, social media content, and video editing.
                            </p>
                        </motion.div>

                        {/* Services List */}
                        <div className="mt-16 flex flex-col">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="group border-t border-border dark:border-borderDark py-6 lg:py-8"
                                >
                                    <div className="flex items-start justify-between gap-8">
                                        <div>
                                            <h3 className="text-sm lg:text-md font-semibold uppercase text-title dark:text-titleDark tracking-wide">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-body dark:text-bodyDark mt-1 max-w-[480px] leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20 group-hover:mt-2">
                                                {service.description}
                                            </p>
                                        </div>
                                        <span className="text-sm text-neutral-400 dark:text-neutral-600 font-medium mt-1 flex-shrink-0">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Bottom border */}
                            <div className="border-t border-border dark:border-borderDark" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
