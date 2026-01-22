import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Matin Truong - Designer & Developer",
    description: "Full-cycle design and build across product, web, and brand. Focused on the details, from research to launch.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </head>
            <body className={manrope.variable}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
