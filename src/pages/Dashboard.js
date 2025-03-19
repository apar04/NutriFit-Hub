import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4">Welcome to NutriFit-Hub Dashboard</h2>
      <p className="text-center text-muted mb-5">
        Manage your health, track your progress, and unlock your wellness journey with NutriFit-Hub 🌿
      </p>

      <div className="row g-4">
        {/* Card 1 - Diet Plan */}
        <div className="col-sm-6 col-lg-4">
          <div className="card shadow-lg rounded h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success">🍽 Personalized Diet Plan</h5>
              <p className="card-text">Discover meal plans crafted to meet your health and fitness goals.</p>
              <button 
                className="btn btn-primary btn-sm d-block mx-auto w-50 mt-auto" 
                onClick={() => navigate('/viewplan')}
              >
                View Plans
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Workout Routines */}
        <div className="col-sm-6 col-lg-4">
          <div className="card shadow-lg rounded h-100"> 
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-danger">🏋️ Workout Routines</h5>
              <p className="card-text">Access fitness routines designed for all levels and goals.</p>
              <button 
                className="btn btn-success btn-sm d-block mx-auto w-50 mt-auto" 
                onClick={() => navigate('/startwork')}
              >
                Start Workout
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - AI Symptom Checker */}
        <div className="col-sm-6 col-lg-4">
          <div className="card shadow-lg rounded h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-warning">🤖 AI Symptom Checker</h5>
              <p className="card-text">Instant health insights powered by AI to guide you better.</p>
              <button 
                className="btn btn-warning btn-sm d-block mx-auto w-50 mt-auto" 
                onClick={() => navigate('/check')}
              >
                Check Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 - Community Forum */}
        <div className="col-sm-6 col-lg-4">
          <div className="card shadow-lg rounded h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-info">💬 Community Forum</h5>
              <p className="card-text">Engage with fitness enthusiasts and experts to stay motivated.</p>
              <button 
                className="btn btn-info btn-sm d-block mx-auto w-50 mt-auto" 
                onClick={() => navigate('/join')}
              >
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 - Mental Wellness */}
        <div className="col-sm-6 col-lg-4">
          <div className="card shadow-lg rounded h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-secondary">🧘 Mental Wellness</h5>
              <p className="card-text">Explore mindfulness, meditation, and stress management tips.</p>
              <button 
                className="btn btn-secondary btn-sm d-block mx-auto w-50 mt-auto" 
                onClick={() => navigate('/now')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Card 6 - Health Calculators */}
        <div className="col-sm-6 col-lg-4">
          <div className="card shadow-lg rounded h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-dark">📊 BMI & Calorie Calculator</h5>
              <p className="card-text">Analyze your BMI and calories to maintain a balanced diet.</p>
              <button 
                className="btn btn-dark btn-sm d-block mx-auto w-50 mt-auto" 
                onClick={() => navigate('/calculate')}
              >
                Calculate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5 p-4 rounded shadow" style={{ color: "black" }}>
        <h5>Ready to Transform Your Health?</h5>
        <p>Start your journey with NutriFit-Hub and unlock your healthiest version today! 🌟</p>
        <Link to="/register" className="btn btn-light btn-sm d-block mx-auto w-50">Join Now</Link>
      </div>
    </div>
  );
};

export default Dashboard;
