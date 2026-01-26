"use client";

import { useState } from "react";

interface OptionalService {
    id: string;
    name: string;
    description: string;
}

interface OptionalAddonsDropdownProps {
    services: OptionalService[];
    selectedServices: string[];
    onToggleService: (serviceId: string) => void;
}

export default function OptionalAddonsDropdown({
    services,
    selectedServices,
    onToggleService,
}: OptionalAddonsDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            {/* Dropdown Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left group"
            >
                <h3 className="text-base font-semibold text-title dark:text-titleDark">
                    Optional add-ons (*)
                </h3>
                <svg
                    className={`w-5 h-5 text-title dark:text-titleDark transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Dropdown Content */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-2 pb-2">
                        {services.map((service) => {
                            const isSelected = selectedServices.includes(service.id);
                            return (
                                <label
                                    key={service.id}
                                    className={`group flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${isSelected
                                        ? "bg-neutral-100 dark:bg-neutral-800"
                                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                                        }`}
                                    onClick={() => onToggleService(service.id)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => { }}
                                        className="mt-0.5 w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-title dark:text-titleDark cursor-pointer transition-all duration-150"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-medium text-title dark:text-titleDark">
                                            {service.name}
                                        </span>
                                        <span className="text-sm text-neutral-500 dark:text-neutral-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 group-focus-within:max-h-20 overflow-hidden">
                                            {service.description}
                                        </span>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
