// import React, { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
  
// } from "firebase/auth";
// import "./login.css";
// import"./Login.jsx";
// // import { auth } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../Firebase.js";
// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
// //   const userIsInactive = useFakeInactiveUser();

// //   useEffect(() => {
// //     if (userIsInactive) {
// //       fake.logout();
// //       navigate("/session-timed-out");
// //     }
// //   }, [userIsInactive]);

//   const [user, loading] = useAuthState(auth);
//   // const googleProvider = new GoogleAuthProvider();

//   // const GoogleLogin = async () => {
//   //   try {
//   //     const result = await signInWithPopup(auth, googleProvider);
//   //     console.log(result.user);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

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

//   const Signup = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((auth) => {
//         // Signed in
//         console.log(auth);
//         alert("You got your ID card");
//         // ...
//       })
//       .catch((error) => {
//         console.log(error.message);
//         alert("ID is mismatching, wrong mail or password");
//         // ..
//       });
//   };

//   // from here
//   const register = (e) => {
//     e.preventDefault(); 

//     if (password !== rePassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((auth) => {
//         // Signed in
//         console.log(auth);
//         alert("Your ID card is created, You are now logged in"); // ...
//       })
//       .catch((error) => {
//         console.log(error.message);
//         alert(
//           "type your email and password on the boxes above, then click sign up"
//         );
//         // ..
//       });
//   };
//   // to here

//   if (loading) return <h1>Hey, you are Beautiful</h1>;

//   return (
//     <div className="login">
//       {/* <Link to="/">
//         {/* <img className="login__logo" src={LOGU} alt="" />  */}
//       {/* </Link>  */}
//       <div className="login_content">
//         <h1 className="text">
//           Let's Dream and learn
//         </h1>
//       </div>

//       <div className="login__container">
//         <h1>Sign-Up</h1>

//         {/* <button onClick={GoogleLogin} className="login__registerButton-google">
//           Sign in with Google
//           <div className="google__icon">
//             <FcGoogle />
//           </div>
//         </button> */}
//         {/* <small>or</small> */}

//         <form>
//         <h5>UserName</h5>
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
//            <h5>Re-enter Password</h5>
//           <input
//             type="password"
//             value={rePassword}
//             onChange={(e) => setRePassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             onClick={() => navigate('/')} 
//                        className="login__signInButton"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* <small>Don't have an account ! click sign out</small>
//         <button onClick={register} className="login__registerButton">
//           Sign Up
//         </button> */}


//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
// import"./Login.jsx"; // Remove this line if not used
// import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase.js";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const handleSignup = (e) => { // Renamed from Signup to handleSignup
    e.preventDefault();

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        alert("Your ID card is created, You are now logged in");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Failed to create account");
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
            onClick={handleSignup} // Changed to call handleSignup
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
