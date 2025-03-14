import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import profile from "../assets/profile.jpg"; // Import the image

// Home Page
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Hi, I'm <span className="text-yellow-300">Arjun</span>
              </motion.h1>
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-6"
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-6"
              >
                "Crafting code, shaping experiences, and building the future—one line at a time."
              </motion.p>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="/contact"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block mr-4"
                >
                  Hire Me
                </a>
                <a
                  href="/projects"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-block"
                >
                  View Work
                </a>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                src={profile} // Use the imported image
                alt="Developer"
                className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

     {/* Skills Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">My Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        "React",
        "Flutter",
        "FastAPI",
        "Git",
        "JavaScript",
        "JIRA",
      ].map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
        >
          <div className="text-blue-500 text-4xl mb-3">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="font-bold text-black">{skill}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Featured Projects */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
      Featured Projects
    </h2>

    <div className="grid grid-cols-3 gap-8">
      {/* Brandko Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://via.placeholder.com/600x400?text=Brandko"
          alt="Brandko Project"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Brandko
          </h3>
          <p className="text-gray-600 mb-4">
            Brandko is an eCommerce platform that allows businesses to sell products while managing branding and design needs.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">React</span>
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-blue-600 hover:underline">View Demo</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </motion.div>

      {/* ETA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://via.placeholder.com/600x400?text=ETA"
          alt="ETA Project"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
            ETA
          </h3>
          <p className="text-gray-600 mb-4">
            ETA is an application that helps businesses efficiently manage shop items, inventory, and sales.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Flutter</span>
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Firebase</span>
            <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Dart</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-blue-600 hover:underline">View Demo</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </motion.div>

      {/* Eldersphere Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://via.placeholder.com/600x400?text=Eldersphere"
          alt="Eldersphere Project"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Eldersphere
          </h3>
          <p className="text-gray-600 mb-4">
            Eldersphere is a social platform designed to help senior citizens connect and engage with their community.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">FastAPI</span>
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">React</span>
            <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-blue-600 hover:underline">View Demo</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </motion.div>
    </div>

    {/* View All Projects Button */}
    <div className="text-center mt-10">
      <a
        href="/projects"
        className="bg-blue-600 text-black px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"

      >
        View All Projects
      </a>
    </div>
  </div>
</section>



    {/* Extracurricular Activities */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
      Extracurricular Activities
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Technical Workshops",
          description:
            "Organized various technical workshops and events at St Mary’s College, enhancing students' practical skills and industry readiness.",
        },
        {
          title: "Event Coordination",
          description:
            "Coordinated and managed computer science department programs during NAAC accreditation, ensuring smooth execution.",
        },
      ].map((activity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            {activity.title}
          </h3>
          <p className="text-gray-600">{activity.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with modern web
            technologies.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
