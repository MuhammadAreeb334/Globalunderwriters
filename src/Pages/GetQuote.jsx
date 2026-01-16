import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./GetQuote.css";

const InputField = ({ label, type = "text", value, onChange, ...props }) => (
  <div className="input-container">
    <label className="labels">{label}</label>
    <input type={type} value={value} onChange={onChange} {...props} />
  </div>
);

const GetQuote = () => {
  const initialState = {
    name: "",
    corporation: "",
    state: "",
    phone: "",
    businessType: "",
    insuranceCompany: "",
    currentPremium: "",
    email: "",
    city: "",
    zip: "",
    fax: "",
    hours: "",
    expirationDate: "",
    hasClaims: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormData(initialState);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="getQuote-section">
      <div className="getquoteheader">
        <h1>Get a Quote</h1>
        <p>Tell us what you are looking for</p>
      </div>

      <form onSubmit={sendEmail}>
        <div className="quote-form-container">
          <div className="quote-form-left-container">
            <InputField
              label="Enter Your Name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter Corporation's Name"
              name="corporation"
              placeholder="Corporation Name"
              value={formData.corporation}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter State"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter Phone #"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
            />

            <InputField
              label="Enter Type of Your Business"
              name="businessType"
              placeholder="Business Type"
              value={formData.businessType}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter Your Current Insurance Company"
              name="insuranceCompany"
              placeholder="Current Insurance Company"
              value={formData.insuranceCompany}
              onChange={handleChange}
            />

            <InputField
              label="Enter Current Premium"
              name="currentPremium"
              type="number"
              placeholder="Current Premium"
              step="0.01"
              min="0"
              value={formData.currentPremium}
              onChange={handleChange}
            />
          </div>

          <div className="quote-form-right-container">
            <InputField
              label="Enter Your Email Address"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter City"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter Zip Code"
              name="zip"
              placeholder="Zip Code"
              pattern="[0-9]{5}(-[0-9]{4})?"
              value={formData.zip}
              onChange={handleChange}
              required
            />

            <InputField
              label="Enter Fax #"
              name="fax"
              type="tel"
              placeholder="Fax Number"
              pattern="[0-9]{10}"
              value={formData.fax}
              onChange={handleChange}
            />

            <InputField
              label="Enter Hours of Operation"
              name="hours"
              type="number"
              placeholder="Hours of Operation"
              value={formData.hours}
              onChange={handleChange}
            />

            <InputField
              label="Enter Expiration Date"
              name="expirationDate"
              type="date"
              value={formData.expirationDate}
              onChange={handleChange}
            />

            <div className="input-container">
              <label className="labels">Do You Have Claims or Losses?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasClaims"
                    value="yes"
                    checked={formData.hasClaims === "yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name="hasClaims"
                    value="no"
                    checked={formData.hasClaims === "no"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-submit">
          <button type="submit" disabled={loading}>
            {loading ? "Submiting" : "Submit Quote"}
          </button>
          {status === "success" && (
            <p className="success-message">
              Your quote request has been sent successfully!
            </p>
          )}
          
          {status === "error" && (
            <p className="error-message">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default GetQuote;
