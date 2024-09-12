import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import "../Assets/Styles/Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState(''); // Message for success or error
  const [isError, setIsError] = useState(false); // To track success or failure
  const form = useRef();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    sr.reveal('.featured-text-card');
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    srLeft.reveal('.contact-info', { delay: 100 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    srRight.reveal('.form-control', { delay: 100 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pemg09h', 'template_oine5ib', form.current, 'Qdaeshb9m5SbHAvuC')
      .then(
        () => {
          setStatusMessage('Your message was sent successfully!');
          setIsError(false); // Indicates success
        },
        (error) => {
          setStatusMessage('Failed to send, please try again.');
          setIsError(true); // Indicates error
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email: sundarakrishna10@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i> Tel: (+91)9489003910
            </p>
          </div>
        </div>
        <div className="col">
          <form className="form-control" ref={form} onSubmit={sendEmail}>
            <div className="form-inputs">
              <input
                type="text"
                className="input-field"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="email"
                className="input-field"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
            <div className="text-area">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-button">
              <button className="btn" type="submit">
                Send <i className="uil uil-message"></i>
              </button>
            </div>
            {/* Status Message */}
            {statusMessage && (
              <p className={`status-message ${isError ? 'error' : 'success'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
