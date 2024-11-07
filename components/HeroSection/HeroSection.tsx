"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileImage } from "@/constants/imagesConstant";
import { contactConstant } from "@/constants/contactConstant";

const HeroSection = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const paragraphs = useMemo(
    () => [
      "Third-year software engineering student",
      "Aspiring to become a frontend developer",
      "Currently working with React and Next.js",
    ],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentText = paragraphs[currentParagraph];

      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(100);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && charIndex === 0) {
        // Moving
        setIsDeleting(false);
        setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentParagraph, typingSpeed, paragraphs]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/backgroundImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      <div className="relative bg-white max-w-4xl w-full bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 text-center mt-6">
            <h1 className="text-3xl font-bold mb-4 font-montserrat mt-10">
              Izet Delibašić
            </h1>
            <p className="mb-4 font-about">
              {displayedText}
              <span className="border-r-2 border-card-foreground animate-pulse">
                &nbsp;
              </span>
            </p>
            <div className="flex justify-center items-center mt-4 mb-6">
              {contactConstant.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={
                    index !== 0 ? "ml-[1rem] cursor-pointer" : "cursor-pointer"
                  }
                >
                  <contact.icon size={30} />
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mx-auto font-about">
              <button className="border border-blue-500 bg-blue-500 text-white mb-2 sm:mb-0 px-4 py-2 rounded w-[65%] sm:w-auto hover:bg-white hover:text-blue-500 ease-in-out duration-300">
                <a href="/Izet Delibasic - Curriculum Vitae.pdf" download>
                  Download CV
                </a>
              </button>
              <Link href="/projects">
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded w-[65%] sm:w-auto hover:bg-blue-500 hover:text-white ease-out duration-300">
                  About Me
                </button>
              </Link>
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
