"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import OptionalAddonsDropdown from "./OptionalAddonsDropdown";
import SectionLabel from "./SectionLabel";

interface OptionalService {
    id: string;
    name: string;
    description: string;
}

const coreServices = [
    "Research & planning",
    "UX/UI design",
    "1–3 pages included (*)",
    "Mini style guide provided",
    "Fully responsive layouts across devices",
    "Basic performance & SEO setup",
    "Launch support (first month)",
];

const optionalServices: OptionalService[] = [
    {
        id: "extra-page",
        name: "Extra page",
        description: "Additional pages such as blogs, landing pages, or campaigns",
    },
    {
        id: "cms-setup",
        name: "CMS setup",
        description: "Custom content models to manage updates yourself",
    },
    {
        id: "design-system",
        name: "Full design system",
        description: "Scalable UI system for teams, marketing, or growth",
    },
    {
        id: "branding",
        name: "Branding & logo design",
        description: "Visual identity aligned with your product and audience",
    },
    {
        id: "social-media",
        name: "Social media design & management",
        description: "Consistent visuals and content support for social channels",
    },
    {
        id: "ongoing-support",
        name: "Ongoing support & iteration",
        description: "Continuous improvements after launch",
    },
    {
        id: "customized",
        name: "Customized project",
        description: "Tailored scope for complex or unique requirements",
    },
];

const includedItems = [
    "Standard package is included by default",
    "CMS optional for self-managed content",
    "Typical turnaround: 2–3 weeks",
    "Fixed price — no surprises",
];

export default function ServiceSelector() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (serviceId: string) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId)
                ? prev.filter((id) => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const handleRequestQuote = () => {
        const selectedNames = optionalServices
            .filter((service) => selectedServices.includes(service.id))
            .map((service) => service.name);

        console.log("Selected Services:", {
            core: coreServices,
            optional: selectedNames,
        });
    };

    return (
        <section className="border-b border-border dark:border-borderDark">
            <div className="max-w-container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-24">
                    {/* Left Column - Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-1">
                            <SectionLabel label="Web design & development" />
                            <p className="text-base text-neutral-500 dark:text-neutral-300">
                                Optional add-ons available for more complex or scalable projects.
                            </p>
                        </div>

                        {/* Included by Default */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                                Notes
                            </h4>
                            <ul className="space-y-2">
                                {includedItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-base text-neutral-500 dark:text-neutral-300 flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>

                    {/* Right Column - Service Selection */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col gap-8 border border-border dark:border-borderDark rounded-2xl p-6 lg:p-8 dark:bg-neutral-850"
                    >
                        {/* Core Services */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                                    Standard package
                                </h3>
                            </div>
                            <ul className="space-y-1.5">
                                {coreServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="text-base text-neutral-500 dark:text-neutral-300 flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Optional Add-ons */}
                        <OptionalAddonsDropdown
                            services={optionalServices}
                            selectedServices={selectedServices}
                            onToggleService={toggleService}
                        />

                        {/* CTA Button */}
                        <div className="flex flex-col gap-2 pt-8">
                            <button
                                onClick={handleRequestQuote}
                                className="w-full px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-base font-semibold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
                            >
                                Request a free quote
                            </button>
                            <p className="text-sm text-center text-neutral-500 dark:text-neutral-400 pt-4">
                                No commitment. I'll review your selection and get back to you.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
