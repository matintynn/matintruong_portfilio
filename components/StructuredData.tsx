import { siteConfig } from "@/lib/seo-config";

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                "url": siteConfig.url,
                "name": siteConfig.businessName,
                "publisher": {
                    "@id": `${siteConfig.url}/#business`
                }
            },
            {
                "@type": "Person",
                "@id": `${siteConfig.url}/#person`,
                "name": siteConfig.name,
                "url": siteConfig.url,
                "jobTitle": siteConfig.tagline,
                "email": siteConfig.email,
                "telephone": siteConfig.phone,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": siteConfig.location.city,
                    "addressRegion": siteConfig.location.province,
                    "addressCountry": siteConfig.location.country
                },
                "sameAs": [
                    siteConfig.social.linkedin,
                    `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
                    `https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`
                ]
            },
            {
                "@type": "LocalBusiness",
                "@id": `${siteConfig.url}/#business`,
                "name": siteConfig.businessName,
                "url": siteConfig.url,
                "logo": `${siteConfig.url}/favicon.svg`,
                "image": `${siteConfig.url}/og-image.png`,
                "description": "Freelance web and product designer in Toronto specializing in UX/UI design, custom websites, and branding for startups and growing businesses.",
                "priceRange": "$$",
                "telephone": siteConfig.phone,
                "email": siteConfig.email,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": siteConfig.location.city,
                    "addressRegion": siteConfig.location.province,
                    "addressCountry": siteConfig.location.country
                },
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Toronto"
                },
                "founder": {
                    "@id": `${siteConfig.url}/#person`
                },
                "sameAs": [
                    siteConfig.social.linkedin
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
}
