import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
// import"./Login.jsx"; // Remove this line if not used
// import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserName , setUserName] = useState("");
  const [rePassword, setRePassword] = useState(""); 

  useEffect(() => {
    if (user) {
      console.log("/");
    } else {
      console.log("login");
    }
  }, [user]);
  const handleSignup = (e) => {
    e.preventDefault();
  
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up successfully:", user);
        alert("Your account has been created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        alert("Failed to create account: " + error.message);
      });
  };


  if (loading) return <h1>Hey, you are Beautiful</h1>;

  return (
    <div className="login">
      <div className="login_content">
        <h1 className="text">Let's Dream and learn</h1>
      </div>

      <div className="login__container">
        <h1>Sign-Up</h1>

        <form>
          <h5>UserName</h5>
          <input
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Re-enter Password</h5>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSignup} 
            className="login__signInButton"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
