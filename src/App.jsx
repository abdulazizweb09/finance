import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Budgets from "./pages/budgets/Budgets.jsx";
import Transactions from "./pages/transactions/Transactions.jsx";
import Post from "./pages/post/Post.jsx";
import RecurringBills from "./pages/recurringBills/RecurringBills.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { add, remuv } from "./hooks/setUser.js";
import { toast } from "react-toastify";

function App() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(add(user));
      } else {
        dispatch(remuv());
        toast.error("Foydalanuvchi tizimdan chiqqan");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budgets />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/pots" element={<Post />} />
        <Route path="/bills" element={<RecurringBills />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
