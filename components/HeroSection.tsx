"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headlineText =
    "Hi! I’m Matin. I design and build products, websites, and brands. Balancing function with feeling.";

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const words = headlineText.split(" ");

    return (
        <section
            ref={sectionRef}
            className="relative border-b border-border dark:border-borderDark"
            /* Extra height creates scroll room while content stays pinned */
            style={{ height: "200vh" }}
        >
            {/* Sticky inner — stays pinned until the section scroll-room is exhausted */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="max-w-container mx-auto px-5 h-full">
                    <div className="flex flex-col justify-between h-full py-16 lg:py-20">
                        {/* Top area — small descriptive text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="flex justify-center lg:justify-end pt-8 lg:pt-16"
                        >
                            <p className="text-sm lg:text-base text-body dark:text-bodyDark max-w-[380px] leading-relaxed flex items-start gap-3">
                                <span className="inline-block w-10 h-px bg-neutral-400 dark:bg-neutral-600 mt-[10px] flex-shrink-0" />
                                <span>
                                    My favorite feature is <span className="text-title dark:text-titleDark font-semibold">[Ctrl+Z]</span> — because good work comes from trying, undoing, and refining.<span className="text-title dark:text-titleDark font-semibold">[Scroll down to see my works]</span>
                                </span>
                            </p>
                        </motion.div>

                        {/* Bottom area — large bold headline with scroll-linked color reveal */}
                        <div className="pb-8 lg:pb-12">
                            <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight max-w-[1200px] flex flex-wrap">
                                {words.map((word, i) => (
                                    <ScrollWord
                                        key={i}
                                        word={word}
                                        index={i}
                                        total={words.length}
                                        scrollYProgress={scrollYProgress}
                                    />
                                ))}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ScrollWord({
    word,
    index,
    total,
    scrollYProgress,
}: {
    word: string;
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const wordStart = (index / total) * 0.9;
    const wordEnd = wordStart + 0.9 / total;

    const color = useTransform(
        scrollYProgress,
        [wordStart, wordEnd],
        ["#A3A3A3", "#0A0A0A"]
    );

    const colorDark = useTransform(
        scrollYProgress,
        [wordStart, wordEnd],
        ["#525252", "#FFFFFF"]
    );

    return (
        <>
            <motion.span
                style={{ color }}
                className="dark:hidden transition-none"
            >
                {word}
            </motion.span>
            <motion.span
                style={{ color: colorDark }}
                className="hidden dark:inline transition-none"
            >
                {word}
            </motion.span>
            {index < total - 1 && <span>&nbsp;</span>}
        </>
    );
}
