import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Lab - Design Experiments & Creative Projects | Matin Truong",
    description: "Explore my design experiments, creative projects, and playground work. Small ideas turn into experiments — built to explore and learn.",
    alternates: {
        canonical: `${siteConfig.url}/lab`,
    },
    openGraph: {
        title: "Lab - Design Experiments & Creative Projects | Matin Truong",
        description: "Explore my design experiments, creative projects, and playground work.",
        url: `${siteConfig.url}/lab`,
    },
};

export default function LabPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Small ideas turn into experiments — built to explore and learn."
                label="Lab/Play"
                description="My playground"
                titlePosition="left"
            />

            <div className="py-16 border border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">
                    {/* Experiments Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard
                            title="Rescue the Xmas Star"
                            description="Sonunu is a small browser game built for sonicsvm.org through a Superteam bounty — an experiment in playful interaction and frontend game mechanics."
                            link="https://grinch-sonunu-defeated.vercel.app/"
                            linkText="Play Game"
                            image="/images/lab/game-image.png"
                        />

                        <ProjectCard
                            title="Free Restaurant Template"
                            description="A dark-mode restaurant website template designed in Figma and shared as a free resource for designers and developers."
                            link="https://www.figma.com/community/file/1564088209709693081/free-dark-mode-restaurant-landing-page-ui-kit"
                            linkText="Open in Figma"
                            image="/images/lab/freebie-image.png"
                        />

                        <ProjectCard
                            title="Young Viet Website"
                            description="Designed a community platform for young Vietnamese international students to connect, meet, and learn about life in Canada."
                            link="https://www.behance.net/gallery/234405741/Building-Community-Online-Young-Viet-Website-Design"
                            linkText="Read more"
                            image="/images/lab/youngviet-web-image.png"
                        />

                        <ProjectCard
                            title="Free Sitemap UI Kit"
                            description="A free sitemap kit designed to speed up your design process. Easy to use with pre-built component sets."
                            link="https://www.figma.com/community/file/1565454521456984753/simple-free-sitemap-ui-kit"
                            linkText="Open in Figma"
                            image="/images/lab/sitemap-image.png"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
