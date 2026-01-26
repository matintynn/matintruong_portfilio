"use client";

import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

interface Project {
    id: string;
    category: "Case Studies" | "Branding & Logo";
    title: string;
    type: string;
    description: string;
    link: string;
    linkText: string;
    image?: string;
    lottie?: string;
}

const projects: Project[] = [
    {
        id: "signage-product",
        category: "Case Studies",
        title: "Digital Signage",
        type: "Product Design - Shipped",
        description: "End-to-end product design for a digital signage management platform, focusing on intuitive content scheduling and real-time monitoring.",
        link: "/case-study/digital-signage",
        linkText: "View work",
        lottie: "/lottie/works/signage-product-lottie.json",
    },
    {
        id: "nomad-app",
        category: "Case Studies",
        title: "Nomad Banking App",
        type: "Mobile App Design - Concept",
        description: "A mobile-first travel companion app designed to help remote workers discover and book workspaces worldwide.",
        link: "https://www.behance.net/gallery/233996507/Safe-Banking-App-Abroad-A-UX-Case-Study",
        linkText: "View work",
        image: "/images/works/nomad-app-image.png",
    },
    {
        id: "lunaspa",
        category: "Case Studies",
        title: "Luna Essence Spa",
        type: "Website Design - Shipped",
        description: "Calm, elegant website redesign for a luxury spa brand, emphasizing serenity and premium service offerings.",
        link: "/case-study/luna-spa",
        linkText: "View work",
        image: "/images/works/lunaspa-web-image.png",
    },
    {
        id: "dylan-web",
        category: "Case Studies",
        title: "Film Editor Portfolio",
        type: "Website - Shipped",
        description: "Personal portfolio website for a creative director, showcasing work through a clean, editorial layout.",
        link: "https://www.behance.net/gallery/239582733/Professional-Film-Editor-Portfolio-Design-Development",
        linkText: "View work",
        image: "/images/works/dylan-web-image.png",
    },
    {
        id: "linqy-logo",
        category: "Branding & Logo",
        title: "Linqy.ai",
        type: "Brand Identity - Shipped",
        description: "Complete brand identity system for a networking startup, including logo, color palette, and typography.",
        link: "/case-study/linqy-logo",
        linkText: "View work",
        image: "/images/works/linqy-logo-image.png",
    },
    {
        id: "dylan-logo",
        category: "Branding & Logo",
        title: "DR Creative Studio",
        type: "Logo Design - Shipped",
        description: "Minimalist logo design for a creative studio, balancing modern aesthetics with timeless appeal.",
        link: "https://www.behance.net/gallery/234078017/Creating-Personal-Brand-for-Professional-Film-Editor",
        linkText: "View work",
        image: "/images/works/dylan-logo-image.png",
    },
];

const categories = ["Case Studies", "Branding & Logo"] as const;

export default function WorksSection() {
    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="flex flex-col gap-24">
                    {categories.map((category) => {
                        const categoryProjects = projects.filter((p) => p.category === category);

                        return (
                            <div key={category} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                                {/* Left Column - Sticky Category Header */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        className="lg:sticky lg:top-24"
                                    >
                                        <SectionLabel label={category} />
                                    </motion.div>
                                </div>

                                {/* Right Column - Projects List */}
                                <div className="flex flex-col gap-24">
                                    {categoryProjects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            category={project.type}
                                            title={project.title}
                                            description={project.description}
                                            link={project.link}
                                            linkText={project.linkText}
                                            image={project.image}
                                            lottie={project.lottie}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
