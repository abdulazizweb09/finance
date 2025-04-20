import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    function regiser() {
navigate("/register")
    }
  return (
      <div>Home
          <button onClick={regiser}>register</button>
    </div>
  )
}

export default Home