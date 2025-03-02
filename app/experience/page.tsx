"use client";

import { competitionConstant } from "@/constants/competitionConstant";
import { educationConstant } from "@/constants/educationConstant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function Achievements() {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="self-end flex justify-start items-center group mb-4"
      >
        <IoArrowBack className="h-4 w-4 mr-1 group-hover:text-blue-500 group-hover:ease-in-out group-hover:duration-300" />
        <p className="text-sm font-subtitle group-hover:text-blue-500 group-hover:ease-in-out group-hover:duration-300">
          Home
        </p>
      </Link>
      <div className="max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Link href="/projects">
            <button
              className={`px-4 py-2 font-bold rounded ${
                activePath === "/projects"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-blue-700 hover:text-gray-200 ease-in-out duration-300`}
            >
              Projects
            </button>
          </Link>
          <Link href="/experience">
            <button
              className={`px-4 py-2 font-bold rounded ${
                activePath === "/experience"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-blue-700 hover:text-gray-200 ease-in-out duration-300`}
            >
              Experience
            </button>
          </Link>
        </div>
        {/* Experience Section */}
        <div
          className="text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
            Competitions
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-xl text-gray-500 sm:mt-4 font-montserrat">
            A showcase of my participation in various hackathons and programming
            challenges.
          </p>
        </div>
        {/* Competitions List */}
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {competitionConstant.map((competition, index) =>
            competition.href ? (
              <a
                key={index}
                href={competition.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <competition.icon className="text-blue-600 h-12 w-12 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 font-montserrat">
                    {competition.competitionTitle}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-500 font-about">
                    {competition.competitionDescription}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white opacity-50 cursor-default"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <competition.icon className="text-blue-600 h-12 w-12 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 font-montserrat">
                    {competition.competitionTitle}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-500 font-about">
                    {competition.competitionDescription}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        <div
          className="text-center mt-6"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
            Education
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-montserrat"></p>
        </div>
        {/* Education List */}
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {educationConstant.map((education, index) =>
            education.href ? (
              <a
                key={index}
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <education.icon className="text-blue-600 h-12 w-12 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 font-montserrat">
                    {education.educationTitle}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-500 font-about">
                    {education.educationDescription}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white opacity-50 cursor-default"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <education.icon className="text-blue-600 h-12 w-12 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 font-montserrat">
                    {education.educationTitle}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-500 font-about">
                    {education.educationDescription}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
