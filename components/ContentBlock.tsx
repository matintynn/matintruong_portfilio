"use client";

import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

interface ContentSection {
    label: string;
    description: string;
}

interface ContentBlockProps {
    title: string;
    mainLabel: string;
    mainDescription: string;
    sections?: ContentSection[];
    externalLink?: {
        text: string;
        url: string;
    };
    image?: string;
    titlePosition?: "left" | "right";
}

export default function ContentBlock({
    mainLabel,
    mainDescription,
    sections,
    externalLink,
    image,
    titlePosition = "left",
}: ContentBlockProps) {
    const titleAndContentArea = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-6"
        >
            {/* Title */}
            {/* <h1 className="text-[40px] font-semibold leading-[1.2] tracking-tight text-neutral-900 dark:text-white">
                {title}
            </h1> */}

            {/* Main Content */}
            {/* Main Label and Description */}
            <div className="flex flex-col">
                <div className="mb-1">
                    <SectionLabel label={mainLabel} />
                </div>
                <p className="text-base text-neutral-500 dark:text-neutral-300">
                    {mainDescription}
                </p>
            </div>

            {/* Additional Sections */}
            {sections && sections.length > 0 && (
                <div className="flex gap-4">
                    {sections.map((section, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <strong className="text-base font-semibold text-neutral-900 dark:text-white">
                                {section.label}
                            </strong>
                            <p className="text-base text-neutral-500 dark:text-neutral-300">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* External Link */}
            {externalLink && (
                <a
                    href={externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold underline text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors w-fit"
                >
                    {externalLink.text}
                </a>
            )}
        </motion.div>
    );

    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-24">
                    {titlePosition === "left" ? (
                        <>
                            <div className="flex items-start">{titleAndContentArea}</div>
                            <div className="flex items-center justify-end w-full">
                                {image && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                        className="w-full border border-neutral-300 dark:border-neutral-700 rounded-2xl overflow-hidden"
                                    >
                                        <img src={image} alt="" className="w-full h-auto object-cover" />
                                    </motion.div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center w-full">
                                {image && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                                        className="w-full border border-neutral-300 dark:border-neutral-700 rounded-2xl overflow-hidden"
                                    >
                                        <img src={image} alt="" className="w-full h-auto object-cover" />
                                    </motion.div>
                                )}
                            </div>
                            <div className="flex items-start justify-end">{titleAndContentArea}</div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
