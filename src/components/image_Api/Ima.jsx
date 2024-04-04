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
      <h4 className="para">
            Welcome to Dream Kids - Where Learning Begins with Fun!
             </h4>
        <div className="lines">
          <h4 className="para"> Dream Kids is an engaging online platform designed specifically for
            nursery-aged children, providing a delightful learning experience
            through interactive activities, captivating alphabets, and catchy
            rhymes.</h4>
             
          
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
