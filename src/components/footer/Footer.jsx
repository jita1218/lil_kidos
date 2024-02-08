import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Imag from "./dreamkids.png";

const Footer = () => {
  return (
    <footer>
      <div className="contact_container">
        {/* <h5>
          All of our content is created and curated by early childhood educators
          and experts, ensuring it aligns with the developmental needs and
          interests of young children.
        </h5>
        <h5>
          
          Our platform offers interactive activities and games that complement
          our rhyme videos, providing hands-on learning experiences that keep
          kids actively engaged and eager to learn.
        </h5> */}
        <h2 className="log"><img src={Imag} alt='logo' ></img></h2>
        {/* <h2>Contact Us</h2> */}

        <div className="contact_icons">
          <link rel="stylesheet" href="" />
          <FaFacebook />
          <link rel="stylesheet" href="" />
          <FaInstagram />
          <link rel="stylesheet" href="" />
          <FaGithub />
          <link rel="stylesheet" href="" />
          <FaFacebook />
        </div>
      </div>
      <div className="inform_us">
        <div className="inform">
          <h4 className="tex">Images</h4>
          <ul>
            <li>Alphabates</li>
          </ul>
          <ul>
            <li>Letters</li>
          </ul>
          <ul>
            <li>Words</li>
          </ul>
        </div>
        <div className="inform">
          <h4 className="tex">Videos</h4>
          <ul>
            <li>Rhymes</li>
          </ul>
          <ul>
            <li>Dance</li>
          </ul>
          <ul>
            <li>Animal</li>
          </ul>
          <ul>
            <li>Plants</li>
          </ul>
        </div>
        <div className="inform">
                   <h4 className="tex"> Learning</h4>

          <ul>
            <li>Letters</li>
          </ul>
          <ul>
            <li>Rhymes</li>
          </ul>
          <ul>
            <li> by watching</li>
          </ul>
        </div>
        <div className="inform">
                   <h4 className="tex"> Watching</h4>

          <ul>
            <li>learning while watching</li>
          </ul>
          <ul>
            <li>understanding </li>
          </ul>
          <ul>
            <li>imaging</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
