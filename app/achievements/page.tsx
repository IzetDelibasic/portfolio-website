"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Achievements() {
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
      </div>
    </div>
  );
}
