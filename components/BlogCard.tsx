"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";

export interface BlogCardProps {
    title: string;
    summary: string;
    link: string;
    image: string;
}

export default function BlogCard({
    title,
    summary,
    link,
    image,
}: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex-col p-4 transition-colors duration-300"
        >
            {/* Image */}
            <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <h3 className="text-base font-semibold text-title dark:text-titleDark">
                    {title}
                </h3>
                <p className="text-base text-neutral-500 dark:text-neutral-400">
                    {summary}
                </p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-title dark:text-titleDark hover:gap-2 transition-all duration-300 mt-2"
                >
                    Read on Medium
                    <RiArrowRightUpLine size={16} />
                </a>
            </div>
        </motion.div>
    );
}
