import { Metadata } from "next";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Linqy.ai Brand Identity Design Case Study | Matin Truong",
    description: "Complete brand identity system for a medical ai startup. See the logo design process, color palette development, and typography system for Linqy.ai.",
    keywords: ["brand identity design", "logo design", "branding case study", "startup branding", "AI healthcare branding"],
    alternates: {
        canonical: `${siteConfig.url}/case-study/linqy-logo`,
    },
    openGraph: {
        title: "Linqy.ai Brand Identity Design Case Study",
        description: "Complete brand identity system for a medical ai startup, including logo, color palette, and typography.",
        url: `${siteConfig.url}/case-study/linqy-logo`,
        images: [{ url: "/images/case-study/linqy-hero.png", width: 1200, height: 630 }],
    },
};

const linqyLogoCaseStudy = {
    hero: {
        title: "Building Trust Through Brand Identity in Medical Research AI",
        clientLabel: "Linqy.ai",
        clientDescription: "Miami FL",
        specs: [
            { label: "Role", value: "Brand & Web Designer", link: "" },
            { label: "Industry", value: "Healthcare AI / SaaS", link: "" },
            { label: "Deliverables", value: "Logo, Brand Guidelines, Visual System, Landing Page", link: "" },
            { label: "Website", value: "linqy.ai", link: "https://linqy.ai", isLink: true },
            { label: "Timeline", value: "6 weeks - Shipped", link: "" },
        ],
        heroImage: "/images/case-studies/linqylogo/linqy-logo-hero.svg",
    },
    overview: {
        label: "Overview",
        title: "Positioning a Medical AI Startup for Enterprise Trust",
        description:
            "As a new healthcare AI product, Linqy needed a brand identity that balanced innovation with trust to resonate with medical professionals and enterprise clients. I designed a cohesive brand system—including the logo, color palette, typography, and guidelines—to position Linqy as a credible, modern solution for clinical research teams.",
    },
    problem: {
        label: "Design Approach",
        title: "Setting the direction for a trustworthy yet innovative brand",
        image: "/images/case-studies/linqylogo/linqy-logo-moodboard.png",
    },
    research: {
        label: "Concept Rationale",
        title: "A Visual Foundation for Trust, Clarity, and Clinical Precision",
        description:
            "The logo blends geometric structure with organic flow inside a circular form, creating a clean and versatile mark. The “L” serves as a stable foundation, while the abstract bird represents clarity, guidance, and confidence in clinical decision-making.",
        image: "/images/case-studies/linqylogo/linqy-logo-process.png",
    },
    ideation: {
        label: "Final Logo",
        title: "A Balanced Mark for Connection and Clarity",
        description:
            "The final logo combines geometric structure and organic forms within a circular frame, creating a versatile, modern mark. The “L” represents Linqy’s reliable backbone, while the abstract bird conveys clarity, guidance, and trust. Its simplicity ensures it scales seamlessly across product interfaces, digital touchpoints, and print applications.",
        image: "/images/case-studies/linqylogo/linqy-logo-final.png",
    },
    reflection: {
        label: "Reflection",
        title: "Lessons in Healthcare Brand Strategy",
        description:
            "Through this project, I learned the importance of deeply understanding a healthcare startup’s vision and goals. I researched the clinical AI space and actively listened to the founders to capture what Linqy wanted to achieve. This guided every design decision, ensuring the brand identity communicates trust, precision, and clarity while resonating with both medical professionals and enterprise clients. The experience reinforced that effective branding in healthcare requires balancing innovation with reliability to build confidence among users.",
    },
    showcase: {
        title: "Complete Brand System",
        description: "From logomark to full brand guidelines, a comprehensive identity system that helped secure $4.2M in funding.",
        image: "/images/case-studies/linqylogo/linqy-logo-showcase.png",
    },
    nextProject: {
        title: "Digital Signage",
        category: "Product Design - Shipped",
        image: "/images/works/signage-product-image.png",
        link: "/case-study/digital-signage",
        type: "Shipped" as const,
    },
};

export default function LinqyLogoCaseStudy() {
    return <CaseStudyTemplate data={linqyLogoCaseStudy} />;
}
