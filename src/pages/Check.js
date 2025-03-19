import React, { useState } from "react";
import axios from "axios";
import { FaRobot, FaUserMd, FaHeartbeat, FaStethoscope } from "react-icons/fa";

const Check = () => {
  const [symptom, setSymptom] = useState("");
  const [chat, setChat] = useState([
    { sender: "bot", message: "👋 Hi! I'm your AI Health Assistant. Tell me your symptoms to get guidance." },
  ]);

  // Replace with your DeepSeek API Key stored in .env
  const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY;

  const handleSend = async () => {
    if (symptom.trim() === "") return;

    const updatedChat = [...chat, { sender: "user", message: symptom }];
    setChat(updatedChat);

    try {
      const response = await axios.post(
        "https://api.deepseek.com/chat/completions",
        {
          model: "deepseek-chat",   // DeepSeek model
          messages: [
            { role: "system", content: "You are a professional health assistant. Provide simple, clear health tips based on symptoms." },
            { role: "user", content: `I have ${symptom}. Please suggest health tips.` }
          ],
          max_tokens: 200,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setChat((prev) => [...prev, { sender: "bot", message: aiResponse }]);
    } catch (error) {
      console.error("DeepSeek AI API Error:", error);
      setChat((prev) => [
        ...prev,
        { sender: "bot", message: "⚠️ Failed to fetch AI response. Please try again later." },
      ]);
    }

    setSymptom("");
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-center fw-bold mb-4 text-primary animate__animated animate__fadeInDown">
        <FaRobot className="me-2" /> AI Symptom Checker
      </h2>

      <div className="alert alert-info text-center shadow-sm mb-4">
        <FaHeartbeat className="me-2 text-danger" />
        Type your symptoms and get AI-driven health suggestions instantly!
      </div>

      <div className="chat-box p-3 bg-white rounded shadow mb-4" style={{ height: "400px", overflowY: "auto" }}>
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded ${
              msg.sender === "bot" ? "bg-light text-dark" : "bg-primary text-white text-end"
            }`}
          >
            {msg.sender === "bot" ? <FaRobot className="me-2" /> : <FaUserMd className="me-2" />}
            {msg.message}
          </div>
        ))}
      </div>

      <div className="input-group shadow">
        <input
          type="text"
          className="form-control p-3"
          placeholder="Describe your symptom... e.g., headache, fever"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-info text-white fw-bold px-4" onClick={handleSend}>
          Send
        </button>
      </div>

      <div className="mt-4 p-4 bg-white rounded shadow-sm">
        <h5 className="text-success fw-bold">
          <FaStethoscope className="me-2" /> Why Use AI Health Chat?
        </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Get instant basic health tips</li>
          <li className="list-group-item">✅ AI suggests remedies and care ideas</li>
          <li className="list-group-item">✅ Helpful when doctors aren't available</li>
        </ul>
      </div>

      <div className="alert alert-warning mt-4 shadow-sm">
        ⚠️ <strong>Note:</strong> This AI assistant provides general suggestions only. Always consult a healthcare professional for serious health issues.
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success fw-bold px-5 py-3 rounded-pill shadow-lg">
          Explore More Health Tools 🔎
        </button>
      </div>
    </div>
  );
};

export default Check;
