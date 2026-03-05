import { Metadata } from "next";
import ContentBlock from "@/components/ContentBlock";
import AboutMeSection from "@/components/AboutMeSection";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "About Matin Truong - Product Designer & Developer",
    description: "Learn about Matin Truong, a product designer and developer based in Toronto. I design, explore, and collaborate to create meaningful digital experiences.",
    alternates: {
        canonical: `${siteConfig.url}/about`,
    },
    openGraph: {
        title: "About Matin Truong - Product Designer & Developer",
        description: "Learn about Matin Truong, a product designer and developer based in Toronto.",
        url: `${siteConfig.url}/about`,
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* About Me Section — header + interests combined */}
            <AboutMeSection />

            {/* My Approach Section*/}

            {/* Community Section */}
            <ContentBlock
                title=""
                mainLabel="Design Unplugged & Boardgame"
                mainDescription="I founded Design Unplugged, a free Toronto meetup where designers and tech folks get together on sunny Sundays to connect, play, and build real relationships — no laptops required. "
                sections={[
                    {
                        label: "Next Event",
                        description: "Want to join? DM me to get the invite 🫶"
                    }
                ]}
                externalLink={{
                    text: "@matin_uxdesign",
                    url: "https://instagram.com/matin_uxdesign"
                }}
                image="/images/about/community-image.png"
                titlePosition="right"
            />

            {/* Beyond The Pixels Section */}
            <ContentBlock
                title=""
                mainLabel="Beyond The Pixels"
                mainDescription="I enjoy painting and drawing little things around me. It keeps me balanced and fuels my creativity."
                sections={[
                    {
                        label: "2026 goal",
                        description: "Drawing live portraits at social and tech events as an illustrator ✨"
                    }
                ]}
                externalLink={{
                    text: "@matillustrator",
                    url: "https://instagram.com/matillustrator"
                }}
                image="/images/about/illustration-image.png"
                titlePosition="left"
            />
        </main>
    );
}
