import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Left: Brand & Quote */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Arjun T</h3>
            <p className="text-gray-400 text-lg italic">
              "Crafting code, shaping experiences, and building the future—one line at a time."
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col items-center md:items-end mt-6 md:mt-0 space-y-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:arjunthalachathodi07@gmail.com"
              className="text-gray-400 hover:text-white flex items-center transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
              arjunthalachathodi07@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:+91 7559989801"
              className="text-gray-400 hover:text-white flex items-center transition duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
              +91 7559989801
            </motion.a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-6 mt-6">
          {[
            { icon: faGithub, link: "https://github.com/Arjunthalachathodi" },
            { icon: faLinkedin, link: "https://www.linkedin.com/in/arjun-t-8624632a4/" },
            { icon: faInstagram, link: "https://instagram.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2 }}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Arjun T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
