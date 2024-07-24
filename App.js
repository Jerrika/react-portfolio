// Import necessary React libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./src/components/Header";
import About from './src/components/About';
import Portfolio from './src/components/Portfolio';
import Contact from './src/components/Contact';
import Resume from './src/components/Resume';
import Footer from './src/components/Footer';

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/Jerrika/react-portfolio" element={<About />} />
            {/* <Route path="/Jerrika/react-portfolio/home" element={<Home />} /> */}
            <Route path="/Jerrika/react-portfolio/about" element={<About />} />
            <Route path="/Jerrika/react-portfolio/portfolio" element={<Portfolio />} />
            <Route path="/Jerrika/react-portfolio/contact" element={<Contact />} />
            <Route path="/Jerrika/react-portfolioresume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;

