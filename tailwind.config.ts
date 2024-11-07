import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        subtitle: "Outfit",
        title: "Bebas Neue",
        about: "Work Sans",
        montserrat: "Montserrat",
        cabin: "Cabin",
      },
      colors: {
        backgroundColor: "#E6F2F9",
        blueColor: "#003459",
        lightBlue: "#007ea7",
        greenColor: "#32CD32",
        lightGreen: "#50C878",
      },
    },
  },
  plugins: [],
};
export default config;
