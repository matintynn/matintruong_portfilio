/**
 * Structured Data Component
 * Implements Schema.org JSON-LD for SEO
 */

import { siteConfig } from "@/lib/seo-config";

interface StructuredDataProps {
    type?: "website" | "service" | "person" | "localBusiness";
}

export default function StructuredData({ type = "website" }: StructuredDataProps) {
    // Website Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.businessName,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
            jobTitle: siteConfig.tagline,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            sameAs: [
                siteConfig.social.linkedin,
                `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
                `https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`,
            ],
        },
    };

    // Person Schema
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        jobTitle: siteConfig.tagline,
        description: siteConfig.description,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.province,
            addressCountry: siteConfig.location.country,
        },
        sameAs: [
            siteConfig.social.linkedin,
            `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
            `https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`,
        ],
    };

    // Professional Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteConfig.businessName,
        image: `${siteConfig.url}/og-image.png`,
        description: "Professional web design and branding services. Custom, responsive websites with full branding suites. Fixed pricing, 2-3 week turnaround. Transform your online presence.",
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$$",
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.province,
            addressCountry: siteConfig.location.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            addressCountry: siteConfig.location.country,
        },
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                addressCountry: siteConfig.location.country,
            },
        },
        serviceType: [
            "Web Design",
            "Branding Services",
            "Logo Design",
            "Responsive Web Design",
            "Brand Strategy",
            "Website Development",
            "SEO Optimization",
            "Product Design",
            "UX Design",
            "UI Design",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Design & Branding Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Website Design & Development",
                        description: "Custom, responsive website design and development tailored to your brand",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Full Branding Suite",
                        description: "Complete brand identity including logo, color palette, typography, and brand guidelines",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "SEO Optimization",
                        description: "Search engine optimization to improve your online visibility",
                    },
                },
            ],
        },
        founder: {
            "@type": "Person",
            name: siteConfig.name,
        },
        sameAs: [
            siteConfig.social.linkedin,
            `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
            `https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`,
        ],
    };

    // Local Business Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": siteConfig.url,
        name: siteConfig.businessName,
        image: `${siteConfig.url}/og-image.png`,
        description: "Professional web design and branding services in Toronto, Ontario. Custom websites and brand identity solutions.",
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$$",
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.province,
            addressCountry: siteConfig.location.country,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
        sameAs: [
            siteConfig.social.linkedin,
            `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
            `https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`,
        ],
    };

    // Select schema based on type
    let schema;
    switch (type) {
        case "person":
            schema = personSchema;
            break;
        case "service":
            schema = serviceSchema;
            break;
        case "localBusiness":
            schema = localBusinessSchema;
            break;
        default:
            schema = websiteSchema;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
