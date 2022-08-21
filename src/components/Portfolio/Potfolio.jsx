import React from "react";
import "./portfolio.css";
import specs from "../../assets/images/specs.jpeg";
import icgc from "../../assets/images/icgc.jpg";
import blue from "../../assets/images/blue.png";
import task from "../../assets/images/task.png";
import tours from "../../assets/images/tours.jpg";
import school from "../../assets/images/school.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={tours} alt=""  />
          </div>
          <h3>Tours project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NanaAwuku/tours-project" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://twitter.com/Nana_Awuku24/"
              target="_blank"
              className="btn btn-primary"
            >
              Twitter
            </a>
          </div>
        </article>
       
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={icgc} alt="" />
          </div>
          <h3>This is a website for ICGC branch in Matheiko, Accra.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NanaAwuku/icgcc" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://twitter.com/Nana_Awuku24/"
              target="_blank"
              className="btn btn-primary"
            >
              Twitter
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={task} alt="" />
          </div>
          <h3>Task Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NanaAwuku/task-tracker" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://twitter.com/Nana_Awuku24/"
              target="_blank"
              className="btn btn-primary"
            >
              Twitter
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={school} alt="" />
          </div>
          <h3>School Management System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NanaAwuku/school-management-system" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://twitter.com/NanaAwuku24"
              target="_blank"
              className="btn btn-primary"
            >
              Twitter
            </a>
          </div>
        </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={blue} alt="" />
          </div>
          <h3>Blueprint Lounge Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NanaAwuku/blueprintlounge" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://twitter.com/Nana_Awuku24/"
              target="_blank"
              className="btn btn-primary"
            >
              Twitter
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
