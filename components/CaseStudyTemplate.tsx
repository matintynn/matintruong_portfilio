"use client";

import NextProjectCTA from "@/components/NextProjectCTA";
import ResultsSection from "@/components/ResultsSection";
import SectionLabel from "@/components/SectionLabel";
import LottiePlayer from "@/components/LottiePlayer";
import { motion } from "framer-motion";
import { RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

interface ProjectSpec {
    label: string;
    link: string;
    value: string;
    isLink?: boolean;
}

interface CaseStudyData {
    hero: {
        title: string;
        clientLabel: string;
        clientDescription?: string;
        clientLocation?: string;
        specs: ProjectSpec[];
        heroImage: string;
    };
    overview?: {
        label: string;
        title?: string;
        description?: string;
        notes?: Array<{
            note: string;
            description?: string;
            noteDetail?: string | string[];
        }>;
        image?: string;
    };
    problem?: {
        label: string;
        title?: string;
        description?: string;
        notes?: Array<{
            note: string;
            description?: string;
            noteDetail?: string | string[];
        }>;
        image?: string;
    };
    research?: {
        label: string;
        title?: string;
        description?: string;
        notes?: Array<{
            note: string;
            description?: string;
            noteDetail?: string | string[];
        }>;
        image?: string;
    };
    howMightWe?: string[];
    ideation?: {
        label: string;
        title?: string;
        description?: string;
        notes?: Array<{
            note: string;
            description?: string;
            noteDetail?: string | string[];
            image?: string;
        }>;
        image?: string;
    };
    designSolution?: {
        label: string;
        title?: string;
        description?: string;
        howMightWe?: string[];
        keyDecisions?: Array<{
            title: string;
            description: string;
            image?: string;
            lottie?: string;
            externalLink?: {
                text: string;
                url: string;
            };
        }>;
    };
    results?: {
        label: string;
        title?: string;
        description?: string;
        image?: string;
        clientFeedback?: {
            quote: string;
            author: string;
        };
        metrics?: Array<{
            value: string;
            label: string;
        }>;
    };
    reflection?: {
        label: string;
        title?: string;
        description?: string;
        learnings?: string[];
    };
    showcase?: {
        title?: string;
        description?: string;
        image: string;
    };
    nextProject: {
        title: string;
        category: string;
        image: string;
        link: string;
        type: "Shipped" | "Concept";
    };
}

interface CaseStudyTemplateProps {
    data: CaseStudyData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
    const router = useRouter();

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="border-b border-border dark:border-borderDark">
                <div className="max-w-container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 h-[calc(100vh-4rem)]">
                        {/* Left Column - Project Title */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:leading-[1] tracking-tight text-title dark:text-titleDark">
                                {data.hero.title}
                            </h1>
                        </motion.div>

                        {/* Right Column - Project Specs */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                            className="flex flex-col justify-between h-full"
                        >
                            <div className="flex flex-col gap-6 h-full justify-between items-end">
                                <div className="w-[240px] flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-neutral-900 dark:bg-white"></div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-title dark:text-titleDark">
                                            {data.hero.clientLabel}
                                        </span>
                                    </div>
                                    <p className="text-base text-body dark:text-bodyDark">
                                        {data.hero.clientDescription}
                                    </p>
                                    <p className="text-base text-body dark:text-bodyDark">
                                        {data.hero.clientLocation}
                                    </p>
                                </div>

                                {/* Project Specs */}
                                <div className=" w-[240px] flex flex-col gap-4">
                                    {data.hero.specs.map((spec, index) => (
                                        <div key={index} className="flex flex-col gap-1">
                                            <span className="text-sm font-semibold text-title dark:text-titleDark">
                                                {spec.label}
                                            </span>
                                            {spec.isLink ? (
                                                <a
                                                    href={spec.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base text-body dark:text-bodyDark hover:text-title dark:hover:text-titleDark underline transition-colors"
                                                >
                                                    {spec.value}
                                                </a>
                                            ) : (
                                                <p className="text-base text-body dark:text-bodyDark">
                                                    {spec.value}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <p className="w-[240px] text-base text-body dark:text-bodyDark">
                                    Scroll to explore
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="">
                <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full aspect-[16/9]"
                    >
                        <img
                            src={data.hero.heroImage}
                            alt="Case Study Hero"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Regular Sections */}
            {/* Overview */}
            {data.overview && (
                <section className="border-y border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <SectionLabel label={data.overview.label} />
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col gap-6"
                            >
                                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                    {data.overview.title}
                                </h2>
                                <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                    {data.overview.description}
                                </p>
                                {data.overview.notes && data.overview.notes.length > 0 && (
                                    <div className="flex flex-col gap-4 mt-2">
                                        {data.overview.notes.map((noteItem, index) => (
                                            <div key={index} className="flex flex-col gap-2">
                                                <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100 whitespace-pre-line">
                                                    {noteItem.note}
                                                </span>
                                                {noteItem.description && (
                                                    <p className="text-base text-body dark:text-neutral-400 whitespace-pre-line">
                                                        {noteItem.description}
                                                    </p>
                                                )}
                                                {noteItem.noteDetail && (
                                                    Array.isArray(noteItem.noteDetail) ? (
                                                        <ul className="space-y-2">
                                                            {noteItem.noteDetail.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0"></div>
                                                                    <p className="text-base text-body dark:text-neutral-400">
                                                                        {item}
                                                                    </p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-base text-body dark:text-neutral-400 whitespace-pre-line">
                                                            {noteItem.noteDetail}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {data.overview.image && (
                                    <div className="w-full aspect-[16/9] overflow-hidden mt-4">
                                        <img
                                            src={data.overview.image}
                                            alt="Overview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Problem */}
            {data.problem && (
                <section className="border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <SectionLabel label={data.problem.label} />
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col gap-6"
                            >
                                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                    {data.problem.title}
                                </h2>
                                {data.problem.description && (
                                    <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                        {data.problem.description}
                                    </p>
                                )}
                                {data.problem.notes && data.problem.notes.length > 0 && (
                                    <div className="flex flex-col gap-4 mt-2">
                                        {data.problem.notes.map((noteItem, index) => (
                                            <div key={index} className="flex flex-col gap-2">
                                                <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100 whitespace-pre-line">
                                                    {noteItem.note}
                                                </span>
                                                {noteItem.description && (
                                                    <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                                        {noteItem.description}
                                                    </p>
                                                )}
                                                {noteItem.noteDetail && (
                                                    Array.isArray(noteItem.noteDetail) ? (
                                                        <ul className="space-y-2">
                                                            {noteItem.noteDetail.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0"></div>
                                                                    <p className="text-base text-body dark:text-bodyDark">
                                                                        {item}
                                                                    </p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                                            {noteItem.noteDetail}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {data.problem.image && (
                                    <div className="w-full aspect-[16/9] overflow-hidden mt-4">
                                        <img
                                            src={data.problem.image}
                                            alt="Problem"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Analysis & Research */}
            {data.research && (
                <section className="border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <SectionLabel label={data.research.label} />
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col gap-6"
                            >
                                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                    {data.research.title}
                                </h2>
                                <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                    {data.research.description}
                                </p>

                                {data.research.notes && data.research.notes.length > 0 && (
                                    <div className="flex flex-col gap-4 mt-2">
                                        {data.research.notes.map((noteItem, index) => (
                                            <div key={index} className="flex flex-col gap-2">
                                                <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100 whitespace-pre-line">
                                                    {noteItem.note}
                                                </span>
                                                {noteItem.description && (
                                                    <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                                        {noteItem.description}
                                                    </p>
                                                )}
                                                {noteItem.noteDetail && (
                                                    Array.isArray(noteItem.noteDetail) ? (
                                                        <ul className="space-y-2">
                                                            {noteItem.noteDetail.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0"></div>
                                                                    <p className="text-base text-body dark:text-bodyDark">
                                                                        {item}
                                                                    </p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                                            {noteItem.noteDetail}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {data.research.image && (
                                    <div className="w-full aspect-[16/9] overflow-hidden mt-4">
                                        <img
                                            src={data.research.image}
                                            alt="Research"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* How Might We Section - Moved before Ideation */}
            {data.howMightWe && data.howMightWe.length > 0 && (
                <section className="border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                        >
                            <div></div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-base font-semibold text-title dark:text-titleDark">
                                    How Might We...
                                </h3>
                                <ul className="space-y-3">
                                    {data.howMightWe.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2"></div>
                                            <p className="text-base text-body dark:text-bodyDark">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Ideation & Opportunities */}
            {data.ideation && (
                <section className="border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <SectionLabel label={data.ideation.label} />
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col gap-6"
                            >
                                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                    {data.ideation.title}
                                </h2>
                                <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                    {data.ideation.description}
                                </p>

                                {data.ideation.notes && data.ideation.notes.length > 0 && (
                                    <div className="flex flex-col gap-4 mt-2">
                                        {data.ideation.notes.map((noteItem, index) => (
                                            <div key={index} className="flex flex-col gap-2">
                                                <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100 whitespace-pre-line">
                                                    {noteItem.note}
                                                </span>
                                                {noteItem.description && (
                                                    <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                                        {noteItem.description}
                                                    </p>
                                                )}
                                                {noteItem.noteDetail && (
                                                    Array.isArray(noteItem.noteDetail) ? (
                                                        <ul className="space-y-2">
                                                            {noteItem.noteDetail.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0"></div>
                                                                    <p className="text-base text-body dark:text-bodyDark">
                                                                        {item}
                                                                    </p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                                            {noteItem.noteDetail}
                                                        </p>
                                                    )
                                                )}
                                                {noteItem.image && (
                                                    <div className="w-full aspect-[16/9] overflow-hidden border mt-4 mb-6">
                                                        <img
                                                            src={noteItem.image}
                                                            alt="note image"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {data.ideation.image && (
                                    <div className="w-full aspect-[16/9] overflow-hidden border mt-4">
                                        <img
                                            src={data.ideation.image}
                                            alt="Ideation"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Design Solution */}
            {data.designSolution && (
                <section className="border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <div className="flex flex-col gap-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                {/* Left Column - Label */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <SectionLabel label={data.designSolution.label} />
                                </motion.div>

                                {/* Right Column - Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="flex flex-col gap-6 lg:mb-16"
                                >
                                    <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                        {data.designSolution.title}
                                    </h2>
                                    <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                        {data.designSolution.description}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Key Design Decisions */}
                            {data.designSolution.keyDecisions && data.designSolution.keyDecisions.length > 0 && (
                                <div className="flex flex-col gap-16">
                                    {data.designSolution.keyDecisions.map((decision, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
                                        >
                                            {(decision.image || decision.lottie) && (
                                                <div
                                                    className={`aspect-[4/3]overflow-hidden  ${index % 2 === 1 ? "order-1 lg:order-2" : ""
                                                        }`}
                                                >
                                                    {decision.lottie ? (
                                                        <LottiePlayer
                                                            src={decision.lottie}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : decision.image ? (
                                                        <img
                                                            src={decision.image}
                                                            alt={decision.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : null}
                                                </div>
                                            )}
                                            <div
                                                className={`flex flex-col gap-3 ${index % 2 === 1 ? "order-2 lg:order-1" : ""
                                                    }`}
                                            >
                                                <h3 className="text-xl font-semibold text-title dark:text-titleDark">
                                                    {decision.title}
                                                </h3>
                                                <p className="text-base text-body dark:text-bodyDark">
                                                    {decision.description}
                                                </p>
                                                {decision.externalLink && (
                                                    <a
                                                        href={decision.externalLink.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-semibold text-title dark:text-titleDark hover:text-body dark:hover:text-bodyDark transition-colors mt-2 underline"
                                                    >
                                                        {decision.externalLink.text}
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </a>
                                                )}
                                            </div>

                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Results / Impact */}
            {data.results && data.results.title && data.results.description && (
                <ResultsSection
                    label={data.results.label}
                    title={data.results.title}
                    description={data.results.description}
                    image={data.results.image}
                    clientFeedback={data.results.clientFeedback}
                    metrics={data.results.metrics}
                />
            )}

            {/* Reflection / Key Takeaways */}
            {data.reflection && (
                <section className="border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <SectionLabel label={data.reflection.label} />
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col gap-6"
                            >
                                <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                    {data.reflection.title}
                                </h2>
                                <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                    {data.reflection.description}
                                </p>

                                {data.reflection.learnings && data.reflection.learnings.length > 0 && (
                                    <ul className="space-y-3 mt-4">
                                        {data.reflection.learnings.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2"></div>
                                                <p className="text-base text-body dark:text-bodyDark">
                                                    {item}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Showcase Section - Old Design (Disabled) */}
            {/* {data.showcase && (
                <section className="border-b border-border dark:border-borderDark">
                    <div className="max-w-container mx-auto px-5 py-16 lg:py-24">
                        {(data.showcase.title || data.showcase.description) && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col gap-4 mb-12 text-center max-w-3xl mx-auto"
                            >
                                {data.showcase.title && (
                                    <h2 className="text-3xl lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-title dark:text-titleDark">
                                        {data.showcase.title}
                                    </h2>
                                )}
                                {data.showcase.description && (
                                    <p className="text-base text-body dark:text-bodyDark whitespace-pre-line">
                                        {data.showcase.description}
                                    </p>
                                )}
                            </motion.div>
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-700"
                        >
                            <img
                                src={data.showcase.image}
                                alt={data.showcase.title || "Product Showcase"}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>
            )} */}

            {/* Showcase Section - New Scroll Overlay Design */}
            {data.showcase && (
                <section
                    className="relative h-[106vh] bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${data.showcase.image})` }}
                >
                </section>
            )}

            {/* Next Project CTA - Will scroll over showcase */}
            <NextProjectCTA nextProject={data.nextProject} />

            {/* Fixed Go Back Button */}
            <button
                onClick={() => router.back()}
                className="fixed top-8 left-6 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-900 dark:border-white rounded-full text-base font-medium text-title dark:text-titleDark hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all duration-300 flex items-center gap-2"
            >
                <RiArrowLeftLine size={16} />
                Go Back
            </button>
        </main>
    );
}
