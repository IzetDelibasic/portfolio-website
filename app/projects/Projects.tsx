import Image from "next/image";

export default function Component() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather forecasting using OpenWeatherMap API",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A productivity app built with React and Firebase",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio site using Next.js and Tailwind CSS",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
          {projects.map((project) => (
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
                <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
