"use client";

import { projectsConstant } from "@/constants/projectsConstant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function Projects() {
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
        <div className="flex justify-center space-x-4 mb-8 font-about">
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

        {/* Projects Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-xl text-gray-500 sm:mt-4 font-montserrat">
            Here is a selection of my recent work. Each project showcases
            different skills and technologies.
          </p>
        </div>

        <div className="mt-12 flex justify-center flex-col gap-5 max-w-lg mx-auto lg:max-w-none lg:w-[45%]">
          {projectsConstant.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="flex-shrink-0">
                {project.image && (
                  <Image
                    className="h-48 w-full object-cover"
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                )}
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between text-center md:text-start">
                <h2 className="text-xl font-semibold text-gray-900 font-montserrat">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-500 font-about">
                  {project.description}
                </p>
                <div className="flex justify-center md:justify-start my-2">
                  {project.technologies.map((tech, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 mx-1 text-xs font-medium bg-gray-200 rounded-full text-gray-600  hover:bg-gradient-to-r hover:from-gray-200 hover:via-blue-200 hover:to-blue-500 hover:text-black ease-in-out duration-300 cursor-default"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 font-about">
                    {project.buttonTitle}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
