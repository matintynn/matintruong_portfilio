/**
 * Google Analytics Component
 * Setup for Google Analytics 4 tracking
 * 
 * Usage:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Add it to your environment variables: NEXT_PUBLIC_GA_ID
 * 4. Import and add this component to your root layout
 */

"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
    measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
    if (!measurementId) {
        console.warn("Google Analytics Measurement ID is missing");
        return null;
    }

    return (
        <>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}

/**
 * Optional: Event tracking hook
 * Use this to track custom events in your application
 * 
 * Example usage:
 * import { trackEvent } from '@/components/GoogleAnalytics';
 * 
 * trackEvent({
 *   action: 'quote_submitted',
 *   category: 'engagement',
 *   label: 'service_quote_form',
 *   value: 1
 * });
 */
export const trackEvent = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};
