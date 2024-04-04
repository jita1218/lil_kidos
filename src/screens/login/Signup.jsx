// import React, { useState } from "react";
// import "./login.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../Firebase.js";
// import { useEffect } from "react";

// const Signup = () => {

//   const [user, loading] = useAuthState(auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [UserName , setUserName] = useState("");
//   const [rePassword, setRePassword] = useState(""); 

//   useEffect(() => {
//     if (user) {
//       console.log("/");
//     } else {
//       console.log("login");
//     }
//   }, [user]);
//   const handleSignup = (e) => {
//     e.preventDefault();
  
//     if (password !== rePassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//   };


//   if (loading) return <h1>Hey, you are Beautiful</h1>;

//   return (
//     <div className="login">
//       <div className="login_content">
//         <h1 className="text">Let's Dream and learn</h1>
//       </div>

//       <div className="login__container">
//         <h1>Sign-Up</h1>

//         <form>
//           <h5>UserName</h5>
//           <input
//             type="text"
//             value={UserName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <h5>Re-enter Password</h5>
//           <input
//             type="password"
//             value={rePassword}
//             onChange={(e) => setRePassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             onClick={handleSignup} 
//             className="login__signInButton"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import "./login.css";
import { auth } from "../../Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { addDoc, collection } from 'firebase/firestore';

// Import db reference from Firebase configuration file
import { db } from '../../Firebase'; 
import "./ProfileDisplay.jsx"

const Signup = () => {

  const [user, loading] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName , setUserName] = useState("");
  const [rePassword, setRePassword] = useState(""); 

  useEffect(() => {
    if (user) {
      console.log("/");
    } else {
      console.log("login");
    }
  }, [user]);

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      if (response.user) {
        // Save profile details to Firestore
        await addDoc(collection(db, "profiles"), {
          userId: response.user.uid,
          userName: userName,
          email: email
        });
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle error, display error message to the user
    }
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
            value={userName}
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
