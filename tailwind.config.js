/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app.vue",
        "./error.vue",
        "./**/*.{vue,js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                creepy: ['"Creepster"', "cursive"],
                metal: ['"Metal Mania"', 'cursive'],
                body: ['"Open Sans"', "sans-serif"],
            },
        },
    },
    plugins: [],
}