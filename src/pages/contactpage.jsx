import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Send message to WhatsApp
  const sendMessageToWhatsApp = (e) => {
    e.preventDefault(); // Prevent page reload
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    const whatsappNumber = "917559989801"; // Add country code
    const text = `Hello, my name is ${name}. \n\nEmail: ${email} \n\nSubject: ${subject} \n\nMessage: ${message}`;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    // Clear form fields after sending
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-blue-500 text-4xl font-bold mb-8 text-center">
          Get In Touch
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
  {/* Location */}
  <div className="flex items-start">
    <div className="bg-yellow-500 p-3 rounded-lg mr-4">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black text-xl" />
    </div>
    <div>
      <h3 className="font-bold">Location</h3>
      <p>Malappuram, Kerala, India</p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-start">
    <div className="bg-yellow-500 p-3 rounded-lg mr-4">
      <FontAwesomeIcon icon={faEnvelope} className="text-black text-xl" />
    </div>
    <div>
      <h3 className="font-bold">Email</h3>
      <p>arjunthalachathodi07@gmail.com</p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start">
    <div className="bg-yellow-500 p-3 rounded-lg mr-4">
      <FontAwesomeIcon icon={faPhone} className="text-black text-xl" />
    </div>
    <div>
      <h3 className="font-bold">Phone</h3>
      <p>+91 7559989801</p>
    </div>
  </div>
</div>


              <div className="mt-10">
                <h3 className="font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/arjun-t-8624632a4/"
                    className="bg-yellow-500 p-3 rounded-full hover:bg-blue-400 transition-colors text-white"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a
                    href="https://github.com/Arjunthalachathodi"
                    className="bg-yellow-500 p-3 rounded-full hover:bg-blue-400 transition-colors text-white" // Added text-white
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a
                    href="#"
                    className="bg-yellow-500 p-3 rounded-full hover:bg-blue-400 transition-colors text-white"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              <form onSubmit={sendMessageToWhatsApp}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Me Here</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.299070597963!2d76.06717331480405!3d11.051428892134506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64de4096dd7cf%3A0xb49a5b8f6d6d2d6c!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710412345678"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
