"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default function CursorRipple() {
    const lensRef = useRef<HTMLDivElement>(null);
    const turbRef = useRef<SVGFETurbulenceElement>(null);
    const dispRef = useRef<SVGFEDisplacementMapElement>(null);
    const rafId = useRef<number>(0);
    const mouse = useRef({ x: -200, y: -200 });
    const velocity = useRef({ x: 0, y: 0 });
    const prevMouse = useRef({ x: -200, y: -200 });
    const isActive = useRef(false);
    const decayTween = useRef<gsap.core.Tween | null>(null);

    const SIZE = 160; // diameter of the distortion lens
    const EDGE_DEAD_ZONE = 10; // px from browser top edge — no effect

    const animateDisplacement = useCallback((scale: number) => {
        if (dispRef.current) {
            gsap.to(dispRef.current, {
                attr: { scale },
                duration: 0.6,
                ease: "power2.out",
                overwrite: true,
            });
        }
    }, []);

    useEffect(() => {
        const hasPointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasPointer) return;

        const lens = lensRef.current;
        const turb = turbRef.current;
        if (!lens || !turb) return;

        // Seed with a random value for organic feel
        turb.setAttribute("seed", String(Math.floor(Math.random() * 100)));

        const onMouseMove = (e: MouseEvent) => {
            const prevX = mouse.current.x;
            const prevY = mouse.current.y;
            mouse.current = { x: e.clientX, y: e.clientY };

            // Calculate velocity
            const vx = e.clientX - prevX;
            const vy = e.clientY - prevY;
            const speed = Math.sqrt(vx * vx + vy * vy);
            velocity.current = { x: vx, y: vy };

            // Position the lens centered on cursor
            gsap.set(lens, {
                x: e.clientX - SIZE / 2,
                y: e.clientY - SIZE / 2,
            });

            // Dead zone: suppress effect near top browser edge
            if (e.clientY < EDGE_DEAD_ZONE) {
                animateDisplacement(0);
                return;
            }

            // Scale displacement based on movement speed — capped for subtlety
            const mappedScale = Math.min(speed * 0.8, 35);
            animateDisplacement(mappedScale);

            // Cancel any decay in progress and restart
            if (decayTween.current) decayTween.current.kill();
            decayTween.current = gsap.to(dispRef.current, {
                attr: { scale: 0 },
                duration: 1.6,
                delay: 0.06,
                ease: "power3.out",
                overwrite: false,
            });

            if (!isActive.current) {
                isActive.current = true;
                gsap.to(lens, { opacity: 1, duration: 0.2 });
            }
        };

        const onMouseLeave = () => {
            isActive.current = false;
            gsap.to(lens, { opacity: 0, duration: 0.4 });
            animateDisplacement(0);
        };

        const onMouseEnter = () => {
            isActive.current = true;
            gsap.to(lens, { opacity: 1, duration: 0.2 });
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            if (decayTween.current) decayTween.current.kill();
            cancelAnimationFrame(rafId.current);
        };
    }, [animateDisplacement]);

    return (
        <>
            {/* SVG filter definition */}
            <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                    <filter id="cursor-ripple-filter" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence
                            ref={turbRef}
                            type="turbulence"
                            baseFrequency="0.012 0.012"
                            numOctaves="2"
                            result="turbulence"
                            seed="2"
                        />
                        <feDisplacementMap
                            ref={dispRef}
                            in="SourceGraphic"
                            in2="turbulence"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Distortion lens that follows the cursor */}
            {/* Distortion lens — radial gradient mask softens the edge */}
            <div
                ref={lensRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: SIZE,
                    height: SIZE,
                    opacity: 0,
                    backdropFilter: "url(#cursor-ripple-filter)",
                    WebkitBackdropFilter: "url(#cursor-ripple-filter)",
                    maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                    willChange: "transform",
                }}
            />
        </>
    );
}
