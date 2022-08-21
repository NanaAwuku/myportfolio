import React from "react";
import Resume from "../../assets/Resume.pdf"

function CTA() {
  return (
    <div className="cta">
      <a href={Resume} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary ">
        Contact Me Now
      </a>
    </div>
  );
}

export default CTA;
