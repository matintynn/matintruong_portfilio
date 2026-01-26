"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import QuoteForm from "./QuoteForm";
import SuccessModal from "./SuccessModal";

interface OptionalService {
    id: string;
    name: string;
    description: string;
}

interface FormData {
    name: string;
    contact: string;
    message: string;
}

interface FormErrors {
    name?: string;
    contact?: string;
}

const coreServices = [
    "Design and development strategy",
    "1-5 pages (extra pages available as add-ons)",
    "Custom, responsive site",
    "Full branding suite & style guide",
    "Domain & Hosting setup",
    "Google Business setup/optimization",
    "SEO-optimized structure",
    "3rd party software integration",
    "Website training",
    "Launch support (first 2 months)",
];

const optionalServices: OptionalService[] = [
    {
        id: "extra-page",
        name: "Extra page",
        description: "Additional pages such as blogs, landing pages, or campaigns",
    },
    {
        id: "redesign",
        name: "Website Refresh",
        description: "Modernize an existing site with updated design and functionality",
    },
    {
        id: "shopify-setup",
        name: "Shopify setup",
        description: "Custom content models to manage updates yourself",
    },
    {
        id: "cms-setup",
        name: "CMS setup",
        description: "Custom content models to manage updates yourself",
    },
    {
        id: "logo-design",
        name: "Logo design",
        description: "Unique logo creation to establish brand identity",
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
    "Typical turnaround: 2–3 weeks",
    "Fixed price — no surprises",
    "Each project is different so I offer custom quotes for your unique goals",
];

export default function ServiceSelector() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        contact: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const toggleService = (serviceId: string) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId)
                ? prev.filter((id) => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.contact.trim()) {
            newErrors.contact = "Contact information is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRequestQuote = async () => {
        if (!validateForm()) {
            return;
        }

        const selectedNames = optionalServices
            .filter((service) => selectedServices.includes(service.id))
            .map((service) => service.name);

        // Prepare form data for Web3Forms
        const submissionData = new FormData();
        submissionData.append("access_key", "2dd10732-d3ad-4c30-afbc-c1c2ee6d1339");
        submissionData.append("subject", "New Quote Request for Web Design & Branding");
        submissionData.append("from_name", "Client Contact Form");
        submissionData.append("name", formData.name);
        submissionData.append("contact", formData.contact);
        submissionData.append("message", formData.message);
        submissionData.append("Service", "Standard Web Design & Branding Package");
        submissionData.append("Add-ons", selectedNames.length > 0 ? selectedNames.join(", ") : "None");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submissionData
            });

            const data = await response.json();

            if (data.success) {
                console.log("Quote Request Data:", {
                    name: formData.name,
                    contact: formData.contact,
                    message: formData.message,
                    coreServices: coreServices,
                    optionalServices: selectedNames,
                });

                // Show success modal
                setShowSuccessModal(true);

                // Reset form after submission
                setTimeout(() => {
                    setFormData({ name: "", contact: "", message: "" });
                    setSelectedServices([]);
                }, 2000);
            } else {
                console.error("Form submission failed:", data);
                alert("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
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
                            <SectionLabel label="Web Design & Branding" />
                            <p className="text-base text-body dark:text-bodyDark md:w-[450px]">
                                Your work delivers real value — your website and brand just aren't showing it yet. If things feel misaligned or outdated, you're not alone. A cohesive brand and well-designed website might be exactly what you need to grow with confidence.
                            </p>
                        </div>

                        {/* Core Services */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold text-title dark:text-titleDark">
                                    Whats included in the standard package?
                                </h3>
                            </div>
                            <ul className="space-y-1.5">
                                {coreServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="text-base text-body dark:text-bodyDark flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Notes*/}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-base font-semibold text-title dark:text-titleDark">
                                Notes
                            </h4>
                            <ul className="space-y-2">
                                {includedItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-base text-body dark:text-bodyDark flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>

                    {/* Right Column - quote form */}
                    <QuoteForm
                        formData={formData}
                        errors={errors}
                        selectedServices={selectedServices}
                        optionalServices={optionalServices}
                        onInputChange={handleInputChange}
                        onToggleService={toggleService}
                        onSubmit={handleRequestQuote}
                    />
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />
        </section>
    );
}