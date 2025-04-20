import "./Signup.scss";
import bg from "../../imgs/sign.png";
import { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Signup() {
  let [name, setName] = useState("");
  const [password, setPassword] = useState();
  const [email, setEmail] = useState("");
  async function register(e) {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('muvafaqiyatlik !!')
    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
    <div className="wrapper">
      <div className="login-block">
        <div className="left">
          <img src={bg} alt="" />
          <h3>finance</h3>
          <p className="left-track">
            Keep track of your money and save for your future
          </p>
          <p className="left-p">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>

        <form className="signup-form">
          <h1>Sign Up</h1>

          <label>Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />

          <label>Create Password</label>
          <div className="password-wrapper">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <p className="password-tip">
            Passwords must be at least 8 characters
          </p>

          <button onClick={register} type="submit">
            Create Account
          </button>

          <p className="login-text">
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
