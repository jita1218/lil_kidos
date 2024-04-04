import React from "react";
import "./about.css";
import img from "./boy.png";

const About = () => {
  return (
    <div className="about">
      <div className="lef">
        <img src={img} className="kido_image" alt="kido" />
      </div>

      <div className="righ">
      <h4 className="para">
          Dream Kids is more than just an educational website;
          </h4>

         <h4 className="para">
          it's a digital
          playground where little learners embark on exciting adventures through
          the world of letters and melodies.</h4>  <h4 className="para">With our carefully crafted content,
          children explore the alphabet in a playful environment, immerse
          themselves in delightful rhymes, and discover the joy of learning in
          every click. From A to Z, Dream Kids is where education meets
          entertainment, nurturing young minds while they have a blast!</h4> 
        </div>
      
    </div>
  );
};

export default About;
