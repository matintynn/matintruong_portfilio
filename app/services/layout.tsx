/**
 * Services Page Layout
 * Provides SEO metadata for the services page
 */

import { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Web Design & Branding Services - Custom Websites & Brand Strategy",
    description: "Professional web design and branding services. Custom, responsive websites with full branding suites. Fixed pricing, 2-3 week turnaround. Transform your online presence.",
    keywords: [
        "web design services",
        "branding services",
        "custom website design",
        "responsive web design",
        "brand strategy",
        "logo design services",
        "website development services",
        "SEO optimization services",
        "Toronto web designer",
        "professional web design",
        "small business website",
    ],
    alternates: {
        canonical: `${siteConfig.url}/services`,
    },
    openGraph: {
        title: "Web Design & Branding Services | Matin Truong",
        description: "Professional web design and branding services. Custom, responsive websites with full branding suites. Fixed pricing, 2-3 week turnaround.",
        url: `${siteConfig.url}/services`,
        siteName: siteConfig.businessName,
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Web Design & Branding Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design & Branding Services | Matin Truong",
        description: "Professional web design and branding services. Custom, responsive websites with full branding suites.",
        creator: siteConfig.social.twitter,
        images: ["/og-image.png"],
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Structured Data for Services */}
            <StructuredData type="service" />
            <StructuredData type="localBusiness" />
            {children}
        </>
    );
}
