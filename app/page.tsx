import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorksSection from "@/components/WorksSection";
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
            <PageHeader
                title="Design and ship products, websites, and systems thoughtfully"
                label="Designer & Developer"
                description="Scroll down to see projects"
                titlePosition="left"
            />

            <WorksSection />
        </>
    );
}
