import React, { useState } from "react";
import { motion } from "framer-motion";

// Projects Page
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Brandko Ecommerce Services",
      category: "Web Apps",
      image: "https://via.placeholder.com/600x400?text=E-Commerce",
      description: "A full-featured online store and admin dashboard.",
      technologies: ["React", "FastAPI", "SQL", "Firebase"]
    },
    {
      title: "RioskillHub",
      category: "Web Apps",
      image: "https://via.placeholder.com/600x400?text=Task+Manager",
      description:
        "RioskillHub is an educational platform designed to bridge the gap between academic learning and industrial standards.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "FastAPI", "SQL"]
    },
    {
      title: "ETA Flutter Application",
      category: "Mobile",
      image: "https://via.placeholder.com/600x400?text=Fitness+App",
      description: "Adding new features and updates.",
      technologies: ["Flutter"]
    },
    {
      title: "Brandko Flutter Application",
      category: "Mobile",
      image: "https://via.placeholder.com/600x400?text=Fitness+App",
      description:
        "A mobile app for tracking workouts, nutrition, and health metrics with data visualization.",
      technologies: ["Flutter", "Firebase", "FastAPI", "SQL"]
    },
    {
      title: "ElderSphere Flutter Application",
      category: "Mobile",
      image: "https://via.placeholder.com/600x400?text=ElderSphere",
      description:
        "ElderSphere helps elderly individuals track their health, daily activities, and reminders.",
      technologies: ["Flutter", "Firebase"]
    },
    {
      title: "Brandko",
      category: "UI/UX",
      image: "https://via.placeholder.com/600x400?text=Social+Dashboard",
      description:
        "Developed UI in Flutter and assisted the UI/UX designer in designing with Figma.",
      technologies: ["Flutter", "Figma"]
    },
    {
      title: "ElserSphere",
      category: "UI/UX",
      image: "https://via.placeholder.com/600x400?text=Social+Dashboard",
      description:
        "Developed UI in Flutter and designed UI/UX in Figma.",
      technologies: ["Flutter", "Figma"]
    }
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16 text-white"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-400">
          My Projects
        </h1>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web Apps", "Mobile", "UI/UX"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-all"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-2xl text-blue-300">
                    {project.title}
                  </h3>
                  <span className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
