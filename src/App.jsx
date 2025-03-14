import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './component/navbar';
import Footer from './component/footer';
import HomePage from './pages/home';
import About from './pages/about';
import Projects from './pages/project';  
import Contact from './pages/contactpage';

// Main App Component
function App() {
    return (
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
  