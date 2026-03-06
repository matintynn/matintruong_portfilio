"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import NextProjectCTA from "@/components/NextProjectCTA";
import GoBackButton from "@/components/GoBackButton";

const specs = [
    { label: "Role", value: "Web Designer & Developer" },
    { label: "Services", value: "Website Design & Brand Identity" },
    { label: "Timeline", value: "3 weeks - 2025" },
    { label: "Status", value: "Shipped" },
];

const deliverables = [
    "Brand Identity System (colors, typography, spacing, components)",
    "Light & Dark Website Design - responsive",
    "Fully functional website to showcase video work",
    "Admin dashboard for project management",
];

const brandIdentityPoints = [
    "Typography: clean, modern typefaces for strong readability",
    "Color Palette: minimal, monochromatic tones to keep the focus on the work",
    "Composition: grid-based layouts, strong hierarchy, cinematic white space",
    "Logo: a refined personal mark that is versatile across digital and print",
];

const learnings = [
    "I learned how to balance a clean visual identity with a scalable technical foundation.",
    "Building the NextJS + Supabase CMS improved my understanding of integrating dynamic data, client-friendly content management, and long-term scalability.",
    "Next steps include adding analytics, faster media uploads, and smoother project templates to make Dylan's portfolio even easier to manage as his work expands.",
];

// Reusable animated section wrapper
function AnimatedSection({
    children,
    className = "",
    border = false,
    dark = false,
}: {
    children: React.ReactNode;
    className?: string;
    border?: boolean;
    dark?: boolean;
}) {
    return (
        <section
            className={[
                border ? "border-b border-neutral-200 dark:border-neutral-800" : "",
                dark ? "bg-neutral-950" : "",
            ].join(" ")}
        >
            <div className={`max-w-container mx-auto px-5 py-16 lg:py-24 ${className}`}>
                {children}
            </div>
        </section>
    );
}

