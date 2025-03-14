import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Arjun T</a>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

