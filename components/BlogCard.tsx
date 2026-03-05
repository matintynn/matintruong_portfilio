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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group flex flex-col transition-colors duration-300"
        >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>

            {/* Content — title | summary on left, read link on right */}
            <div className="flex items-center justify-between gap-4 pt-4">
                <div className="flex items-center gap-2 text-base min-w-0">
                    <h3 className="font-semibold text-title dark:text-titleDark truncate">
                        {title}
                    </h3>
                </div>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-sm font-medium text-title dark:text-titleDark transition-all duration-300 flex items-center gap-1.5 lg:opacity-0 lg:translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0"
                >
                    Read
                    <RiArrowRightUpLine size={16} />
                </a>
            </div>
        </motion.div>
    );
}
