"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

interface NextProject {
    title: string;
    category: string;
    image: string;
    link: string;
    type: "Shipped" | "Concept" | "In Progress";
}

interface NextProjectCTAProps {
    nextProject: NextProject;
}

export default function NextProjectCTA({ nextProject }: NextProjectCTAProps) {
    return (
        <section className="border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col justify-center gap-1"
                    >
                        <SectionLabel label="Next Project" />
                        <p className="text-base text-body dark:text-bodyDark">Read more</p>
                    </motion.div>

                    {/* Right Column - Project Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <ProjectCard
                            title={nextProject.title}
                            category={nextProject.category}
                            image={nextProject.image}
                            link={nextProject.link}
                            type={nextProject.type}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
