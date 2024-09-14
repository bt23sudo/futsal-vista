import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/HomePage';
import AboutUs from './Components/About';
import Teams from './Components/Teams';
import Contact from './Components/Contact';
import Image from './Assets/Untitled_design__5_-removebg-preview (2).png';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white p-4 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo */}
              <img src={Image} alt="Logo" className="h-12 w-12 mr-2" />
              {/* Website Name */}
              <div className="text-xl font-bold text-white">Futsal Vista</div>
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="text-white font-bold hover:text-purple-500 transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white font-bold hover:text-purple-500 transition duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/teams" 
                  className="text-white font-bold hover:text-purple-500 transition duration-300 ease-in-out"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white font-bold hover:text-purple-500 transition duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* Main Content */}
        <main className="flex-grow bg-black pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white p-4 text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
