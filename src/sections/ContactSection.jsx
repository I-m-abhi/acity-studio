import { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import SocialMedia from "../components/SocialMedia";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      userName: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsFormSubmit(true);
    setTimeout(() => {
      setIsFormSubmit(false)
    }, 2000)
  }

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="heading">Get in touch with us. We are always here to help you...</h2>
        <div className="grid grid-two--col">
          <div className="contact-details" data-aos="fade-up">
            <div className="details">
              <p><IoLocation /></p>
              <p>Acity Studio <br />
                C-2207, Coco County <br />
                Greater Noida, UP, 201301 <br />
                (Visit by Appointment Only)
              </p>
            </div>
            <div className="details">
              <p><MdMarkEmailUnread /></p>
              <p>core@acitystudio.in</p>
            </div>
            <div className="details">
              <p><FaPhone /></p>
              <p> +91 9205001994</p>
            </div>
            <SocialMedia />
          </div>
          <div className="contact-form" data-aos="fade-up">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="name">Name*</label><br />
                <input
                  onChange={handleInputChange}
                  value={formData.userName}
                  type="text"
                  name="userName"
                  id="name"
                  required
                  autoComplete="true"
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email*</label><br />
                <input
                  onChange={handleInputChange}
                  value={formData.email}
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="true"
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone*</label><br />
                <input
                  onChange={handleInputChange}
                  value={formData.phone}
                  type="number"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="true"
                />
              </div>
              <div className="input-field">
                <label htmlFor="message">Message*</label><br />
                <textarea
                  onChange={handleInputChange}
                  value={formData.message}
                  name="message"
                  id="message"
                  placeholder="Start writing your query..."
                  required>
                </textarea>
              </div>
              <div>
                <button style={{ marginTop: "2.4rem" }} className="btn" type="submit">Submit Now</button>
                {isFormSubmit ? <p className="heading">Form submitted succesfully</p> : ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactSection;