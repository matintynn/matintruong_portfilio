import CaseStudyTemplate from "@/components/CaseStudyTemplate";

const lunaSpaCaseStudy = {
    hero: {
        title: "Aligning a Premium Service with Its Digital Presence.",
        clientLabel: "Luna Essence Beauty",
        clientLocation: "Houston, TX",
        specs: [
            { label: "Role", value: "Lead Designer, Developer", link: "" },
            { label: "Website", link: "https://lunaessencebeauty.com", value: "lunaessencebeauty.com", isLink: true },
            { label: "Services", value: "Web Design & Branding", link: "" },
            { label: "Timeline", value: "4 weeks — Nov 2025", link: "" },
        ],
        heroImage: "/images/case-studies/lunaspa/luna-hero.png",
    },
    overview: {
        label: "Overview",
        title: "When Med Spa Invests in Their Digital Presence",
        description:
            "Luna Essence Beauty Spa is a local beauty spa offering facial and wellness treatments. While the physical spa experience was calm, professional, and premium, its digital presence did not reflect the same quality or clarity.",
        note: "The goal of this project:",
        noteDetail: "To redesign the website as a business system, not just a visual refresh — helping customers discover the spa, understand services, trust the brand, and book with confidence.",
    },
    problem: {
        label: "Problem",
        title: "A Disconnect Between Brand Promise and Digital Reality",
        notes: [
            {
                note: "Business Challenges:",
                noteDetail: [
                    "The spa relied heavily on social media and word of mouth.",
                    "The website did not clearly communicate services, pricing, or value.",
                    "Online bookings were inconsistent and required extra effort from staff."
                ],
                description: "These caused missed bookings and friction between online discovery and in-store experience.",
            },
            {
                note: "User needs",
                description: "From a customer’s perspective, key questions were not clearly answered:",
                noteDetail: [
                    "How do I find this spa?",
                    "What services do they offer?",
                    "How much does it cost?",
                    "Can I trust this place?",
                    "How easy is it to book?",
                ],
            },
            {
                note: "Gaps",
                noteDetail: [
                    "No clear positioning or SEO-friendly structure.",
                    "Services were listed without details and benefits.",
                    "Limited social proof and brand consistency.",
                    "Booking links were not linked to services",
                ]
            }
        ],
        image: "/images/case-studies/lunaspa/luna-problem.png",
    },
    // why
    ideation: {
        label: "The Why",
        title: "Why Digital & Physical Must Match",
        description:
            "A spa is not just a location — it’s an experience system. Luna came to me to align the digital experience with the real-life service quality, so customers feel confident before they ever walk through the door.",
        notes: [
            {
                note: "If the digital presence feels confusing, outdated, or unprofessional:",
                noteDetail: [
                    "Customers hesitate before booking",
                    "Trust is lost before the first visit",
                    "Staff spend more time answering basic questions",
                    "The business appears less premium than it actually is",
                ]
            }
        ],
        image: "/images/case-studies/lunaspa/luna-moodboard.png",

    },
    // research: {
    //     label: "Analysis & Research",
    //     title: "Understanding Users and Identifying Opportunities",
    //     description:
    //         "I conducted competitive analysis of 5 premium wellness brands and interviewed 8 existing clients to understand their booking journey. Research revealed that users prioritize trust signals (certifications, reviews) and clear service differentiation when choosing a med spa.",
    //     insights: [
    //         {
    //             title: "User Research Findings",
    //             description:
    //                 "75% of users compared 3-5 med spas before booking. Decision factors: before/after photos, transparent pricing, professional credentials, and ease of contact.",
    //         },
    //         {
    //             title: "Competitive Analysis",
    //             description:
    //                 "Competitors excelled at visual storytelling but lacked personalized service recommendations. Opportunity to stand out through educational content and guided discovery.",
    //         },
    //     ],
    //     image: "/images/case-study/luna-research.png",
    // },
    // ideation: {
    //     label: "Ideation",
    //     title: "Exploring Design Opportunities Through Prioritization",
    //     description:
    //         "Based on research insights, I mapped out 12 potential features and prioritized them using an impact/effort matrix. Key opportunities included: service finder quiz, before/after gallery with filters, educational content library, and simplified booking with calendar integration.",
    //     opportunities: [
    //         "High priority: Service discovery flow, visual proof gallery, mobile-first booking",
    //         "Medium priority: Blog/education hub, membership portal",
    //         "Future considerations: Live chat support, AI-powered skin analysis",
    //     ],
    //     image: "/images/case-study/luna-ideation.png",
    // },
    designSolution: {
        label: "Design Solution",
        title: "How to Transform the Digital Experience for Med Spa Client",
        description:
            "The solution centered around three key pillars: building trust through visual proof, simplifying service discovery, and creating a serene, on-brand aesthetic. Each design decision tied back to user research insights.",
        howMightWe: [
            "HMW  build trust online before a client ever steps into the spa?",
            "HMW  help users quickly understand services and pricing without feeling overwhelmed?",
            "HMW  make the booking feel effortless and non-intimidating?",
            "HMW reduce decision anxiety for first-time med spa clients?",
        ],
        keyDecisions: [
            {
                title: "Trust Built Before Booking",
                description:
                    "I established trust by placing licenses, certifications, medical positioning, trusted product brands, testimonials, and real team photos above the fold. This immediately signals professionalism and reduces hesitation for first-time visitors.",
                image: "/images/case-studies/lunaspa/luna-solution-1.png",
            },
            {
                title: "Service Clarity & Pricing",
                description:
                    "I reorganized services into clear categories with concise descriptions, transparent pricing, and a strong content hierarchy. This allows users to quickly understand offerings, compare options, and feel confident in their choices.",
                image: "/images/case-studies/lunaspa/luna-solution-2.png",
            },
            {
                title: "Booking Experience",
                description:
                    "I streamlined the booking flow by reducing steps, using consistent “Book Now” CTAs, and integrating a third-party booking system optimized for mobile. This makes booking fast, intuitive, and frictionless across devices.",
                image: "/images/case-studies/lunaspa/luna-solution-3.png",
            },
        ],
    },
    results: {
        label: "Results",
        title: "The Impact of the Redesign",
        description:
            "Within 2 months of launch, Luna Spa saw significant improvements across key metrics. The new website not only attracted more visitors but converted them at a higher rate, reducing reliance on phone inquiries and freeing up staff time.",
        clientFeedback: {
            quote: "The new website perfectly captures our brand. Clients often compliment the experience before they even arrive.",
            author: "Angie Tran (Luna Spa Owner)",
        },
        metrics: [
            { value: "+50%", label: "Online bookings" },
            { value: "-70%", label: "Inquiry calls" },
        ],
    },
    reflection: {
        label: "Reflection",
        title: "This project reinforced an important lesson",
        description:
            "Good web design is not about matching colors — it’s about fixing systems. By understanding the business, the users, and the gaps between them, I was able to design a website that supports growth, trust, and conversion — not just aesthetics.",
        learnings: [
            "Aligning digital experience with physical service is crucial for trust",
            "Clear communication of services and pricing reduces friction and hesitation",
            "Mobile-first design strategy was critical — 68% of traffic came from mobile devices",
            "Collaborative client relationship throughout process led to faster decision-making and better outcomes",
        ],
    },
    showcase: {
        title: "The Final Product",
        description: "A comprehensive wellness experience designed to convert visitors into loyal clients.",
        image: "/images/case-studies/lunaspa/luna-showcase.png",
    },
    nextProject: {
        title: "Nomad Banking App",
        category: "Mobile App Design - Concept",
        image: "/images/works/nomad-app-image.png",
        link: "https://www.behance.net/gallery/233996507/Safe-Banking-App-Abroad-A-UX-Case-Study",
        type: "Concept",
    },
};

export default function LunaSpaCaseStudy() {
    return <CaseStudyTemplate data={lunaSpaCaseStudy} />;
}
