"use client";

import { motion } from "framer-motion";
import OptionalAddonsDropdown from "./OptionalAddonsDropdown";

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

interface QuoteFormProps {
    formData: FormData;
    errors: FormErrors;
    selectedServices: string[];
    optionalServices: OptionalService[];
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onToggleService: (serviceId: string) => void;
    onSubmit: () => void;
}

export default function QuoteForm({
    formData,
    errors,
    selectedServices,
    optionalServices,
    onInputChange,
    onToggleService,
    onSubmit,
}: QuoteFormProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col gap-8 border border-border dark:border-borderDark rounded-2xl p-6 lg:p-8 dark:bg-neutral-850"
        >
            {/* Form Fields */}
            <div className="flex flex-col gap-4">
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-title dark:text-titleDark"
                    >
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Your name"
                        onChange={onInputChange}
                        className={`w-full px-4 py-2.5 border ${errors.name
                                ? "border-red-500"
                                : "border-border dark:border-borderDark"
                            } rounded-lg bg-white dark:bg-neutral-900 text-title dark:text-titleDark text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all`}
                    />
                    {errors.name && (
                        <span className="text-sm text-red-500">
                            {errors.name}
                        </span>
                    )}
                </div>

                {/* Contact Field */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="contact"
                        className="text-sm font-medium text-title dark:text-titleDark"
                    >
                        Contact <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={onInputChange}
                        placeholder="Email or Phone"
                        className={`w-full px-4 py-2.5 border ${errors.contact
                                ? "border-red-500"
                                : "border-border dark:border-borderDark"
                            } rounded-lg bg-white dark:bg-neutral-900 text-title dark:text-titleDark text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all`}
                    />
                    {errors.contact && (
                        <span className="text-sm text-red-500">
                            {errors.contact}
                        </span>
                    )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium text-title dark:text-titleDark"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={onInputChange}
                        placeholder="Anything else you'd like to share?"
                        rows={4}
                        className="w-full px-4 py-2.5 border border-border dark:border-borderDark rounded-lg bg-white dark:bg-neutral-900 text-title dark:text-titleDark text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                    />
                </div>
            </div>

            {/* Optional Add-ons */}
            <OptionalAddonsDropdown
                services={optionalServices}
                selectedServices={selectedServices}
                onToggleService={onToggleService}
            />

            {/* CTA Button */}
            <div className="flex flex-col gap-2 pt-8">
                <button
                    onClick={onSubmit}
                    className="w-full px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-base font-semibold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
                >
                    Request a free quote
                </button>
                <p className="text-sm text-center text-neutral-500 dark:text-neutral-400 pt-4">
                    No commitment. I'll review your selection and get back to you.
                </p>
            </div>
        </motion.div>
    );
}
