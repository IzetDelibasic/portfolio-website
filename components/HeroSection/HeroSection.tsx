"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileImage } from "@/constants/imagesConstant";

const HeroSection = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const paragraphs = [
    "Third-year software engineering student",
    "Aspiring to become a frontend developer",
    "Currently working with React and Next.js",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-4xl w-full bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4">Izet Delibasic</h1>
            <p className="mb-6 h-24">{paragraphs[currentParagraph]}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
                <Link href="/projects">View Projects</Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <Image
                src={profileImage}
                alt="Izet Delibasic"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
