module.exports = {
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#BD08A0",
            },

            maxWidth: {
                "8xl": "1502px",
            },
        },
        spacing: {
            "0": "0px",
            "1": "5px",
            "2": "10px",
            "3": "15px",
            "4": "20px",
            "5": "25px",
            "6": "30px",
            "7": "35px",
            "8": "40px",
            "9": "50px",
            "10": "60px",
            "11": "75px",
        },
    },
    plugins: [],
};
