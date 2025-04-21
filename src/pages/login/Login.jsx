import "./Login.scss";
import bg from "../../imgs/sign.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  let { loginWithEmail } = useLogin();
  function sign() {
    navigate("/register");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    if (password.length < 8) {
      toast.error("Parol kamida 8 ta belgidan iborat bo‘lishi kerak");
      return;
    }

    await loginWithEmail(email, password);
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
          <h1>Login</h1>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Create Password</label>
          <div className="password-wrapper">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <button type="submit">Login</button>

          <p className="login-text">
            Need to create an account?<a onClick={sign}>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
