"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";
import LottiePlayer from "./LottiePlayer";

export type ProjectStatus = "Shipped" | "Concept" | "In Progress";

export interface ProjectCardProps {
    icon?: string;
    category?: string;
    title?: string;
    description?: string;
    link?: string;
    linkText?: string;
    image?: string;
    lottie?: string;
    type?: ProjectStatus;
}

export default function ProjectCard({
    icon,
    category,
    title,
    description,
    link,
    linkText = "View",
    image,
    lottie,
}: ProjectCardProps) {
    const hasContent = category || title || description || link;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group flex flex-col transition-colors duration-300"
        >
            {/* Image or Lottie */}
            {(image || lottie) && (
                <div className="aspect-[4/3] overflow-hidden border border-neutral-200 dark:border-neutral-800">
                    {lottie ? (
                        <LottiePlayer
                            src={lottie}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : image ? (
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ) : null}
                </div>
            )}

            {/* Content — name | category on left, view button on right */}
            {hasContent && (
                <div className="flex items-center justify-between gap-4 pt-4">
                    <div className="flex items-center gap-2 text-base min-w-0">
                        {title && (
                            <h3 className="font-semibold text-title dark:text-titleDark truncate">
                                {title}
                            </h3>
                        )}
                        {category && (
                            <>
                                <span className="text-neutral-300 dark:text-neutral-600 flex-shrink-0">|</span>
                                <span className="text-neutral-500 dark:text-neutral-400 truncate">
                                    {category}
                                </span>
                            </>
                        )}
                    </div>

                    {link && (
                        <a
                            href={link}
                            target={link.startsWith("http") ? "_blank" : undefined}
                            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex-shrink-0 text-sm font-medium text-title dark:text-titleDark transition-all duration-300 flex items-center gap-1.5 lg:opacity-0 lg:translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0"
                        >
                            {linkText}
                            <RiArrowRightUpLine size={16} />
                        </a>
                    )}
                </div>
            )}
        </motion.div>
    );
}
