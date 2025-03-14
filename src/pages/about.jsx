import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; // Import the image
import ressume from "../assets/ressume/Arjun_T.pdf"; // Import the resume
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500 border-blue-600">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="md:w-1/3">
            <img
              src={profile}
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Alex</h2>
            <p className="text-gray-700 mb-4">
              I am a passionate React & Flutter Developer with expertise in
              building dynamic web and mobile applications. With hands-on
              experience in FastAPI for backend development, I create
              high-performance, scalable solutions that enhance user experience.
            </p>
            <p className="text-gray-700 mb-4">
              My skill set includes developing interactive UIs with React,
              crafting cross-platform mobile apps with Flutter, and designing
              robust backend APIs using FastAPI. I also have experience working
              with HTML, CSS, and JavaScript for web projects.
            </p>
            <p className="text-gray-700 mb-6">
              I am constantly exploring new technologies to optimize
              performance, scalability, and security in my projects. Whether
              it's frontend, backend, or full-stack development, I thrive on
              solving challenges and delivering high-quality digital solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-black !important"
              >
                Contact Me
              </a>
              <a
                href={ressume}
                target="_blank"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500 border-blue-600">
            Work Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Junior Full Stack Developer",
                company: "Riosis Innovations",
                period: "Oct 2024 - Present",
                description:
                  "Developed responsive websites using React.js and mobile applications with Flutter, ensuring a seamless user experience across platforms. Handled the front-end of an e-commerce platform using React.js and Flutter, creating an interactive and user-friendly interface.",
              },
              {
                title: "Web Developer Intern",
                company: "Riosis Innovations",
                period: "Jun 2024 - Sept 2024",
                description:
                  "Built interactive web applications using JavaScript and React. Implemented reusable, modular components for enhanced maintainability. Worked on backend development using FastAPI for improved performance and scalability. Contributed to delivering accessible and responsive interfaces.",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-600">
                    {job.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <h4 className="text-gray-600 font-medium mb-3">
                  {job.company}
                </h4>
                <p className="text-gray-700">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500 border-blue-600">
            Education
          </h2>
          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Computer Applications (BCA)",
                school: "St. Mary’s College, Puthanangadi, Kerala, India",
                period: "2021 - 2024",
                description:
                  "Focused on software development, web technologies, and database management.",
              },
              {
                degree: "Higher Secondary",
                school: "PTMYHSS, Edappalam",
                period: "2019 - 2021",
                description:
                  "Studied computer science with an emphasis on programming and mathematics.",
              },
              {
                degree: "Secondary School",
                school: "VVMHSS, Marakkara",
                period: "2019",
                description:
                  "Completed foundational education with a focus on science and mathematics.",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-gray-600 font-medium mb-3">{edu.school}</h4>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500 border-blue-600">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "C", level: 85 },
              { name: "Dart", level: 80 },
              { name: "Python", level: 90 },
              { name: "HTML/CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "PHP", level: 75 },
              { name: "MySQL", level: 85 },
              { name: "Java", level: 80 },
              { name: "Flutter", level: 85 },
              { name: "React", level: 90 },
              { name: "FastAPI", level: 50 },
              { name: "Git", level: 85 },
              { name: "Firebase", level: 80 },
              { name: "Canva", level: 70 },
              { name: "Figma", level: 75 },
              { name: "Postman", level: 85 },
              { name: "GitHub", level: 90 },
              { name: "GitLab", level: 80 },
              { name: "WordPress", level: 70 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-black">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};
export default About;
