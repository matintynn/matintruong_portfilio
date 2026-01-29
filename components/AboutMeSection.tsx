"use client";

import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";
import Link from "next/link";
import { Palette, PlaneTakeoff, Coins, UtensilsCrossed, Briefcase, ArrowUpRight } from "lucide-react";

const interests = [
    {
        icon: Palette,
        title: "Current Role",
        description: "Product Designer at Linqy.ai, designing intuitive user experiences for MedTech products that support patient screening.",
    },
    {
        icon: PlaneTakeoff,
        title: "Travel Enthusiast",
        description: "Three solo trips across continents taught me how much I love culture, food, and meeting new people. Always up for swapping travel stories (and food tips) hehe.",
    },
    {
        icon: Coins,
        title: "Crypto & Solana",
        description: "Superteam Canada introduced me to Solana — fast tech, but even better, an amazing community of builders. I’m exploring, learning, and always excited to connect ;)",
    },
    {
        icon: Briefcase,
        title: "My side hustle",
        description: "I help local businesses with quick, focused design support. Learn more →",
        link: "/services",
    },
];

export default function AboutMeSection() {
    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - About Me Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="lg:sticky lg:top-24 h-fit max-w-xl"
                    >
                        <SectionLabel label="About Me" />
                        <h2 className="text-2xl lg:text-3xl font-semibold text-title dark:text-titleDark mt-6 mb-4">
                            A Toronto-based designer who loves to build, explore, and connect
                        </h2>
                        <p className="text-base text-body dark:text-bodyDark mb-4">
                            I thrive in collaborative teams where design, product, and engineering build together. Always happy to chat about design, travel, food, or emerging tech. Hit me up! 🤙
                        </p>
                        <a
                            href="mailto:matintyson.design@gmail.com"
                            className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-title dark:text-titleDark hover:gap-3 transition-all"
                        >
                            Let's Chat
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </motion.div>

                    {/* Right Column - Interests Grid */}
                    <div className="grid grid-cols-1 gap-8">
                        {interests.map((interest, index) => {
                            const Icon = interest.icon;
                            const content = (
                                <motion.div
                                    key={interest.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: index * 0.1,
                                    }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full border border-border dark:border-borderDark flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-title dark:text-titleDark" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold text-title dark:text-titleDark">
                                            {interest.title}
                                        </h3>
                                        <p className="text-base text-body dark:text-bodyDark">
                                            {interest.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );

                            return interest.link ? (
                                <Link key={interest.title} href={interest.link} className="hover:opacity-80 transition-opacity">
                                    {content}
                                </Link>
                            ) : (
                                content
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
