/**
 * Why Choose My Services Section
 * SEO-optimized content section highlighting service benefits
 */

"use client";

import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: "ri-palette-line",
        title: "Tailored Design Solutions",
        description: "Every project is custom-built to reflect your unique brand identity and business goals. No templates, no cookie-cutter approaches.",
    },
    {
        icon: "ri-smartphone-line",
        title: "Mobile-First Responsive Design",
        description: "Your website will look stunning and function flawlessly on all devices, from smartphones to desktop computers.",
    },
    {
        icon: "ri-search-line",
        title: "SEO-Optimized Development",
        description: "Built with search engine optimization in mind from day one, ensuring your site ranks well and reaches your target audience.",
    },
    {
        icon: "ri-flashlight-line",
        title: "Lightning-Fast Performance",
        description: "Optimized code and modern technologies ensure your website loads quickly, keeping visitors engaged and improving conversion rates.",
    },
    {
        icon: "ri-calendar-check-line",
        title: "Fixed Pricing & Quick Turnaround",
        description: "Transparent pricing with no hidden costs. Most projects completed within 2-3 weeks, so you can launch faster.",
    },
    {
        icon: "ri-customer-service-2-line",
        title: "Ongoing Support & Maintenance",
        description: "Post-launch support to ensure your website continues to perform optimally. I'm here to help you succeed long-term.",
    },
];

export default function SEOWhyChoose() {
    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Section Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="lg:sticky lg:top-24 h-fit"
                    >
                        <SectionLabel label="Why Choose My Services?" />
                        <h2 className="text-2xl lg:text-3xl font-semibold text-title dark:text-titleDark mt-6 mb-4">
                            Transform Your Online Presence
                        </h2>
                        <p className="text-base text-body dark:text-bodyDark">
                            With over years of experience in web design and branding, I deliver results that elevate your business and connect with your audience.
                        </p>
                    </motion.div>

                    {/* Right Column - Benefits Grid */}
                    <div className="grid grid-cols-1 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
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
                                        <i className={`${benefit.icon} text-xl text-title dark:text-titleDark`}></i>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-title dark:text-titleDark">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base text-body dark:text-bodyDark">
                                        {benefit.description}
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
