import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import style from"./home.module.scss";
function Home() {
  let navigate = useNavigate();
  function regiser() {
    navigate("/register");
  }
  return (
    <div className={style.home}>
      <Sidebar test={'overview'} />
      
    </div>
  );
}

export default Home;
