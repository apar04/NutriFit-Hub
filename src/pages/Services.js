import React from "react";
import { useNavigate } from "react-router-dom";
const Services = () => {
    const navigate = useNavigate();
  const sectionStyle = {
    backgroundImage: "url('service-bg.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    padding: "60px 20px",
    color: "black",
    borderRadius: "20px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "50px",
    borderRadius: "20px",
    color: "#333", // Optional: ensure dark text color for readability
  };
  

  const headingStyle = {
    color: "#1976d2", // Primary color
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "30px",
  };

  const buttonStyle = {
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    borderRadius: "30px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={sectionStyle}>
      <div style={overlayStyle}>
        <h2 className="text-center fw-bold mb-4" style={headingStyle}>
          🌿 Our Premium Services
        </h2>

        <p className="text-center fs-5 mb-5">
          At <span className="fw-bold" style={{ color: "#1976d2" }}>NutriFit-Hub</span>, we merge health, fitness, and wellness. Explore our expert-driven services designed to elevate your fitness journey.
        </p>

        <div>
          <h4 style={headingStyle}>🤖 AI Symptom Checker</h4>
          <p style={paragraphStyle}>
            Instantly get AI-powered health insights by describing your symptoms. Our intelligent system guides you with possible conditions and advice.
          </p>

          <h4 style={headingStyle}>🥗 Personalized Diet Plans</h4>
          <p style={paragraphStyle}>
            Tailored meal plans designed by experts based on your goals, preferences, and health needs to fuel your body right.
          </p>

          <h4 style={headingStyle}>🏋️ Workout Programs</h4>
          <p style={paragraphStyle}>
            Structured workouts for weight loss, muscle gain, or general fitness, designed for all levels with video support.
          </p>

          <h4 style={headingStyle}>🧠 Mental Wellness & Meditation</h4>
          <p style={paragraphStyle}>
            Relieve stress and improve mindfulness with guided meditation, breathing exercises, and expert mental wellness tips.
          </p>

          <h4 style={headingStyle}>📊 BMI & Calorie Calculator</h4>
          <p style={paragraphStyle}>
            Calculate your BMI and daily calorie needs to stay on track with your health and fitness goals.
          </p>

          <h4 style={headingStyle}>👩‍⚕️ Expert Consultations</h4>
          <p style={paragraphStyle}>
            Book 1-on-1 sessions with certified nutritionists and fitness trainers for personalized health coaching.
          </p>

          <div className="text-center mt-5">
            <p className="fs-5 fw-semibold" style={{ color: "#1976d2" }}>
              🌱 Ready to transform your health? Join <span className="fw-bold">NutriFit-Hub</span> today!
            </p>
            <button className="btn btn-outline-primary btn-sm mt-3" onClick={() => navigate('/register')}>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
