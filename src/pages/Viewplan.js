import React from "react";
import {Link, useNavigate } from 'react-router-dom';
const Viewplan = () => {
      const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#1976d2" }}>
        Explore <span style={{ color: "#00bcd4" }}>NutriFit</span>-Hub Plans 📝
      </h2>

      <p className="text-center mb-5 text-muted fs-5">
        Choose the perfect plan designed by our experts to achieve your fitness goals and stay motivated every day!
      </p>

      <div className="row g-4">
        {/* Basic Plan */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div
            className="p-4 rounded shadow-lg text-center h-100"
            style={{
              background: "linear-gradient(to bottom right, #e3f2fd, #ffffff)",
              borderTop: "5px solid #1976d2"
            }}
          >
            <h4 className="fw-bold text-primary">🥗 Basic Plan</h4>
            <p className="text-muted">Perfect for beginners starting their fitness journey.</p>
            <ul className="list-unstyled text-muted text-start">
              <li className="mb-2">✅ Personalized Diet Chart</li>
              <li className="mb-2">✅ Beginner Workouts</li>
              <li className="mb-2">✅ Weekly Progress Check</li>
              <li className="mb-2">✅ Health Tips</li>
            </ul>
            <h5 className="mt-3 text-info fw-bold">₹499/month</h5>
            <button className="btn btn-outline-primary btn-sm mt-3" onClick={() => navigate('/register')}>Get Started</button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div
            className="p-4 rounded shadow-lg text-center h-100"
            style={{
              background: "linear-gradient(to bottom right, #f9f9f9, #e3f2fd)",
              borderTop: "5px solid #00bcd4"
            }}
          >
            <h4 className="fw-bold text-primary">💪 Standard Plan</h4>
            <p className="text-muted">Great for fitness lovers seeking balanced nutrition & workouts.</p>
            <ul className="list-unstyled text-muted text-start">
              <li className="mb-2">✅ Advanced Diet Plans</li>
              <li className="mb-2">✅ Daily Workout Routine</li>
              <li className="mb-2">✅ AI Symptom Checker</li>
              <li className="mb-2">✅ Monthly Health Analysis</li>
            </ul>
            <h5 className="mt-3 text-info fw-bold">₹999/month</h5>
            <button className="btn btn-outline-primary btn-sm mt-3" onClick={() => navigate('/register')}>Get Started</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div
            className="p-4 rounded shadow-lg text-center h-100"
            style={{
              background: "linear-gradient(to bottom right, #e3f2fd, #ffffff)",
              borderTop: "5px solid #ff9800"
            }}
          >
            <h4 className="fw-bold text-primary">🌟 Premium Plan</h4>
            <p className="text-muted">Perfect for dedicated fitness enthusiasts who want expert guidance.</p>
            <ul className="list-unstyled text-muted text-start">
              <li className="mb-2">✅ Full Nutrition & Fitness Guide</li>
              <li className="mb-2">✅ 1-on-1 Consultation</li>
              <li className="mb-2">✅ Mental Wellness & Yoga</li>
              <li className="mb-2">✅ All Tools & Calculators Access</li>
            </ul>
            <h5 className="mt-3 text-info fw-bold">₹1499/month</h5>
            <button className="btn btn-outline-primary btn-sm mt-3" onClick={() => navigate('/register')}>Get Started</button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5 p-4 rounded shadow-lg" style={{  color: "black" }}>
        <h4 className="fw-bold">Ready to Transform Your Health?</h4>
        <p className="fs-5">Join <span className="fw-bold">NutriFit-Hub</span> today and unlock your personalized fitness journey! 💪🍏</p>
        <button className="btn btn-light btn-sm" onClick={() => navigate('/register')}>Join Now</button>
      </div>
    </div>
  );
};

export default Viewplan;
