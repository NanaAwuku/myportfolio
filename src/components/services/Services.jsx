import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3> Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing a professional website for ICGC church in Accra.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing Professional Websites for Fots international School in Accra- Ghana.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing a freestyle website for a night club in Accra called Blueprint Lounge.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing a professional website for Royal Kingdom Company based in Accra 
              </p>
            </li>
           
          </ul>
        </article>
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing a Royal Kingdom website with Figma
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing my Portfolio Website with Figma
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Besigning Blueprint Lounge website with Figma
              </p>
            </li>
           
            
          </ul>
        </article>
        <article className="service">
          <div className="services__head">
            <h3>System Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Assisting in Developing a school Management System for Royal Kingdom Company in Accra
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Assisting in developing a school Management System for Fots International School in Accra, Ghana.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Assisting in developing a Placement System for Ghana Education Service in Accra, Ghana.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
