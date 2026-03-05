"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

const craftImages = [
    "/images/craft/post-1.png",
    "/images/craft/post-2.png",
    "/images/craft/post-3.png",
    "/images/craft/post-4.png",
    "/images/craft/post-5.png",
    "/images/craft/post-6.png",
];

export default function ArchivesSection() {
    // Duplicate images for seamless loop
    const images = [...craftImages, ...craftImages];

    return (
        <section className="border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="max-w-container mx-auto px-5 pt-16 lg:pt-24 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <SectionLabel label="Crafts" />
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
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px] overflow-hidden border border-neutral-200 dark:border-neutral-800"
                        >
                            <Image
                                src={src}
                                alt={`Craft work ${(i % craftImages.length) + 1}`}
                                width={420}
                                height={420}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
