import React from "react";

const LearnMore = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#1976d2", fontWeight: "bold" }}>
        Know Nutri<span style={{ color: "#00bcd4" }}>Fit</span>-Hub 🍏
      </h2>

      <p className="lead text-center mb-5" style={{ color: "#555" }}>
        Your ultimate health companion! We believe a healthy lifestyle is the key to happiness and success.
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <div
            className="p-4 feature-section"
            style={{
              background: "linear-gradient(135deg, #e3f2fd, #f9f9f9)",
              borderLeft: "6px solid #1976d2",
              borderRadius: "15px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 style={{ color: "#1976d2", fontWeight: "bold" }}>Personalized Diet Plans</h4>
            <p style={{ color: "#555" }}>
              Get expert-crafted diet plans tailored to your fitness goals, whether it's weight loss,
              muscle gain, or healthy living. Our plans focus on balanced nutrition and portion control.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="p-4 feature-section"
            style={{
              background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
              borderLeft: "6px solid #00bcd4",
              borderRadius: "15px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 style={{ color: "#1976d2", fontWeight: "bold" }}>Fitness Routines</h4>
            <p style={{ color: "#555" }}>
              Explore various fitness programs ranging from beginner workouts to advanced routines.
              Whether it's yoga, cardio, or strength training, we’ve got you covered!
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="p-4 feature-section"
            style={{
              background: "linear-gradient(135deg, #e3f2fd, #f9f9f9)",
              borderLeft: "6px solid #1976d2",
              borderRadius: "15px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 style={{ color: "#1976d2", fontWeight: "bold" }}>Health Tips & Guidance</h4>
            <p style={{ color: "#555" }}>
              Stay updated with daily health tips, wellness articles, and expert advice. We ensure you’re
              always informed and motivated on your health journey.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="p-4 feature-section"
            style={{
              background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
              borderLeft: "6px solid #00bcd4",
              borderRadius: "15px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 style={{ color: "#1976d2", fontWeight: "bold" }}>AI-powered Symptom Checker</h4>
            <p style={{ color: "#555" }}>
              Use our AI-powered symptom checker to get preliminary health insights and understand your body better.
              Early detection helps prevent major health issues.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 style={{ color: "#1976d2", fontWeight: "bold" }}>Join NutriFit-Hub Today!</h4>
        <p style={{ color: "#555" }}>
          Start your fitness journey with us and unlock a healthier, happier version of yourself.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
