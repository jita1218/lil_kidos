import React from "react";
import "./ima.css";
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
          <p className="para">
            {" "}
            Dream Kids is an online platform tailored for nursery-aged children,
            offering an enjoyable learning experience through interactive
            activities, engaging alphabets, and fun rhymes.
          </p>
        </div>
        <div className="butn">
          <button className="butn_icon" onClick={clickHandler}>
            <h2>let's study</h2>
          </button>
        </div>
      </div>

      <div className="right">
        <div className="image">
        </div>
      </div>
    </div>
  );
};

export default Ima;
