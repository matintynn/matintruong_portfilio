import CaseStudyTemplate from "@/components/CaseStudyTemplate";

const digitalSignageCaseStudy = {
    hero: {
        title: "How Do You Help People Find Their Way—Fast?",
        clientLabel: "The Permanent",
        clientDescription: "320 Bay Street, Toronto",
        specs: [
            { label: "Role", value: "Lead Product Designer", link: "", isLink: false },
            { label: "Platform", value: "Large-format digital signage (lobby)", link: "", isLink: false },
            { label: "Team", value: "1 Designer, 2 Engineers", link: "", isLink: false },
            { label: "Prototype", value: "Figma Link", link: "https://www.figma.com/proto/YmOHAp5JJJXeKmskarGMi9/320-Bay-Directory?node-id=4017-699&t=m55gA0Vpej4BabL2-1&scaling=scale-down&starting-point-node-id=4017%3A547", isLink: true },
            { label: "Timeline", value: "8 weeks - shipped", link: "", isLink: false },
        ],
        heroImage: "/images/case-studies/signage/signage-hero.png",
    },
    overview: {
        label: "Overview",
        title: "Designing a First Impression for a Historic Landmark",
        description:
            "Located in the heart of Toronto’s financial district, The Permanent is a historic office building serving a high volume of daily visitors and professionals. The challenge was to design a digital directory that simplifies wayfinding, surfaces essential building information, and supports fast, confident decision-making—without compromising the building’s architectural and historical character.",
        image: "/images/case-studies/signage/signage-userjourney.png",
    },
    problem: {
        label: "Problem & Challenges",
        title: "How can a digital directory honor history and reduce confusion?",
        description:
            "The Permanent’s lobby needed a digital directory that supports fast, confident navigation for visitors, while respecting the building’s historic character and high-traffic environment.",
        notes: [
            {
                note: "Problem Statement",
                description:
                    "Visitors struggle to find their way in The Permanent’s busy lobby, leading to frustration and delays. The existing static signage is outdated, hard to read, and fails to provide real-time information.",
            },
            {
                note: "Design Challenges",
                description:
                    "1. Limited screen space: prioritize essential info without clutter\n2.Users: Diverse user groups, disability, first-time visitors, tenants, and delivery personnel.\n3. Complex environment: PATH connections, transit, and lobby layout\n4. Historic context: design must honor Art Deco architecture and heritage status.",
            }
        ],
        image: "/images/case-studies/signage/signage-persona.png",
    },
    research: {
        label: "Research & Analysis",
        title: "Combined qualitative research with real-world observations and UX insights.",
        description:
            "Conducted interviews with building visitors, reception, and security staff to learn how people currently navigate The Permanent. These conversations revealed that a majority of visitors struggled to find tenants independently and often relied on staff for directions.",
        notes: [
            {
                note: "Observed nearby residential systems",
                description:
                    "most people gravitated toward a tenant search feature first, indicating the importance of searchable wayfinding.",
            },
            {
                note: "Accessibility Considerations",
                description:
                    "Focused on users with mobility challenges (e.g., wheelchair users) to evaluate existing physical signage. Observations showed traditional signage often lacks accessible interaction design and clear positioning, reinforcing the need for inclusive digital controls.",
            },
            {
                note: "Key Insights",
                description:
                    "1. Users want quick access to tenant info and building amenities.\n2. Clear visual hierarchy is essential for scanning information quickly.\n3. Accessibility features are necessary for inclusive navigation across diverse users.",
            },
            {
                note: "Patterns and Themes",
                description:
                    "After research and observations, several clear patterns and themes emerged from user behavior and environmental context.",
            }
        ],
        image: "/images/case-studies/signage/signage-themes.png",
    },
    howMightWe: [
        "How might we help visitors find their destination within seconds of entering the lobby?",
        "How might we reduce reliance on reception and security for basic wayfinding?",
        "How might we design an accessible experience for users with mobility challenges and diverse needs?",
        "How might we present essential information clearly without overwhelming busy professionals?",
    ],
    ideation: {
        label: "Ideation & Exploration",
        title: "Sketching a Clear Path Forward",
        notes: [
            {
                note: "Information Architecture & Sitemap",
                description:
                    "Mapped out key content areas based on user needs: tenant directory, building information, local map, amenities, and transit updates.  Prioritized tenant search as the primary entry point.",
                image: "/images/case-studies/signage/signage-sitemap.png",
            },
            {
                note: "User Flows",
                description:
                    "Created user flows for common scenarios such as finding a tenant, locating amenities, and checking transit info. Focused on minimizing steps and cognitive load.",
                image: "/images/case-studies/signage/signage-userflow.png",
            },
            {
                note: "Sketching & Concept Exploration",
                description:
                    "Sketched multiple layout concepts to test hierarchy and interactions, gathered early feedback, and iterated toward clearer, more usable designs aligned with the building’s character.",
                image: "/images/case-studies/signage/signage-sketch.png",
            },
            {
                note: "Moodboard",
                description:
                    "Moodboard to share my design vision for the interactive signage, blending a clean, modern style with elements that honor the building's historic charm and downtown Toronto's professional atmosphere.",
                image: "/images/case-studies/signage/signage-moodboard.png",
            },
        ],
    },
    designSolution: {
        label: "Design Solution",
        title: "The final design focuses on speed, clarity, and contextual awareness",
        description:
            "I focus on connecting early research insights with visual design choices to create a cohesive user experience. Building on the initial wireframes, I refine the visuals and interactions to make the directory both functional and visually appealing.",
        keyDecisions: [
            {
                title: "Flexible Tenant Search for Faster Discovery",
                description:
                    "To help visitors quickly find tenants, I designed multiple search paths—All Listings, A–Z Search, and Floor View—so users can choose the method that best matches their mental model. To avoid overwhelming users, options are intentionally limited, applying Hick’s Law to reduce decision time. The Tenant Directory Search is positioned as the primary entry point, ensuring fast and intuitive access to tenant information.",
                lottie: "/lottie/signage/signage-scene1.json",
            },
            {
                title: "Clear Wayfinding Through 3D Mapping and Guided Paths",
                description:
                    "I created a 3D building map in 3ds Max, based on the architectural floor plans, to make navigation more spatially intuitive. The 3D view helps users better understand scale, orientation, and destination context compared to flat maps. A “You Are Here” indicator anchors users in the space, while animated vector paths visually guide them step by step to their destination, reducing confusion and cognitive load during navigation.",
                lottie: "/lottie/signage/signage-scene2.json",
            },
            {
                title: "Structured Building Information to Build Trust",
                description:
                    "Building details—leasing, property management, security, and building history—are organized into a clear information hierarchy, allowing visitors to quickly scan and access what they need. Design elements inspired by the building’s architecture reinforce brand consistency, creating a professional, cohesive, and premium experience that builds trust with visitors and prospective tenants.",
                lottie: "/lottie/signage/signage-scene3.json",
            },
            {
                title: "Local Area & Transit Integration for a Complete Visit Experience",
                description:
                    "To extend usability beyond the building, I designed a Local Area section featuring a simplified 2D vector map that highlights nearby restaurants, shops, and amenities. The Transit section provides real-time TTC updates with a clean, high-contrast layout optimized for quick scanning, enabling visitors to confidently plan their next steps once they leave the building. ",
                lottie: "/lottie/signage/signage-scene4.json",
            },
            {
                title: "Accessibility-First Design for Inclusive Navigation",
                description:
                    "To ensure the directory is usable by all visitors, I incorporated accessibility features such as high-contrast text, large touch targets, and screen reader compatibility. The interface is designed to accommodate users with mobility challenges, ensuring that everyone can navigate the building with ease and confidence.",
                lottie: "/lottie/signage/signage-scene5.json",
            },
        ],
    },
    results: {
        label: "Final Result",
        title: "The interactive wayfinding directory is now live at 320 Bay Street.",
        description:
            "The new digital signage has significantly improved the visitor experience, reducing wayfinding questions for staff and allowing reception and security to focus on higher-value tasks. Visitors report greater confidence navigating the lobby, with an interface that feels intuitive while respecting the building’s historic character.",
        image: "/images/case-studies/signage/signage-results.png",
        metrics: [
            { value: "Noticeable reduction", label: "Reduced wayfinding inquiries based on staff feedback" },
        ],
    },
    reflection: {
        label: "Learnings & Takeaways",
        title: "Designing for Real-World Impact",
        learnings: [
            "This project reinforced the importance of grounding design decisions in user research and real-world observations.",
            "I was able to create a solution that not only meets user needs but also respects the unique context of a historic building.",
            "The experience highlighted the value of iterative design and user feedback in crafting effective digital experiences.",
        ],
    },
    showcase: {
        title: "Enterprise Platform at Scale",
        description: "A robust system managing 3,200+ digital screens across global retail locations.",
        image: "/images/case-studies/signage/digital-signage-showcase.png",
    },
    nextProject: {
        title: "Luna Essence Spa",
        category: "Website Design - Shipped",
        image: "/images/works/lunaspa-web-image.png",
        link: "/case-study/luna-spa",
        type: "Shipped" as const,
    },
};

export default function DigitalSignageCaseStudy() {
    return <CaseStudyTemplate data={digitalSignageCaseStudy} />;
}
