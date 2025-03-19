import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assests/home-image.avif";
 
 
 // Update with the correct image path

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        {/* Left Side Content */}
        <div className="col-md-6 mt-4">
        <h1 style={{ fontWeight: "700", color: "#1976d2" }}>
            Welcome to <span style={{ color: "#00bcd4" }}>NutriFit-Hub</span>
          </h1>
          <p className="lead">
            Your one-stop platform for personalized health tips, diet plans, and fitness routines. 
            Stay fit, eat healthy, and achieve your wellness goals with NutriFit-Hub.
          </p>
          <Link to="/register" className="btn btn-primary me-2">Get Started</Link>
          <Link to="/learnmore" className="btn btn-outline-secondary">Learn More</Link>
        </div>

        {/* Right Side Image */}
        <div className="col-md-6 mt-4 text-center">
          <img src={homeImage} alt="Healthy Lifestyle" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Home;
