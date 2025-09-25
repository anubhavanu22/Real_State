
// src/components/InquiryForm.jsx
import { useState } from "react";
import "../App.css";
 function InquiryForm({ propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Inquiry:", formData);
  };

  if (submitted) {
    return (
      <p style={{ color: "green" }}>
        ✅ Thanks for your inquiry about <b>{propertyTitle}</b>!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>📩 Inquire about this property</h4>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
export default InquiryForm