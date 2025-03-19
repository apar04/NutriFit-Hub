import React, { useState } from "react";

const Calculate = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmiResult, setBmiResult] = useState("");
  const [calorieResult, setCalorieResult] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeter = height / 100;
      const bmi = weight / (heightInMeter * heightInMeter);
      let category = "";

      if (bmi < 18.5) category = "Underweight";
      else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
      else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
      else category = "Obese";

      setBmiResult(`Your BMI is ${bmi.toFixed(2)} (${category})`);
    } else {
      setBmiResult("⚠️ Please enter valid weight and height.");
    }
  };

  const calculateCalories = () => {
    if (weight && height && age) {
      let bmr = 0;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      setCalorieResult(`🔥 Your estimated daily calorie needs: ${Math.round(bmr)} kcal`);
    } else {
      setCalorieResult("⚠️ Please fill in all fields for calorie calculation.");
    }
  };

  return (
    <div className="container mt-5 p-5 rounded shadow-lg bg-light">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1976d2", letterSpacing: "1px" }}>
        ⚖️ BMI & Calorie Calculator
      </h2>

      <p className="text-center text-muted fs-5 mb-5">
        Keep track of your health by calculating your <span className="fw-bold">Body Mass Index (BMI)</span> and daily <span className="fw-bold">calorie needs</span> for a balanced diet and fitness goals. Stay Fit. Stay Healthy! 💪
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Weight (kg):</label>
          <input
            type="number"
            className="form-control border-primary shadow-sm"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Eg: 70"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Height (cm):</label>
          <input
            type="number"
            className="form-control border-primary shadow-sm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Eg: 170"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Age:</label>
          <input
            type="number"
            className="form-control border-primary shadow-sm"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Eg: 25"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Gender:</label>
          <select
            className="form-select border-primary shadow-sm"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male 🚹</option>
            <option value="female">Female 🚺</option>
          </select>
        </div>
      </div>

      <div className="text-center mt-5">
        <button
          className="btn btn-primary  px-5 py-2 shadow-sm rounded-pill"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        <button
          className="btn btn-success px-5 py-2  mt-4 shadow-sm rounded-pill"
          onClick={calculateCalories}
        >
          Calculate Calories
        </button>
      </div>

      {/* Results */}
      {bmiResult && (
        <div className="alert alert-info mt-5 fw-semibold text-center" role="alert">
          {bmiResult}
        </div>
      )}
      {calorieResult && (
        <div className="alert alert-warning mt-3 fw-semibold text-center" role="alert">
          {calorieResult}
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-5 text-center">
        <p className="text-muted">
          📝 <strong>Note:</strong> A BMI between <span className="text-success">18.5 - 24.9</span> is considered
          healthy. Calorie needs vary based on your activity level and fitness goals.
        </p>
      </div>
    </div>
  );
};

export default Calculate;
