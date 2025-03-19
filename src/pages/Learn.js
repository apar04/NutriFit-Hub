import React from "react";
import { FaSpa, FaBrain, FaHeart, FaLeaf, FaSmile, FaBookOpen, FaCloudSun } from "react-icons/fa";

const Learn = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1976d2" }}>
        🌿 Mental Wellness & Mindfulness Guide
      </h2>
      <p className="text-center text-muted fs-5 mb-5">
        Discover powerful techniques and knowledge to strengthen your mental health, manage stress, and live a balanced life.
      </p>

      <div className="row g-4">
        {/* Mindfulness */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#e3f2fd" }}>
            <FaBrain size={40} className="text-primary mb-3" />
            <h4 className="fw-bold text-primary">Mindfulness Practice</h4>
            <p className="text-muted">
              Mindfulness means focusing on the present moment without judgment. Practice daily with mindful breathing, mindful eating, and nature walks.
            </p>
            <ul className="text-muted small">
              <li>✨ 5-Minute Morning Mindfulness</li>
              <li>✨ Body Scan Relaxation</li>
              <li>✨ Gratitude Journaling</li>
            </ul>
          </div>
        </div>

        {/* Meditation */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#f9f9f9" }}>
            <FaSpa size={40} className="text-success mb-3" />
            <h4 className="fw-bold text-success">Meditation Techniques</h4>
            <p className="text-muted">
              Meditation improves clarity, reduces stress, and promotes emotional balance. Start with guided meditations or breathing exercises.
            </p>
            <ul className="text-muted small">
              <li>🧘‍♂️ Guided Meditation Apps</li>
              <li>🧘 Box Breathing (4-4-4-4)</li>
              <li>🧘 Visualization Exercises</li>
            </ul>
          </div>
        </div>

        {/* Stress Management */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#fff3e0" }}>
            <FaHeart size={40} className="text-danger mb-3" />
            <h4 className="fw-bold text-danger">Stress Management</h4>
            <p className="text-muted">
              Learn to cope with stress by avoiding emotional bottling. Use music, journaling, and creative hobbies to stay calm.
            </p>
            <ul className="text-muted small">
              <li>🎵 Music & Art Therapy</li>
              <li>📔 Emotional Journaling</li>
              <li>🌿 Nature Walks</li>
            </ul>
          </div>
        </div>

        {/* Yoga & Breathing */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#ede7f6" }}>
            <FaLeaf size={40} className="text-purple mb-3" />
            <h4 className="fw-bold" style={{ color: "#6a1b9a" }}>Yoga & Breathing</h4>
            <p className="text-muted">
              Yoga enhances flexibility and mental calmness. Combine with breathing exercises like pranayama for full relaxation.
            </p>
            <ul className="text-muted small">
              <li>🧘‍♀️ Surya Namaskar</li>
              <li>💨 Alternate Nostril Breathing</li>
              <li>🕉️ Chanting & Mantras</li>
            </ul>
          </div>
        </div>

        {/* Positive Affirmations */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#e8f5e9" }}>
            <FaSmile size={40} className="text-success mb-3" />
            <h4 className="fw-bold text-success">Positive Affirmations</h4>
            <p className="text-muted">
              Daily affirmations help build confidence and reduce negative thoughts. Repeat positive statements every morning.
            </p>
            <ul className="text-muted small">
              <li>🌟 "I am calm and in control."</li>
              <li>🌟 "I attract positivity."</li>
              <li>🌟 "I am grateful for today."</li>
            </ul>
          </div>
        </div>

        {/* Books & Learning */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#f1f8e9" }}>
            <FaBookOpen size={40} className="text-warning mb-3" />
            <h4 className="fw-bold text-warning">Books to Read</h4>
            <p className="text-muted">
              Explore these books to strengthen mental resilience:
            </p>
            <ul className="text-muted small">
              <li>📖 "The Power of Now"</li>
              <li>📖 "Atomic Habits"</li>
              <li>📖 "The Untethered Soul"</li>
            </ul>
          </div>
        </div>

        {/* Self-care & Sunlight */}
        <div className="col-md-6 col-lg-4">
          <div className="p-4 rounded shadow-sm h-100" style={{ background: "#fffde7" }}>
            <FaCloudSun size={40} className="text-warning mb-3" />
            <h4 className="fw-bold text-warning">Self-Care & Sunlight</h4>
            <p className="text-muted">
              Morning walks, staying hydrated, and sun exposure boost Vitamin D and uplift mood naturally.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5 p-4 rounded shadow-lg" style={{ background: "#e3f2fd" }}>
        <h4 className="fw-bold">🌸 Start Your Mental Wellness Journey</h4>
        <p className="fs-5 text-muted">Empower your mind with NutriFit-Hub’s expert resources.</p>
        <button className="btn btn-primary px-4">Explore More Tips</button>
      </div>
    </div>
  );
};

export default Learn;
