import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import "./ProfileDisplay.jsx"
import { db } from "../../Firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./login.css";
// import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [userProfile, setUserProfile] = useState(null);

  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
    navigate("/");

  };
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (user) {
      console.log("/");
    } else {
      console.log("login");
    }
  }, [user]);

  const signIn = (e) => {
    e.preventDefault();

    try {
      // const authUser = await signInWithEmailAndPassword(auth, email, password);
      signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        console.log(auth);
        alert("You got your ID card");
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        alert("ID is mismatching, wrong mail or password");
        // ..
      });
      // Fetch user profile data from Firestore
      const profileQuery = query(
        collection(db, "profiles"),
        where("userId", "==", authUser.user.uid)
      );
      // const profileSnapshot = await getDocs(profileQuery);
      
      if (!profileSnapshot.empty) {
        // User profile found
        setUserProfile(profileSnapshot.docs[0].data());
      } else {
        // User profile not found
        setUserProfile(null);
      }
    } catch (error) {
      console.log(error.message);
      // Handle login error
    }

   
  };

  if (loading) return <h1>Hey, you are Beautiful</h1>;

  return (
    <div className="login">
     
      <div className="login_content">
        <h1 className="text">
          Let's Dream and Learn
        </h1>
      </div>

      <div className="login__container">
        <h1 >Sign-in</h1>

        <button onClick={GoogleLogin} className="login__registerButton-google">
          Sign in with Google
          <div className="google__icon">
            <FcGoogle />
          </div>
        </button>
        <small>or</small>
        <form className="form">
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
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <small>Don't have an account ! click sign up</small>
        <button
          onClick={() => navigate("/Signup")}
          className="login__registerButton"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
