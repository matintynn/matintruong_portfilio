"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

const craftItems: { src: string; type: "image" | "video" }[] = [
    { src: "/images/craft/post-1.png", type: "image" },
    { src: "/video/integrate-apps.mp4", type: "video" },
    { src: "/images/craft/post-5.png", type: "image" },
    { src: "/images/craft/post-2.png", type: "image" },
    { src: "/images/craft/post-4.png", type: "image" },
    { src: "/images/craft/post-6.png", type: "image" },
];

export default function ArchivesSection() {
    // Duplicate items for seamless loop
    const items = [...craftItems, ...craftItems];

    return (
        <section className="border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="max-w-container mx-auto px-5 pt-16 lg:pt-24 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <SectionLabel label="Archives" />
                </motion.div>
            </div>

            {/* Marquee */}
            <div className="relative pb-16 lg:pb-24">
                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px] overflow-hidden border border-neutral-200 dark:border-neutral-800"
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={`Craft work ${(i % craftItems.length) + 1}`}
                                    width={420}
                                    height={420}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
