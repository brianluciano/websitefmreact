import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="contact-section">
      <h1>Interested</h1>
      <h2>Let's connect</h2>
      <form className="form">
        <div className="id">
          <div className="">
            <input
              placeholder="Name"  
              type="text"
              name="name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="double_rows"
            />
          </div>
          <div className="">
            <input
              placeholder="Email" 
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="double_rows"
            />
          </div>
          <div className="">
    
            <input
              placeholder="Phone" 
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="double_rows"
            />
          </div>
          <div className="">
            <input
              placeholder="Company" 
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="double_rows"
            />
          </div>
          </div>

        <div className="subject">
          <textarea
            placeholder="Message" 
            name="subject"
            value={formData.email}
            onChange={handleInputChange}
            className="subject_row"
          />
        </div>
        
        <div className="button">
          <input type="submit" 
          name="btn_submit"
          className="submit_btn"
          value="SEND MESSAGE" />
        </div>
        
      </form>
    </section>
  );
}

export default ContactSection;
