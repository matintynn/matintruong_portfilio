"use client";

import PageHeader from "@/components/PageHeader";
import ServiceSelector from "@/components/ServiceSelector";
import SectionLabel from "@/components/SectionLabel";
import SEOWhyChoose from "@/components/SEOWhyChoose";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Bringing ideas to life through UX, visual design, and branding."
                label="Web Design & Branding"
                description="Scroll down to explore the packages and services I offer."
                titlePosition="right"
            />

            {/* Services Selection & Quote */}
            <ServiceSelector />

            {/* Why Choose My Services Section - SEO Optimized */}
            <SEOWhyChoose />

            {/* Process Section */}
            <section className="border-b border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-24">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                            className="flex flex-col"
                        >
                            <SectionLabel label="Process" />
                            <p className="text-base text-body dark:text-bodyDark">
                                How I work
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-title dark:text-titleDark">
                                    01 Discover & align
                                </h3>
                                <p className="text-base text-body dark:text-bodyDark">
                                    Get to know your brand, target audience, and objectives, unraveling the insights that will shape our creative journey.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-title dark:text-titleDark">
                                    02 Design & iterate
                                </h3>
                                <p className="text-base text-body dark:text-bodyDark">
                                    Armed with insights, I bring concepts to life, seamlessly blending aesthetics and functionality for a visually stunning and user-centric experience.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-title dark:text-titleDark">
                                    03 Build & refine
                                </h3>
                                <p className="text-base text-body dark:text-bodyDark">
                                    After approved! I will build, get feedbacks and refine the project. Ensuring every pixel and interaction aligns perfectly with the design.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-title dark:text-titleDark">
                                    04 Launch & support
                                </h3>
                                <p className="text-base text-body dark:text-bodyDark">
                                    Assist you to launch the project and provide after support to make sure the project goes smooth and seamless.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
