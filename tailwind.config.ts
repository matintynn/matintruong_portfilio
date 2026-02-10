import { body } from "framer-motion/client";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontSize: {
				'xs': ['12px', { lineHeight: '1.5' }],
				'sm': ['14px', { lineHeight: '1.5' }],
				'base': ['14px', { lineHeight: '1.5' }],
				'md': ['16px', { lineHeight: '1.5' }],
				'lg': ['18px', { lineHeight: '1.5' }],
				'xl': ['20px', { lineHeight: '1.4' }],
				'2xl': ['24px', { lineHeight: '1.3' }],
				'3xl': ['32px', { lineHeight: '1.2' }],
				'4xl': ['48px', { lineHeight: '1.2' }],
				'5xl': ['64px', { lineHeight: '1.1' }],
			},
			colors: {
				primary: "#0A0A0A",
				title: "#0A0A0A",
				titleDark: "#FFFFFF",
				body: "#404040",
				inactiveLink: "#737373",
				activeLink: "#A3A3A3",
				bodyDark: "#A3A3A3",
				border: "#E5E5E5",
				borderDark: "#262626", // neutral-700
				neutral: {
					50: "#FAFAFA",
					100: "#F5F5F5",
					200: "#E5E5E5",
					300: "#D4D4D4",
					400: "#A3A3A3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					850: "#111111",
					900: "#0A0A0A",
				},
			},
			fontFamily: {
				manrope: ["var(--font-manrope)", "sans-serif"],
			},
			maxWidth: {
				container: "1440px",
			},
			keyframes: {
				'status-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.15)' },
				},
				'status-ping': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'75%, 100%': { transform: 'scale(1.8)', opacity: '0' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-100%)' },
				},
				'menu-slide-in': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'menu-slide-out': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' },
				},
			},
			animation: {
				'status-pulse': 'status-pulse 2s ease-in-out infinite',
				'status-ping': 'status-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				'slide-down': 'slide-down 0.3s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'menu-slide-in': 'menu-slide-in 0.3s ease-out',
				'menu-slide-out': 'menu-slide-out 0.3s ease-out',
			},
		},
	},
	plugins: [],
};
export default config;