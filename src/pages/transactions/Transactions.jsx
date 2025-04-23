import transactions from"./Transactions.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import search from "../../imgs/search.svg"
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 

function Transactions() {
  let [data,setData]=useState([]);
  useEffect(function() {
    let fetchData = async () => {
      let t = await getDocs(collection(db, 'transactions'))
      let dat = t.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dat);
    }
    fetchData()

  }, [])
    console.log(data); 

  
  return (
    <div className={transactions.parent}>
      <Sidebar test={"transactions"} />
      <div className={transactions.container}>
        <h2 className={transactions.logo}>Transactions</h2>
        <div className={transactions.concet}>
          <div className={transactions.filter}>
            <input type="text" placeholder="Search transaction" />
            <img src={search} className={transactions.search} alt="" />
            <p className={transactions.sort}>Sort by</p>
            <select className={transactions.sorts}>
              <option value="lates">Lates</option>
              <option value="lates">Lates</option>
              <option value="lates">Lates</option>
            </select>
            <p className={transactions.category}>Category</p>
            <select className={transactions.sorts}>
              <option value="">All Transactions</option>
              <option value="">All Transactions</option>
            </select>
          </div>
          <div className={transactions.sender}>
            <p className={transactions.send}>Recipient / Sender</p>
            <p className={transactions.cat}>Category</p>
            <p className={transactions.date}>Transaction Date</p>
            <p className={transactions.amount}>Amount</p>
          </div>
          <div className={transactions.card}>
            {data.length > 0 &&
              data.map((value, index) => {
                return (
                  <div key={index}>
                    <div className={transactions.cards}>
                      <img src="https://picsum.photos/40/40" alt="" />
                      <p className={transactions.name}>{value.name}</p>
                      <p className={transactions.category}>{value.category}</p>
                      <p className={transactions.date}>{value.date}</p>
                      <p
                        className={`${transactions.amount} ${
                          parseFloat(value.amount) < 0
                            ? transactions.red
                            : transactions.green
                        }`}
                      >
                        {value.amount} { ' '}$
                      </p>
                    </div>
                    <div className={transactions.tiziq}></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions