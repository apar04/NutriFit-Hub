import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    paymentMethod: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("User registered:", formData);

    navigate("/login");
  };

  return (
    <div
      className="register-section py-5"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-8 p-5 shadow-lg"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              className="text-center mb-4"
              style={{
                color: "#1976d2",
                fontWeight: "bold",
                fontSize: "32px",
              }}
            >
              Create Your Account
            </h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-pill"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-pill"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    name="contact"
                    className="form-control rounded-pill"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Fee Payment Method</label>
                  <select
                    name="paymentMethod"
                    className="form-select rounded-pill"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="PhonePe">PhonePe</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    required
                    style={{ borderRadius: "15px" }}
                  ></textarea>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-pill"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control rounded-pill"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn w-100 mt-3"
                style={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  padding: "14px",
                  fontSize: "18px",
                  letterSpacing: "1px",
                }}
              >
                Register
              </button>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <a href="/login" style={{ color: "#1976d2", fontWeight: "600" }}>
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
