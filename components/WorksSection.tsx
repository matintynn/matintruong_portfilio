"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";
import LottiePlayer from "./LottiePlayer";

interface FeaturedProject {
    id: string;
    title: string;
    location: string;
    type: string;
    link: string;
    image?: string;
    lottie?: string;
}

const featuredProjects: FeaturedProject[] = [
    {
        id: "signage-product",
        title: "Digital Signage",
        location: "Product Design",
        type: "Shipped",
        link: "/case-study/digital-signage",
        lottie: "/lottie/works/signage-product-lottie.json",
    },
    {
        id: "lunaspa",
        title: "Luna Essence Spa",
        location: "Web Design & Branding",
        type: "Shipped",
        link: "/case-study/luna-spa",
        image: "/images/works/lunaspa-web-image.png",
    },
    {
        id: "nomad-app",
        title: "Nomad Banking App",
        location: "Mobile App Design",
        type: "Concept",
        link: "/case-study/nomad-app",
        image: "/images/works/nomad-app-image.png",
    },
    {
        id: "linqy-logo",
        title: "Linqy.ai",
        location: "Brand Identity",
        type: "Shipped",
        link: "/case-study/linqy-logo",
        image: "/images/works/linqy-logo-image.png",
    },
    {
        id: "dylan-web",
        title: "Film Editor Portfolio",
        location: "Website Design",
        type: "Shipped",
        link: "/case-study/dylan-website",
        image: "/images/works/dylan-web-image.png",
    },
    {
        id: "dylan-logo",
        title: "DR Creative Studio",
        location: "Logo Design",
        type: "Shipped",
        link: "https://www.behance.net/gallery/234078017/Creating-Personal-Brand-for-Professional-Film-Editor",
        image: "/images/works/dylan-logo-image.png",
    },
];

export default function WorksSection() {
    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <h2 className="text-[40px] font-bold tracking-tight text-title dark:text-titleDark leading-[1.05]">
                        Selected Works
                    </h2>
                    <p className="text-sm text-body dark:text-bodyDark max-w-[600px] mx-auto mt-4 leading-relaxed">
                        A selection of projects where I worked across the full process — from understanding the problem to designing and building the final product.
                    </p>
                </motion.div>

                {/* 2-Column Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index % 2 === 0 ? 0 : 0.1 }}
                            className="group flex flex-col transition-colors duration-300"
                        >
                            {/* Image / Lottie */}
                            <div className="aspect-[4/3] overflow-hidden border border-neutral-200 dark:border-neutral-800">
                                {project.lottie ? (
                                    <LottiePlayer
                                        src={project.lottie}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : project.image ? (
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                ) : null}
                            </div>

                            {/* Content — name | type on left, view work on right */}
                            <div className="flex items-center justify-between gap-4 pt-4">
                                <div className="flex items-center gap-2 text-base min-w-0">
                                    <h3 className="font-semibold text-title dark:text-titleDark truncate">
                                        {project.title}
                                    </h3>
                                    <span className="text-neutral-300 dark:text-neutral-600 flex-shrink-0">|</span>
                                    <span className="text-neutral-500 dark:text-neutral-400 truncate">
                                        {project.location}
                                    </span>
                                </div>

                                <a
                                    href={project.link}
                                    target={project.link.startsWith("http") ? "_blank" : undefined}
                                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex-shrink-0 text-sm font-medium text-title dark:text-titleDark transition-all duration-300 flex items-center gap-1.5 lg:opacity-0 lg:translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0"
                                >
                                    View work
                                    <RiArrowRightUpLine size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
