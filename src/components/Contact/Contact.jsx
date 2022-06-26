import React from "react";
import "./Contact.css";
import { SiGmail, SiMessenger, SiSkype } from "react-icons/si";

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
            <a href="mailto:ashish7347@gmail.com">Send an e-mail</a>
          </article>

          <article className="contact__option">
            <SiMessenger />
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
            <SiSkype />
            <h4>Skype</h4>
            <h5>ashish7347</h5>
            <a
              href="https://join.skype.com/invite/yApaeI1vgreD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skype me
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
