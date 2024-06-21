/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F74887",
                gray: {
                    100: "#F2F2F2",
                    200: "#A0ABC0",
                },
                pink: {
                    50: "#FDF7FF",
                },
            },
        },
    },
    plugins: [],
};
