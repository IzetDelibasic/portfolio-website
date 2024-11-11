import {
  hirefyImage,
  sumathermImage,
  velezProject,
  wildescapeImage,
} from "./imagesConstant";

export const projectsConstant = [
  {
    id: 1,
    title: "SUMATHERM GMBH",
    description:
      "This is my first production project, where I worked for BlueDuck IT Services & Solutions company and built an app for Sumatherm Company using NextJS. I used TypeScript and Tailwind CSS. I learned to work with reusable components, constants, and other features for faster page speed.",
    imageSrc: sumathermImage,
    href: "https://sumatherm-project.vercel.app/",
    buttonTitle: "View website",
    technologies: ["next.js", "tailwindcss"],
  },
  {
    id: 2,
    title: "HIREFY",
    description:
      "As my first full-stack project, there's the Hirefy application built using React for the frontend, Node.js and Express for the backend, and MongoDB as the database. Hirefy is a job board allowing users to browse and post job listings. I utilized this experience to learn the fundamentals of full-stack development and familiarize myself with modern technologies such as React, Node.js, Express, and MongoDB.",
    imageSrc: hirefyImage,
    href: "https://hirefy-app.onrender.com/",
    buttonTitle: "View application",
    technologies: ["react", "nodejs", "mongodb", "express"],
  },
  {
    id: 3,
    title: "Wildescape",
    description:
      "A survival game being developed using Unity and C# scripts, offering a high level of immersion and a wide range of features. The goal is to survive in the game, with systems for crafting, consuming food, and many more.",
    imageSrc: wildescapeImage,
    href: "https://www.youtube.com/watch?v=d3SVVpHpS5g",
    buttonTitle: "View trailer",
    technologies: ["c#", "unity"],
  },
  {
    id: 4,
    title: "RK Velež - Website",
    description:
      "First production project: a dynamic web application for the Velež handball club, built with NextJs and powered by Firebase and Firestore. It showcases the club's history, achievements, results, and news.",
    image: velezProject,
    href: "https://www.rk-velez.com/",
    buttonTitle: "Website",
    technologies: ["next.js", "tailwindcss"],
  },
];
