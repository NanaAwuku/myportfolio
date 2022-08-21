import React from "react";
import "./about.css";
import NEWPIC from "../../assets/images/NEWPIC.jpeg";
import specs from "../../assets/images/specs.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={NEWPIC} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects </h5>
              <small>10+</small>
            </article>
          </div>

          <p>
             I am a software developer in Accra, Ghana. I love to create simple yet
          beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. 
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
