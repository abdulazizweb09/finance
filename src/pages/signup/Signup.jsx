import "./Signup.scss";
import bg from "../../imgs/sign.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";

function Signup() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let { registerWithGoogle, registerWithEmail } = useRegister();

  function login() {
    navigate("/login");
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    if (password.length < 8) {
      toast.error("Parol kamida 8 ta belgidan iborat bo‘lishi kerak");
      return;
    }

    await registerWithEmail(name, email, password);
  };

  return (
    <div className="wrapper">
      <div className="login-block">
        <div className="left">
          <img src={bg} alt="" />
          <h3>Finance</h3>
          <p className="left-track">
            Keep track of your money and save for your future
          </p>
          <p className="left-p">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Create Password</label>
          <div className="password-wrapper">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <p className="password-tip">
            Passwords must be at least 8 characters
          </p>

          <button type="submit">Create Account</button>

          <button
            type="button"
            className="google-button"
            onClick={registerWithGoogle}
          >
            Continue with Google
          </button>

          <p className="login-text">
            Already have an account? <a onClick={login}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
