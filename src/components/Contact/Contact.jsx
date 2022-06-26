import React from "react";
import "./Contact.css";
import { SiGmail, SiMessenger } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import { ImSkype } from "react-icons/im";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 id="contact__heading">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <h5>ashish7347@gmail.com</h5>

            <a
              href="mailto:ashish7347@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send an e-mail
            </a>
          </article>

          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>ashish141994</h5>

            <a
              href="https://m.me/ashish141994/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <ImSkype className="contact__option-icon" />
            <h4>Skype</h4>
            <h5>ashish7347@gmail.com</h5>

            <a
              href="https://join.skype.com/invite/yApaeI1vgreD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="name" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="btn btn-primary">Hire Me</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
