import transactions from"./Transactions.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";

function Transactions() {
  return (
    <div className={transactions.parent}>
      <Sidebar test={"transactions"} />
      <div className={transactions.container}>
        <h2 className={transactions.logo}>Transactions</h2>
      </div>
    </div>
  );
}

export default Transactions