import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’re here to help. Reach out to one of our offices below or send us a
          message, and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-grid">
        
        <div className="contact-card">
          <h2>Georgia Office</h2>
          <p><strong>Address:</strong> 1825 Locke Way Drive, Suite #205, Alpharetta, GA 30004</p>
          <p><strong>Phone:</strong> 770-242-9429</p>
          <p><strong>Fax:</strong> 770-242-9431</p>
        </div>

        <div className="contact-card">
          <h2>Florida Office</h2>
          <p><strong>Address:</strong> 5373 N Nob Hill Road, Sunrise, FL 33351</p>
          <p><strong>Phone:</strong> 954-572-0299</p>
          <p><strong>Fax:</strong> 954-735-8889</p>
        </div>

        <div className="contact-card">
          <h2>Texas Office</h2>
          <p><strong>Address:</strong> 8610 N. Lamar, Suite #103, Austin, TX 78753</p>
          <p><strong>Phone:</strong> 954-572-0299</p>
          <p><strong>Fax:</strong> 770-242-9431</p>
        </div>
      </div>

      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
