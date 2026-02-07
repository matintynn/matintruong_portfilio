import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Blog - UX Insights & Design Stories | Matin Truong",
    description: "Read my thoughts on UX design, product design, and everyday observations that shape better experiences.",
    alternates: {
        canonical: `${siteConfig.url}/blog`,
    },
    openGraph: {
        title: "Blog - UX Insights & Design Stories | Matin Truong",
        description: "Read my thoughts on UX design, product design, and everyday observations that shape better experiences.",
        url: `${siteConfig.url}/blog`,
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Thoughts on design, UX, and everyday moments that teach us something."
                label="Blog"
                description="My writings"
                titlePosition="left"
            />

            <div className="py-16 border border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">
                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BlogCard
                            title="A UX Lesson I Found in the Ice Cream Aisle"
                            summary="A quick UX observation from an everyday moment at Loblaws."
                            link="https://medium.com/@matinuxdesign/a-ux-lesson-i-found-in-the-ice-cream-aisle-535e57751919"
                            image="/images/blog/blog-cover1.png"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
