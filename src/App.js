import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Learnmore from "./pages/Learnmore";
import Viewplan from "./pages/Viewplan";
import Startworkout from "./pages/Startworkout";
import Explore from "./pages/Explore";
import Check from "./pages/Check";
import Community from "./pages/Community";
import Learn from "./pages/Learn";
import Calculate from "./pages/Calculate";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewplan" element={<Viewplan />} />
        <Route path="/startwork" element={<Startworkout />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/check" element={<Check />} />
        <Route path="/join" element={<Community />} />
        <Route path="/now" element={<Learn />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
