"use client";

import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const interests = [
    {
        title: "Current Role",
        description:
            "Product Designer at Linqy.ai, designing intuitive user experiences for MedTech products that support patient screening.",
    },
    {
        title: "Tool Box",
        description:
            "Figma, HTML/CSS/JavaScript, React, Next.js, Tailwind, Sanity, Supabase, Framer, Lottie, Hotjar, Semrush, Adobe Creative Suite, Procreate, Git/Github, Notion, Miro, and more.",
    },
    {
        title: "Writing",
        description:
            "I recently started a blog to share my thoughts on design, UX, and everyday moments.",
        link: "/journal",
    },
    {
        title: "Travel",
        description:
            "Three solo trips across continents taught me how much I love culture, food, and meeting new people. Always up for swapping travel stories and food tips.",
    },
    {
        title: "Crypto & Solana",
        description:
            "Superteam Canada introduced me to Solana. Fast tech, but even better, an amazing community of builders. Exploring, learning, and always excited to connect.",
    },
    {
        title: "Side Hustle",
        description:
            "I help local businesses with quick, focused design support.",
        link: "/services",
    },
];

export default function AboutMeSection() {
    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                {/* About Me Header — photo left, bio right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left — Section label + Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <SectionLabel label="Hello! I'm Matin" className="mb-8" />

                    </motion.div>

                    {/* Right — Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-base text-title dark:text-titleDark leading-relaxed">
                            I design, I explore, I talk to everyone in the room—and love it.
                        </p>
                        <p className="text-base text-title dark:text-titleDark leading-relaxed mt-6">
                            I&apos;m currently working as a Product Designer at
                            Linqy.ai, where my team and I are on a mission to build
                            intuitive MedTech products that support patient screening
                            and improve healthcare workflows.
                        </p>
                        <p className="text-base text-title dark:text-titleDark leading-relaxed mt-6">
                            I thrive in collaborative teams where design, product, and
                            engineering build together. Always happy to chat about
                            design, travel, food, or emerging tech. Hit me up!
                        </p>

                        <div className="mt-10">
                            <div className="w-[72px] h-[72px] relative aspect-[3/4] overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-2">
                                <Image
                                    src="/images/about/my-profile-500.jpg"
                                    alt="Matin Truong"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-body dark:text-bodyDark">
                                Based in
                            </span>
                            <p className="text-base font-semibold text-title dark:text-titleDark mt-1">
                                Toronto, Canada
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Interests — styled like WhatICanDo service list */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-20 lg:mt-28">
                    {/* Left Column — Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <SectionLabel label="More About Me" />
                    </motion.div>

                    {/* Right Column — List */}
                    <div>
                        <div className="flex flex-col">
                            {interests.map((interest, index) => {
                                const row = (
                                    <motion.div
                                        key={interest.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.08,
                                        }}
                                        className="group border-t border-border dark:border-borderDark py-6 lg:py-8"
                                    >
                                        <div className="flex items-start justify-between gap-8">
                                            <div>
                                                <h3 className="text-sm lg:text-md font-semibold uppercase text-title dark:text-titleDark tracking-wide">
                                                    {interest.title}
                                                </h3>
                                                <p className="text-sm text-body dark:text-bodyDark mt-1 max-w-[480px] leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20 group-hover:mt-2">
                                                    {interest.description}
                                                </p>
                                            </div>
                                            <span className="text-sm text-neutral-400 dark:text-neutral-600 font-medium mt-1 flex-shrink-0">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                        </div>
                                    </motion.div>
                                );

                                return interest.link ? (
                                    <Link
                                        key={interest.title}
                                        href={interest.link}
                                        className="block"
                                    >
                                        {row}
                                    </Link>
                                ) : (
                                    <div key={interest.title}>{row}</div>
                                );
                            })}
                            <div className="border-t border-border dark:border-borderDark" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
