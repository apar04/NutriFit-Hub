import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 p-4 rounded shadow bg-light">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1976d2" }}>
        📞 Get in Touch with <span className="text-success">NutriFit Hub</span>
      </h2>
      <p className="text-center text-muted fs-5 mb-5">
        We're here to assist you on your health journey! Contact us for support, suggestions, or collaboration.
      </p>

      <div className="row g-5">
        {/* Left - Contact Details with Icons */}
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
            alt="Contact Us"
            className="img-fluid rounded mb-4 shadow"
          />

          <h4 className="fw-bold text-primary">📍 Address</h4>
          <p>NutriFit Hub, 123 Wellness Street,<br /> Health City, Fitland - 54321</p>

          <h4 className="fw-bold text-primary">📧 Email</h4>
          <p>support@nutrifithub.com</p>

          <h4 className="fw-bold text-primary">📞 Phone</h4>
          <p>+91 98765 43210</p>
        </div>

        {/* Right - Contact Form */}
        <div className="col-lg-6">
          <h4 className="fw-bold text-primary mb-3">📝 Send us a Message</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <h4 className="fw-bold text-primary mb-3">🌍 Find Us on Map</h4>
        <div className="ratio ratio-16x9 rounded shadow">
          <iframe
            title="NutriFit Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.524231041577!2d106.70042307592708!3d10.771354059246286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4163ef7a4d%3A0x730b0a50a6b92238!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1645605264440!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
