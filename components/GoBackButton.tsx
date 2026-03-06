"use client";

import { RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="fixed top-8 left-6 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-900 dark:border-white rounded-full text-base font-medium text-title dark:text-titleDark hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all duration-300 flex items-center gap-2 z-40"
        >
            <RiArrowLeftLine size={16} />
            Go Back
        </button>
    );
}
