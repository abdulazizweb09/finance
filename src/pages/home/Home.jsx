import { collection } from "firebase/firestore";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from"./home.module.scss";
import { getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { useCollectionsData } from "../../hooks/data";
import righ from '../../imgs/right.png'
import amount from "../../imgs/amount.svg";
function Home() {
  let {data}=useCollectionsData()
  console.log(data); 
  return (
    <div className={styles.home}>
      <Sidebar test={"overview"} />
      <div className={styles.dashboard}>
        <h2>Overview</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardParagraph}>Current Balance</p>
            <p className={styles.price}>${data?.balance[0].current}</p>
          </div>
          <div className={styles.cardWhite}>
            <p className={styles.cardParagraph}>Income</p>
            <p className={styles.price}>${data?.balance[0].income}</p>
          </div>
          <div className={styles.cardWhite}>
            <p className={styles.cardParagraph}>Expenses</p>
            <p className={styles.price}>${data?.balance[0].expenses}</p>
          </div>
        </div>
        <div className={styles.warpper}>
          <div className={styles.left}>
            <div className={styles.pots}>
              <div className={styles.post}>
                <h4>Pots</h4>
                <p>See Details</p>
                <img src={righ} alt="" />
              </div>
              <div className={styles.amounts}>
                <div className={styles.col}>
                  <img src={amount} alt="" />
                  <div>
                    <p className={styles.p}>Total Saved</p>
                    <p className={styles.amount}>${data?.pots[0].total}</p>
                  </div>
                </div>
                <div className={styles.flex}>
                  <div className={styles.savingFlex}>
                    <p>Savings</p>
                    <p>$159</p>
                  </div>
                  <div></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div>right</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
