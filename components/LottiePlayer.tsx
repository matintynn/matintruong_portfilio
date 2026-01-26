"use client";

import { useEffect, useState, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

type Props = {
    src: string; // e.g. "/lottie/multi-search.json"
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
};

export default function LottiePlayer({
    src,
    loop = true,
    autoplay = true,
    className,
}: Props) {
    const [animationData, setAnimationData] = useState<any>(null);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then(setAnimationData);
    }, [src]);

    useEffect(() => {
        if (!animationData || !containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        lottieRef.current?.play();
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [animationData]);

    if (!animationData) return null;

    return (
        <div ref={containerRef}>
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={loop}
                autoplay={false}
                className={className}
            />
        </div>
    );
}
