import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { add, setloading } from "./hooks/setUser.js";

function App() {
  // let dispatch = useDispatch();
  // let navigate = useNavigate();
  // const { user } = useSelector((state) => state.user);
  // let auth = getAuth();
  // useEffect(function() {
  // if (!user) {
  //   navigate("/login");
  // }    
  // },[])
  // useEffect(() => {
  //   dispatch(setloading(true));

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(add(user));
  //       // navigate("/");
  //     } else {
  //       dispatch(remuv());
  //       toast.error("User Already Sign Out");
  //       navigate("/login");
  //     }
  //     dispatch(setloading(false));
  //   });
  // }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
