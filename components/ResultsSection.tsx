"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

interface ResultsMetric {
    value: string;
    label: string;
}

interface ResultsSectionProps {
    label: string;
    title: string;
    description: string;
    image?: string;
    clientFeedback?: {
        quote: string;
        author: string;
    };
    metrics?: ResultsMetric[]; // max 2
}

export default function ResultsSection({
    label,
    title,
    description,
    image,
    clientFeedback,
    metrics,
}: ResultsSectionProps) {
    return (
        <section className="border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <SectionLabel label={label} />
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                            {title}
                        </h2>
                        <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                            {description}
                        </p>

                        {/* Metrics - max 2 */}
                        {metrics && metrics.length > 0 && (
                            <div className="grid grid-cols-2 gap-6 mt-4">
                                {metrics.slice(0, 2).map((metric, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <span className="text-2xl font-semibold text-title dark:text-titleDark">
                                            {metric.value}
                                        </span>
                                        <span className="text-sm text-body dark:text-bodyDark">
                                            {metric.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Client Feedback */}
                        {clientFeedback && (
                            <div className="mt-4 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                <p className="text-base text-title dark:text-titleDark italic mb-3">
                                    "{clientFeedback.quote}"
                                </p>
                                <p className="text-sm text-body dark:text-bodyDark">
                                    — {clientFeedback.author}
                                </p>
                            </div>
                        )}

                        {/* Image */}
                        {image && (
                            <div className="w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mt-4">
                                <img
                                    src={image}
                                    alt="Results"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
