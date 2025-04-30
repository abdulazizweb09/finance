import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import style from "./Budgets.module.scss";
import Chart from "../../components/chart/Chart";
import { useCollectionsData } from "../../hooks/data";
function Budgets() {
  let { data } = useCollectionsData();
  let navigate = useNavigate();
  function regiser() {
    navigate("/register");
  }
  console.log(data);

  return (
    <div className={style.home}>
      <Sidebar test={"budgets"} />
      <div className={style.container}>
        <div className={style.flex}>
          <p>Budgets</p>
          <button>+ Add New Budget</button>
        </div>
        <div className={style.warpper}>
          <div className={style.left}>
            <div>{data && <Chart budgets={data?.budgets} />}</div>
            <p className={style.spend}>Spending Summary</p>
            <div>
              {data &&
                data.budgets.map((value, index) => {
                  return (
                    <div className={style.card} key={index}>
                      <div
                        className={style.col}
                        style={{ backgroundColor: value.theme }}
                      ></div>
                      <p>{value.category}</p>
                      <h3 className={style.price}>${value.maximum}</h3>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={style.right}>
            {data && data.budgets.map((value, index) => {
              return (
                <div key={index} className={style.cardsFlex}>
                  <p style={{backgroundColor:value.theme}} className={style.color}></p>
                  <h3>{value.category}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budgets;
