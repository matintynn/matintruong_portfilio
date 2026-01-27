"use client";

import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const interests = [
    {
        icon: "ri-palette-line",
        title: "Design & Build",
        description: "I love crafting digital products from concept to code, blending UX/UI design with development.",
    },
    {
        icon: "ri-flight-takeoff-line",
        title: "Travel Enthusiast",
        description: "30+ countries explored and counting! Tell me about your favorite travel destination.",
    },
    {
        icon: "ri-coin-line",
        title: "Crypto & Solana",
        description: "Deep into the crypto space, especially the Solana community. Let's talk Web3!",
    },
    {
        icon: "ri-cup-line",
        title: "Food & Culture",
        description: "From street food to fine dining, I'm always hunting for the next great meal.",
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
                        className="lg:sticky lg:top-24 h-fit"
                    >
                        <SectionLabel label="About Me" />
                        <h2 className="text-2xl lg:text-3xl font-semibold text-title dark:text-titleDark mt-6 mb-4">
                            A Toronto-based designer who loves to build, explore, and connect
                        </h2>
                        <p className="text-base text-body dark:text-bodyDark mb-6">
                            Whether it's design, travel, food, or crypto — I'm always up for a good conversation. Hit me up! 🤙
                        </p>
                        <a
                            href="mailto:matintyson.design@gmail.com"
                            className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-title dark:text-titleDark hover:gap-3 transition-all"
                        >
                            Let's Chat
                            <i className="ri-arrow-right-up-line text-lg"></i>
                        </a>
                    </motion.div>

                    {/* Right Column - Interests Grid */}
                    <div className="grid grid-cols-1 gap-8">
                        {interests.map((interest, index) => (
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
                                        <i className={`${interest.icon} text-xl text-title dark:text-titleDark`}></i>
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
