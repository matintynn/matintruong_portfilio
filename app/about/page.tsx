import PageHeader from "@/components/PageHeader";
import ContentBlock from "@/components/ContentBlock";
import SectionLabel from "@/components/SectionLabel";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="I design, I explore, I talk to everyone in the room—and love it."
                label="Hello! I'm Matin"
                description="Product Designer & Developer"
                titlePosition="right"
            />

            {/* Approach & Skills Section */}
            {/* <section className="border-b border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-24">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-1">
                                <SectionLabel label="Approach" />
                                <p className="text-base text-body dark:text-bodyDark pr-6">
                                    Impactful design comes from listening to users. I use research and feedback to guide every decision, and I carry what I learn from each project into the next. Understand users, explore ideas, design thoughtfully, test early, and refine continuously.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-base font-semibold text-title dark:text-titleDark">
                                    Skills & Tools
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "UX/UI Design", "Brand Identity", "Figma", "Canva", "HTML/CSS", "SASS", "JavaScript", "React", "Next.js", "Git/GitHub",
                                        "Framer", "Procreate",
                                        "Adobe XD", "Supabase",
                                        "Sanity", "Cursor"
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 border border-border dark:border-borderDark rounded-full text-sm font-medium text-title dark:text-titleDark hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-base font-semibold text-title dark:text-titleDark">
                                    Education & Certificates
                                </h3>
                                <ul className="space-y-1">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white"></div>
                                        <span className="text-base text-body dark:text-bodyDark">
                                            Google UX Design Professional Certificate
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white"></div>
                                        <span className="text-base text-body dark:text-bodyDark">
                                            FreeCodeCamp Front End Development
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white"></div>
                                        <span className="text-base text-body dark:text-bodyDark">
                                            Interactive Media Design - Seneca College Toronto, Canada
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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
