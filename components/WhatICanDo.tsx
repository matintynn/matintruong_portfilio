"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const services = [
    {
        title: "Product Design",
        description: "End-to-end product thinking — research, wireframes, prototypes, and polished UI. I focus on solving real user problems while keeping the experience intuitive and the visuals sharp.",
    },
    {
        title: "Web Design & Development",
        description: "Custom websites designed and built from scratch with Next.js and Tailwind. Fast, responsive, and crafted with attention to both aesthetics and performance.",
    },
    {
        title: "Brand Identity",
        description: "Logos, color systems, typography, and brand guidelines that help businesses show up consistently and make a lasting impression across every touchpoint.",
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
                                I focus on turning complex problems into clear, usable experiences. I work across the full design process from shaping early concepts to shipping polished interfaces that work for real people.
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
                                    className={`group border-t border-border dark:border-borderDark py-6 lg:py-8${index === services.length - 1 ? " pb-0" : ""}`}
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

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
