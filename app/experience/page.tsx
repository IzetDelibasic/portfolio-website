"use client";

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
        {/* Projects Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
            Experience
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-montserrat"></p>
        </div>
      </div>
    </div>
  );
}
