import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaComments, FaHeart, FaThumbsUp, FaStethoscope } from "react-icons/fa";
const Community = () => {
     const navigate = useNavigate();
     const handleJoin = () => {
        navigate("/join");
      };
    
  return (
    <div className="container mt-5 p-4 rounded shadow">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1976d2" }}>
        🌐 Community <span style={{ color: "#00bcd4" }}>Forum</span>
      </h2>

      <p className="text-center text-muted fs-5 mb-5">
        Engage with fellow fitness enthusiasts and experts. Share your journey, get advice, and stay motivated together! 💬💪
      </p>

      <div className="row g-4">
        {/* Fitness Tips Discussion */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#f1f8ff" }}>
            <h4 className="fw-bold text-primary">
              <FaComments className="me-2" /> Fitness Tips & Discussions
            </h4>
            <p className="text-muted">
              Share your workout routines, diet tips, and fitness experiences. Learn from others and exchange expert advice.
            </p>
            <button className="btn btn-outline-primary btn-sm" >Join Discussion</button>
          </div>
        </div>

        {/* Motivation & Transformation */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#fff3e0" }}>
            <h4 className="fw-bold text-warning">
              <FaHeart className="me-2" /> Motivation & Transformations
            </h4>
            <p className="text-muted">
              Stay inspired by real transformation stories. Share your achievements and motivate others on their journey!
            </p>
            <button className="btn btn-outline-warning btn-sm">Get Inspired</button>
          </div>
        </div>

        {/* Expert Q&A */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#e8f5e9" }}>
            <h4 className="fw-bold text-success">
              <FaStethoscope className="me-2" /> Expert Q&A Sessions
            </h4>
            <p className="text-muted">
              Have questions? Connect with certified fitness experts, nutritionists, and health coaches. Get your queries answered!
            </p>
            <button className="btn btn-outline-success btn-sm">Ask Now</button>
          </div>
        </div>

        {/* Like & Support */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#fce4ec" }}>
            <h4 className="fw-bold text-danger">
              <FaThumbsUp className="me-2" /> Support & Encourage
            </h4>
            <p className="text-muted">
              Spread positivity! Like, support, and encourage others in the community to keep pushing forward. ❤️
            </p>
            <button className="btn btn-outline-danger btn-sm">Send Support</button>
          </div>
        </div>
      </div>

      {/* Join Community CTA */}
      <div className="text-center mt-5 p-4 rounded shadow-lg" style={{ backgroundColor: "#e3f2fd" }}>
        <h4 className="fw-bold">Ready to Join Our Vibrant Community?</h4>
        <p className="fs-5">Be a part of <span className="fw-bold">NutriFit-Hub</span> and connect with like-minded fitness lovers!</p>
        <button className="btn btn-primary btn-sm" onClick={()=> navigate('/register')}>Join Community</button>
      </div>
    </div>
  );
};

export default Community;
