import React from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail />
            <h4>Gmail</h4>
            <h5>ashish7347@gmail.com</h5>
            <a href="mailto:ashish7347@gmail.com">Send a mail</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
