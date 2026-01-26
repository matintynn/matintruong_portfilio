interface SectionLabelProps {
    label: string;
    className?: string;
    isActive?: boolean;
}

export default function SectionLabel({ label, className = "", isActive = true }: SectionLabelProps) {
    return (
        <div className={`flex items-center gap-2 w-fit ${className}`}>
            <div className={`w-2 h-2 ${isActive ? "bg-neutral-900 dark:bg-white" : "bg-neutral-700 dark:bg-neutral-700"}`}></div>
            <span className={`text-base font-semibold uppercase ${isActive ? "text-title dark:text-titleDark" : "text-neutral-700 dark:text-neutral-700"}`}>
                {label}
            </span>
        </div>
    );
}
