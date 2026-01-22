import PageHeader from "@/components/PageHeader";
import WorksSection from "@/components/WorksSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="End-to-end design and build for product, web, and brand, crafted with thought."
                label="Designer & Developer"
                description="Scroll down to see projects"
                titlePosition="left"
            />

            <WorksSection />
        </main>
    );
}
