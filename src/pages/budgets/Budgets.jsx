import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import style from "./Budgets.module.scss";
function Budgets() {
  let navigate = useNavigate();
  function regiser() {
    navigate("/register");
  }
  return (
    <div className={style.home}>
      <Sidebar test={"budgets"} />
      <div className={style.container}>
        <div className={style.flex}>
          <p>Budgets</p>
          <button>+ Add New Budget</button>
        </div>
      </div>
    </div>
  );
}

export default Budgets;
