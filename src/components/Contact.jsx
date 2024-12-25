import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </div>
      <div className="social-links">
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
