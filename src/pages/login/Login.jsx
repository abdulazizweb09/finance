import "./Login.scss";
import bg from "../../imgs/sign.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRegister } from "../../hooks/useRegister";

function Login() {
  let [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { registerWithEmail } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    if (password.length < 8) {
      toast.error("Parol kamida 8 ta belgidan iborat bo‘lishi kerak");
      return;
    }

    await registerWithEmail(name,  password);
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

          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
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

          <p className="login-text">
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
