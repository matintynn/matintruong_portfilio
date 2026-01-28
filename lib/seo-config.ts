/**
 * SEO Configuration
 * Centralized SEO settings for the portfolio website
 */

export const siteConfig = {
    name: "Matin Truong",
    businessName: "Matin Studio",
    url: "https://matintruong.com",
    email: "matintyson.design@gmail.com",
    phone: "+1 647 455 0581",
    location: {
        city: "Toronto",
        province: "Ontario",
        country: "Canada",
    },
    social: {
        linkedin: "https://www.linkedin.com/in/matin-truong/",
        twitter: "@matin_uxdesign",
        instagram: "@matin_uxdesign",
    },
    tagline: "Product Designer & Developer",
    description: "Full-cycle design and build across product, web, and brand. Focused on the details, from research to launch.",
};

export const defaultMetadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} - ${siteConfig.tagline}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "web design",
        "branding",
        "custom websites",
        "responsive web design",
        "brand strategy",
        "logo design",
        "website development",
        "SEO optimization",
        "product design",
        "UX design",
        "UI design",
        "Next.js developer",
        "Toronto designer",
        "portfolio design",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.businessName,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        siteName: siteConfig.businessName,
        title: `${siteConfig.name} - ${siteConfig.tagline}`,
        description: siteConfig.description,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Web Design & Branding Services`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} - ${siteConfig.tagline}`,
        description: siteConfig.description,
        creator: siteConfig.social.twitter,
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
    verification: {
        // Add your verification codes here when ready
        google: "HX-0SgsQ6HdQNRpIVvGQQErH7I634T9upuNUZ34ohU8", // Google Search Console verification
        // yandex: "",
        // bing: "",
    },
};
