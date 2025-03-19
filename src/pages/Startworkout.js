import React from "react";
import {Link, useNavigate } from 'react-router-dom';
const Startworkout = () => {
    const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#1976d2" }}>
        Ready to Sweat with <span style={{ color: "#00bcd4" }}>NutriFit</span>-Hub? 💪
      </h2>

      <p className="text-center mb-5 text-muted fs-5">
        Start your workout journey now! Whether you're a beginner or a pro, our workouts are designed to 
        keep you fit, active, and motivated every day!
      </p>

      <div className="row g-4">
        {/* Cardio */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div
            className="p-4 rounded shadow-lg text-center h-100"
            style={{ background: "linear-gradient(to bottom right, #ffe0b2, #fff3e0)", borderTop: "5px solid #ff9800" }}
          >
            <h4 className="fw-bold text-dark">🏃‍♂️ Cardio Blast</h4>
            <p className="text-muted">Burn calories and improve endurance with high-energy cardio sessions.</p>
            <ul className="list-unstyled text-start text-muted">
              <li className="mb-2">✅ Jumping Jacks</li>
              <li className="mb-2">✅ Burpees</li>
              <li className="mb-2">✅ Mountain Climbers</li>
              <li className="mb-2">✅ High Knees</li>
            </ul>
            <button className="btn btn-outline-dark btn-sm mt-3" onClick={() => navigate('/register')} >Start Now</button>
          </div>
        </div>

        {/* Strength */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div
            className="p-4 rounded shadow-lg text-center h-100"
            style={{ background: "linear-gradient(to bottom right, #c8e6c9, #e8f5e9)", borderTop: "5px solid #4caf50" }}
          >
            <h4 className="fw-bold text-dark">🏋️ Strength Training</h4>
            <p className="text-muted">Build muscle and strength with guided exercises for all levels.</p>
            <ul className="list-unstyled text-start text-muted">
              <li className="mb-2">✅ Push-ups & Pull-ups</li>
              <li className="mb-2">✅ Dumbbell Workouts</li>
              <li className="mb-2">✅ Resistance Band Sets</li>
              <li className="mb-2">✅ Full Body Toning</li>
            </ul>
            <button className="btn btn-outline-dark btn-sm mt-3" onClick={() => navigate('/register')}>Start Now</button>
          </div>
        </div>

        {/* Yoga & Flexibility */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div
            className="p-4 rounded shadow-lg text-center h-100"
            style={{ background: "linear-gradient(to bottom right, #b3e5fc, #e1f5fe)", borderTop: "5px solid #03a9f4" }}
          >
            <h4 className="fw-bold text-dark">🧘 Yoga & Flexibility</h4>
            <p className="text-muted">Calm your mind and improve flexibility with yoga sessions.</p>
            <ul className="list-unstyled text-start text-muted">
              <li className="mb-2">✅ Sun Salutation (Surya Namaskar)</li>
              <li className="mb-2">✅ Breathing Exercises</li>
              <li className="mb-2">✅ Stretching Routine</li>
              <li className="mb-2">✅ Relaxation Techniques</li>
            </ul>
            <button className="btn btn-outline-dark btn-sm mt-3" onClick={() => navigate('/register')}>Start Now</button>
          </div>
        </div>
      </div>

      {/* Motivational CTA */}
      <div className="text-center mt-5 p-4 rounded shadow-lg" style={{ color: "black" }}>
        <h4 className="fw-bold">Your Journey to Fitness Starts Here!</h4>
        <p className="fs-5">Pick your workout and let's get moving! Remember, consistency is the key. 💪🔥</p>
        <button className="btn btn-light btn-sm" onClick={()=>navigate('/explore')}>Explore More Workouts</button>
      </div>
    </div>
  );
};

export default Startworkout;
