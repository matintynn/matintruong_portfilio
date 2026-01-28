import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { defaultMetadata } from "@/lib/seo-config";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
    preload: true,
});

// Export metadata for SEO
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US">
            <head>
                {/* Preconnect to external resources for performance */}
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
                <link rel="preconnect" href="https://api.web3forms.com" />

                {/* RemixIcon stylesheet */}
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
                    rel="stylesheet"
                />

                {/* Structured Data for SEO */}
                <StructuredData />
            </head>
            <body className={manrope.variable}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
