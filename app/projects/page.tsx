"use client";

import { projectsConstant } from "@/constants/projectsConstant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
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
          <Link href="/achievements">
            <button
              className={`px-4 py-2 font-bold rounded ${
                activePath === "/achievements"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-blue-700 hover:text-gray-200 ease-in-out duration-300`}
            >
              Achievements
            </button>
          </Link>
        </div>

        {/* Projects Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Here is a selection of my recent work. Each project showcases
            different skills and technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {projectsConstant.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="mt-3 text-base text-gray-500">
                  {project.description}
                </p>
              </div>
              <div className="bg-white p-4">
                <Link href={project.href}>
                  <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    View Project
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
