import './App.css';
import React from "react";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Footer from "./components/Footer.jsx";
import ContactNavbar from './components/NavBar.jsx';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans">
      <ContactNavbar/>
      <Header />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;
