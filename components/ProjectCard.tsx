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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex-col p-4 transition-colors duration-300"
        >
            {/* Image or Lottie Background - Always show */}
            {(image || lottie) && (
                <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden border border-neutral-200 dark:border-neutral-800">
                    {lottie ? (
                        <LottiePlayer
                            src={lottie}
                            className="w-full h-full object-cover"
                        />
                    ) : image ? (
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ) : null}
                </div>
            )}

            {/* Content Section - Only shows if there's content */}
            {hasContent && (
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Type and Project Name */}
                    <div className="flex flex-col">
                        {title && (
                            <h3 className="text-base font-semibold text-title dark:text-titleDark">
                                {title}
                            </h3>
                        )}
                        {category && (
                            <span className="text-base text-neutral-500 dark:text-neutral-400">
                                {category}
                            </span>
                        )}
                    </div>

                    {/* Right: View Button - Always visible on mobile, slides in on hover on desktop */}
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