// Reusable two-column layout (label left, content right)
function TwoColSection({
    label,
    children,
    border = true,
}: {
    label: string;
    children: React.ReactNode;
    border?: boolean;
}) {
    return (
        <section className={border ? "border-b border-neutral-200 dark:border-neutral-800" : ""}>
            <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <SectionLabel label={label} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function DylanWebsiteCaseStudy() {
    return (
        <main className="min-h-screen">
            {/* ── Hero Section ── */}
            <section className="border-b border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 h-[calc(100vh-4rem)]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[1] tracking-tight text-title dark:text-titleDark">
                                Building a Portfolio That Sells a Film Editor&apos;s Vision.
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                            className="flex flex-col justify-between h-full"
                        >
                            <div className="flex flex-col gap-6 h-full justify-between items-end">
                                <div className="w-[240px] flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-neutral-900 dark:bg-white" />
                                        <span className="text-xs font-semibold uppercase tracking-wider text-title dark:text-titleDark">
                                            DR Creative Studio
                                        </span>
                                    </div>
                                    <p className="text-base text-body dark:text-bodyDark">
                                        Dylan Reymer - Film Editor
                                    </p>
                                    <p className="text-base text-body dark:text-bodyDark">
                                        Toronto, ON
                                    </p>
                                </div>

                                <div className="w-[240px] flex flex-col gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <span className="text-sm font-semibold text-title dark:text-titleDark">
                                                {spec.label}
                                            </span>
                                            <p className="text-base text-body dark:text-bodyDark">
                                                {spec.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="w-[240px] text-base text-body dark:text-bodyDark">
                                    Scroll to explore
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Overview Image ── */}
            <AnimatedSection>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/images/case-studies/dylan-website/overview-image.png"
                        alt="Dylan Reymer Film Editor Portfolio Overview"
                        width={1440}
                        height={810}
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>
            </AnimatedSection>

            {/* ── About the Client ── */}
            <TwoColSection label="About the Client">
                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                    A Film Editor with Real Work, But No Platform to Show It
                </h2>
                <p className="text-base text-body dark:text-bodyDark">
                    Dylan Reymer is a professional film editor working at one of Canada&apos;s top award-winning post-production agencies. He has collaborated on commercial projects for major brands including McDonald&apos;s, KDM, Museum Toronto, BBC, and more. Despite his strong industry experience, he didn&apos;t have a cohesive brand identity or a proper portfolio to represent his work within the creative community.
                </p>
            </TwoColSection>

            {/* ── Challenge ── */}
            <TwoColSection label="Challenge">
                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                    From Invisible to Undeniable
                </h2>
                <p className="text-base text-body dark:text-bodyDark">
                    Dylan needed a more compelling way to present his editing craft. He approached me to help him build a personal brand and create a modern portfolio system he could easily share with clients, agencies, and collaborators.
                </p>
            </TwoColSection>

            {/* ── Deliverables ── */}
            <TwoColSection label="Deliverables">
                <ul className="space-y-3">
                    {deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0" />
                            <p className="text-base text-body dark:text-bodyDark">{item}</p>
                        </li>
                    ))}
                </ul>
            </TwoColSection>

            {/* ── Moodboard Image ── */}
            <AnimatedSection dark>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Image
                        src="/images/case-studies/dylan-website/Moodboard.png"
                        alt="Dylan Reymer brand moodboard and research"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                    />
                </motion.div>
            </AnimatedSection>

            {/* ── Logo & Business Card ── */}
            <AnimatedSection>
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        <h3 className="text-2xl lg:text-3xl font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark mb-3">
                            Logo &amp; Business Card
                        </h3>
                        <p className="text-base text-body dark:text-bodyDark">
                            A sharp, minimal mark built for versatility. The logomark works across dark and light backgrounds, digital headers, and printed collateral — giving Dylan a consistent visual anchor that feels editorial and professional.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src="/images/case-studies/dylan-website/logo-business-card.png"
                            alt="Dylan Reymer logo and business card design"
                            width={1440}
                            height={900}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* ── Final Brand Identity ── */}
            <TwoColSection label="Final Brand Identity">
                <ul className="space-y-3">
                    {brandIdentityPoints.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0" />
                            <p className="text-base text-body dark:text-bodyDark">{item}</p>
                        </li>
                    ))}
                </ul>
            </TwoColSection>

            {/* ── Homepage / Desktop Screenshot ── */}
            <AnimatedSection>
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        <h3 className="text-2xl lg:text-3xl font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark mb-3">
                            Desktop Experience
                        </h3>
                        <p className="text-base text-body dark:text-bodyDark">
                            The homepage leads with Dylan&apos;s reel front and center — no distractions. A dark, cinematic layout lets the work speak first, with clear navigation into projects, about, and contact. Every section is designed to load fast and look sharp on large screens.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src="/images/case-studies/dylan-website/homepage.png"
                            alt="Dylan Reymer portfolio website - desktop view"
                            width={1440}
                            height={900}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* ── Mobile View ── */}
            <AnimatedSection>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex-1 max-w-md"
                    >
                        <h3 className="text-2xl lg:text-3xl font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark mb-3">
                            Mobile Responsive
                        </h3>
                        <p className="text-base text-body dark:text-bodyDark">
                            Every page adapts seamlessly to smaller screens. The mobile layout preserves the cinematic feel while prioritizing thumb-friendly navigation, fast video loading, and readable typography — so clients browsing on their phone get the same premium experience.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 flex justify-center"
                    >
                        <Image
                            src="/images/case-studies/dylan-website/mobile-view.png"
                            alt="Dylan Reymer portfolio website - mobile responsive view"
                            width={480}
                            height={860}
                            className="w-full max-w-[320px] lg:max-w-[380px] h-auto"
                        />
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* ── Admin Dashboard ── */}
            <AnimatedSection>
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        <h3 className="text-2xl lg:text-3xl font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark mb-3">
                            Admin Dashboard
                        </h3>
                        <p className="text-base text-body dark:text-bodyDark">
                            A custom-built CMS dashboard powered by Supabase gives Dylan full control over his content. He can add new projects, reorder his reel, update descriptions, and manage media — all without touching code. Designed for simplicity so he can focus on editing, not website maintenance.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src="/images/case-studies/dylan-website/admin-dashboard.png"
                            alt="Dylan Reymer portfolio - admin dashboard for content management"
                            width={1440}
                            height={900}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* ── Outcome ── */}
            <TwoColSection label="Outcome">
                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                    A Complete Creative System, Built to Grow
                </h2>
                <p className="text-base text-body dark:text-bodyDark">
                    I delivered a complete end-to-end system that combined a strong visual identity with a scalable, easy-to-manage website. The site was developed using NextJS for a reliable backend and Supabase as source, a flexible database solution - plus built a custom CMS dashboard allowing Dylan to update, edit, and organize his projects independently - optimized for mobile and designed for a smooth user experience.
                </p>
                <p className="text-base text-body dark:text-bodyDark">
                    This structure gives him full control over his portfolio and ensures the platform can grow as his body of work expands. The result is a professional, future-proof digital presence that reflects the quality of his craft and supports long-term scalability.
                </p>
            </TwoColSection>

            {/* ── Learned & What's Next ── */}
            <TwoColSection label="Reflections" border={false}>
                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                    Learned &amp; What&apos;s Next
                </h2>
                <ul className="space-y-3">
                    {learnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0" />
                            <p className="text-base text-body dark:text-bodyDark">{item}</p>
                        </li>
                    ))}
                </ul>
            </TwoColSection>

            {/* ── Next Project ── */}
            <NextProjectCTA
                nextProject={{
                    title: "Linqy.ai",
                    category: "Brand Identity",
                    image: "/images/works/linqy-logo-image.png",
                    link: "/case-study/linqy-logo",
                    type: "Shipped",
                }}
            />

            <GoBackButton />
        </main>
    );
}
