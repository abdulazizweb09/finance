import styles from "./Sidebar.module.scss";
import hom from "../../imgs/home.svg";
import inter from "../../imgs/inter.svg";
import bud from "../../imgs/bud.svg";
import collect from "../../imgs/collect.svg";
import chek from "../../imgs/chek.svg";
import { useNavigate } from "react-router-dom";

function Sidebar({ test }) {
  let navigate=useNavigate()
  function home() {
    navigate('/')
  }
  function post() {
    navigate('/pots')
  }
  function tra() {
    navigate('/transactions')
  }
  function budget() {
    navigate('/budget')
  }
  function bill() {
    navigate('/bills')
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>finance</div>

      <div className={styles.menu}>
        <div
          onClick={home}
          className={test == "overview" ? styles.alt : styles.menuItem}
        >
          <img src={hom} alt="" />
          <span>Overview</span>
        </div>

        <div
          onClick={tra}
          className={test == "transactions" ? styles.alt : styles.menuItem}
        >
          <img src={inter} alt="" />
          <span>Transactions</span>
        </div>

        <div
          onClick={budget}
          className={test == "budgets" ? styles.alt : styles.menuItem}
        >
          <img src={bud} alt="" />
          <span>Budgets</span>
        </div>

        <div onClick={post} className={test == "pots" ? styles.alt : styles.menuItem}>
          <img src={collect} alt="" />
          <span>Pots</span>
        </div>

        <div onClick={bill} className={test === "bills" ? styles.alt : styles.menuItem}>
          <img src={chek} alt="" />
          <span>Recurring bills</span>
        </div>
      </div>

      <div className={styles.minimize}>
        <span>Minimize Menu</span>
      </div>
    </div>
  );
}

export default Sidebar;
