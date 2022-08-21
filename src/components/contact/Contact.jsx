import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_cb7v4de', 'template_8wx5n8q', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //   }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>apatrickadjei@gmail.com</h5>
            <a href="mailto:apatrickadjei@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <a href="https://twitter.com/NanaAwuku23" target="_blank">
              Follow Me on Twitter
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+233209144589</h5>
            <a
              href="https://api.whatsapp.com/send?=+233209144589"
              target="_blank"
            >
              Let's Chat
            </a>
          </article>
        </div>
        <form >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your FullName"
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
