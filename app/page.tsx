import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import WhatICanDo from "@/components/WhatICanDo";
import ArchivesSection from "@/components/ArchivesSection";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Matin Truong - Product Designer & Developer | Portfolio",
    description: "Full-cycle design and build across product, web, and brand. View my case studies and branding projects. Focused on the details, from research to launch.",
    alternates: {
        canonical: siteConfig.url,
    },
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <WorksSection />
            <WhatICanDo />
            <ArchivesSection />
        </>
    );
}
