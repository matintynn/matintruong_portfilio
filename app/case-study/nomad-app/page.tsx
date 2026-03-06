"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NextProjectCTA from "@/components/NextProjectCTA";
import GoBackButton from "@/components/GoBackButton";

const images = [
    "/images/case-studies/nomadapp/img1.png",
    "/images/case-studies/nomadapp/img2.png",
    "/images/case-studies/nomadapp/img3.png",
    "/images/case-studies/nomadapp/img4.png",
    "/images/case-studies/nomadapp/img5.png",
    "/images/case-studies/nomadapp/img6.png",
    "/images/case-studies/nomadapp/img7.png",
    "/images/case-studies/nomadapp/img8.png",
    "/images/case-studies/nomadapp/img9.png",
    "/images/case-studies/nomadapp/img10.png",
    "/images/case-studies/nomadapp/img11.png",
    "/images/case-studies/nomadapp/img12.png",
    "/images/case-studies/nomadapp/img13.png",
    "/images/case-studies/nomadapp/img14.png",
    "/images/case-studies/nomadapp/img15.png",
    "/images/case-studies/nomadapp/img16.png",
    "/images/case-studies/nomadapp/img17.png",
    "/images/case-studies/nomadapp/img18.png",
    "/images/case-studies/nomadapp/img19.png",
];

const specs = [
    { label: "Role", value: "UX / Product Designer" },
    { label: "Services", value: "Mobile App Design" },
    { label: "Timeline", value: "12 weeks — 2025" },
    { label: "Status", value: "Concept" },
];

export default function NomadAppCaseStudy() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="border-b border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 h-[calc(100vh-4rem)]">
                        {/* Left — Title */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[1] tracking-tight text-title dark:text-titleDark">
                                Designing Safe, Stress-Free Banking for Travelers Abroad.
                            </h1>
                        </motion.div>

                        {/* Right — Specs */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                            className="flex flex-col justify-between h-full"
                        >
                            <div className="flex flex-col gap-6 h-full justify-between items-end">
                                <div className="w-[240px] flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-neutral-900 dark:bg-white" />
                                        <span className="text-xs font-semibold uppercase tracking-wider text-title dark:text-titleDark">
                                            Nomad Banking App
                                        </span>
                                    </div>
                                    <p className="text-base text-body dark:text-bodyDark">
                                        Personal Concept Project
                                    </p>
                                </div>

                                <div className="w-[240px] flex flex-col gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <span className="text-sm font-semibold text-title dark:text-titleDark">
                                                {spec.label}
                                            </span>
                                            <p className="text-base text-body dark:text-bodyDark">
                                                {spec.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="w-[240px] text-base text-body dark:text-bodyDark">
                                    Scroll to explore
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={images[0]}
                        alt="Nomad Banking App Case Study"
                        width={1440}
                        height={810}
                        className="w-full h-auto block"
                        priority
                    />
                </motion.div>
            </section>

            {/* Image Gallery */}
            <section>
                {images.slice(1).map((src, i) => (
                    <div className="bg-neutral-950">
                        <Image
                            src={src}
                            alt={`Nomad Banking App case study — screen ${i + 2}`}
                            width={1440}
                            height={900}
                            className="w-full h-auto block"
                        />
                    </div>
                ))}
            </section>

            {/* Next Project */}
            <NextProjectCTA
                nextProject={{
                    title: "Film Editor Portfolio",
                    category: "Web Design & Development",
                    image: "/images/works/dylan-web-image.png",
                    link: "/case-study/dylan-website",
                    type: "Shipped",
                }}
            />

            <GoBackButton />
        </main>
    );
}
