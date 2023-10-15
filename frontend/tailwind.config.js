/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#232323",
                    "secondary": "#eaf4dd",
                    "accent": "#dceef4",
                    "neutral": "#2e2933",
                    "base-100": "#f5f5f4",
                    "info": "#1f40e7",
                    "success": "#1eb409",
                    "warning": "#f59e0b",
                    "error": "#dc2626",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}

