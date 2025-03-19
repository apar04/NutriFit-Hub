import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 style={{ color: "#1976d2", fontWeight: "bold" }}>
          About <span style={{ color: "#00bcd4" }}>NutriFit</span>-Hub 🍏
        </h2>
        <p style={{ color: "#555", fontSize: "1.1rem" }}>
          Your ultimate partner for a healthier lifestyle!
        </p>
      </div>

      {/* Mission */}
      <section className="mb-5 p-3" style={{ background: "#e3f2fd" }}>
        <h4 style={{ color: "#1976d2" }}>Our Mission</h4>
        <p style={{ color: "#555" }}>
          At <strong>NutriFit-Hub</strong>, our mission is to empower individuals to achieve
          their health and fitness goals with expert guidance, balanced nutrition, and smart technology.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-5 p-3" style={{ background: "#f9f9f9" }}>
        <h4 style={{ color: "#1976d2" }}>Our Vision</h4>
        <p style={{ color: "#555" }}>
          To become the leading digital health and fitness platform, inspiring millions
          to adopt a healthier lifestyle with community support and cutting-edge technology.
        </p>
      </section>

      {/* Future Plans */}
      <section className="mb-5 p-3" style={{ background: "#e3f2fd" }}>
        <h4 style={{ color: "#1976d2" }}>Our Future Plans</h4>
        <ul style={{ color: "#555" }}>
          <li>📱 Launching our Mobile App</li>
          <li>🧑‍⚕️ Virtual Consultations with Experts</li>
          <li>🤖 AI-based Health Risk Prediction</li>
          <li>🏋️ Collaborations with Clinics & Gyms</li>
          <li>🏃 Organizing Health Camps & Events</li>
        </ul>
      </section>

      {/* Branch Locations */}
      <section className="mb-5 p-3" style={{ background: "#f9f9f9" }}>
        <h4 style={{ color: "#1976d2" }}>Our Branch Locations</h4>
        <p style={{ color: "#555" }}>We are available in these cities:</p>
        <ul style={{ color: "#555" }}>
          <li>🏢 Chennai - Main Branch</li>
          <li>🏢 Bangalore - Fitness & Wellness Center</li>
          <li>🏢 Hyderabad - Nutrition Counseling Hub</li>
          <li>🏢 Coimbatore - Community Health Center</li>
          <li>🏢 Coming Soon: Mumbai & Delhi</li>
        </ul>
      </section>

      {/* What We Offer */}
      <section className="mb-5 p-3" style={{ background: "#e3f2fd" }}>
        <h4 style={{ color: "#1976d2" }}>What We Offer</h4>
        <ul style={{ color: "#555" }}>
          <li>✅ Customized Diet Plans & Nutrition Guidance</li>
          <li>✅ AI-Powered Symptom Checker</li>
          <li>✅ Workout Routines for All Levels</li>
          <li>✅ Mental Wellness Resources</li>
          <li>✅ BMI & Calorie Calculators</li>
          <li>✅ Certified Health Professionals</li>
        </ul>
      </section>

      {/* Join Us */}
      <div className="text-center mt-5 p-3" style={{  color: "black" }}>
        <h5>Join NutriFit-Hub Today!</h5>
        <p>
          Take the first step toward a healthier, happier life. Let's make wellness a lifestyle together!
        </p>
      </div>
    </div>
  );
};

export default About;
