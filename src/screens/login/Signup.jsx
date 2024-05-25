import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase.js";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [rePassword, setRePassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate('/'); 
      alert("already have an account")// Redirect to home page if user is logged in
    }
  }, [user, navigate]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        alert("Your ID card is created, You are now logged in");
        navigate('/'); // Redirect to home page after successful signup
      })
      .catch((error) => {
        console.log(error.message);
        alert("Failed to create account");
      });
  };


  if (loading) return <h1>Hey, you are Beautiful</h1>;

  return (
    <div className="login">

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

        <h3>Already have an account? <Link to="/login">Sign In</Link></h3>
      </div>
    </div>
  );
};

export default Signup;
