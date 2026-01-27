"use client";

import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    label: string;
    description: string;
    titlePosition?: "left" | "right";
}

export default function PageHeader({
    title,
    label,
    description,
    titlePosition = "left",
}: PageHeaderProps) {
    const titleContent = (
        <motion.h1
            initial={{ opacity: 0, x: titlePosition === "left" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[1] tracking-tight text-title dark:text-titleDark"
        >
            {title}
        </motion.h1>
    );

    const labelContent = (
        <motion.div
            initial={{ opacity: 0, x: titlePosition === "left" ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-between h-full"
        >
            <div className="flex flex-col gap-1">
                <SectionLabel label={label} />
                <p className="text-base text-body dark:text-bodyDark">{description}</p>
            </div>
            <p className="text-base text-body dark:text-bodyDark">
                <i className="ri-arrow-down-line text-md"></i>
            </p>
        </motion.div>
    );

    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-20 h-[calc(100vh-4rem)]">
                    {titlePosition === "left" ? (
                        <>
                            <div className="flex items-center">{titleContent}</div>
                            <div className="flex items-start justify-end">{labelContent}</div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-start">{labelContent}</div>
                            <div className="flex items-center">{titleContent}</div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
