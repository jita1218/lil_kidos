import React from "react";
import "./ima.css";
import image from "./image.png";
import { useNavigate } from "react-router-dom";

const Ima = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/Signup");
    alert("wanna signup");
  };

  return (
    <div className="image_container">
      <div className="left">
        <div className="lines">
          <h4 className="para">
          Explore our collection of image galleries and flashcards designed to
          introduce children to new words, concepts, and ideas in a visually
          appealing and memorable way.
          </h4>
          <h4 className="para"> Get ready to sing, dance, and rhyme your
          way to learning success! Our collection of catchy rhyme videos covers
          a wide range of topics, from the alphabet and numbers to colors,
          shapes, and beyond.</h4>
        </div>
        <div className="butn">
          <button className="butn_icon" onClick={clickHandler}>
            <h2>let's study</h2>
          </button>
        </div>
      </div>

      <div className="right">
        <div className="image">
          <img src={image} className="kido_image" alt="kido" />
        </div>
      </div>
    </div>
  );
};

export default Ima;
