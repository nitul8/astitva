import {fontFamily} from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF",
                secondary: "#60A5FA",
            },
            fontFamily: {
                dancing: ["Dancing Script", ...fontFamily.sans],
                whisper: ["Whisper", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
