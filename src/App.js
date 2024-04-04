import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Ima from "./components/image_Api/Ima";
import Image from "./screens/Image";
import "./App.css";
import { Video } from "./screens/Video";
// import Login from "./screens/login/Login";
// import Signup from "./screens/login/Signup"
import Footer from "./components/footer/Footer";
import Apiheader from "./screens/Apiheader/Apiheader";
import About from "./components/about/About";
import Us from "./components/us/Us";


const App = () => {
  return (
    
    <Router>
      <div className="App">
       <Routes>
       {/* <Route path="/login" element={
          <>
          <Login/>
          </>
        }></Route> */}

{/* <Route path="/Signup" element={<Signup />} /> */}

        
        <Route path="/" element={
          <>
          <Header />
          <Ima />
          <About/>
          <Us/>
             <Footer/>
          </>
        } ></Route>
        <Route path="/image" element={
          <>
          <Image/>
          </>
        } ></Route>

<Route path="/video" element={
          <>
          <Apiheader />
            <Video/>
           </>
        } ></Route>
       
       

<Route path="/home" element={
          <>
          <Header />
         <Ima/>
            <Footer/>
          </>
        } ></Route> 
      </Routes>
      </div>
    </Router>
   
    
  );
};

export default App;

