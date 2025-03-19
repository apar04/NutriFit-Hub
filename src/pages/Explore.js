import React from "react";

const Explore= () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1976d2" }}>
        Explore Advanced Gym Workouts 🏋️‍♂️
      </h2>

      <p className="text-center fs-5 text-muted mb-5">
        Take your fitness journey to the next level with cutting-edge training techniques designed to maximize strength, endurance, and muscle growth.
      </p>

      <div className="row g-4">
        {/* Progressive Overload */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow h-100" style={{ backgroundColor: "#f5f5f5" }}>
            <h4 className="fw-bold text-primary">🔥 Progressive Overload</h4>
            <p className="text-muted">
              A fundamental principle of advanced gym training where you gradually increase the weight, reps, or intensity to consistently challenge your muscles and promote continuous growth.
            </p>
          </div>
        </div>

        {/* Supersets & Drop Sets */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow h-100" style={{ backgroundColor: "#f9f9f9" }}>
            <h4 className="fw-bold text-primary">💪 Supersets & Drop Sets</h4>
            <p className="text-muted">
              Intensify your workout by performing two exercises back-to-back (Supersets) or reducing weights in quick succession (Drop Sets) to increase muscle fatigue and improve endurance.
            </p>
          </div>
        </div>

        {/* HIIT & Functional Training */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow h-100" style={{ backgroundColor: "#f5f5f5" }}>
            <h4 className="fw-bold text-primary">⚡ HIIT & Functional Training</h4>
            <p className="text-muted">
              High-Intensity Interval Training (HIIT) combined with functional movements helps burn fat rapidly, improve agility, and strengthen your core for better daily performance.
            </p>
          </div>
        </div>

        {/* Mind-Muscle Connection */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow h-100" style={{ backgroundColor: "#f9f9f9" }}>
            <h4 className="fw-bold text-primary">🧠 Mind-Muscle Connection</h4>
            <p className="text-muted">
              Focus on feeling every muscle contraction during each rep. This technique improves exercise effectiveness, boosts muscle activation, and enhances your form.
            </p>
          </div>
        </div>

        {/* Advanced Recovery Techniques */}
        <div className="col-md-12">
          <div className="p-4 rounded shadow h-100" style={{ backgroundColor: "#e3f2fd" }}>
            <h4 className="fw-bold text-primary">🛠️ Advanced Recovery Techniques</h4>
            <p className="text-muted">
              Recovery is equally important as training. Utilize foam rolling, deep tissue massage, cryotherapy, and proper nutrition to reduce muscle soreness and prevent injuries.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 p-4 rounded shadow" style={{ backgroundColor: "#f0f8ff" }}>
        <h5 className="fw-bold">Ready to Level Up? 🚀</h5>
        <p className="text-muted">
          Start your advanced gym training with <strong>NutriFit-Hub</strong> and unlock your full potential!
        </p>
      </div>
    </div>
  );
};

export default Explore;
