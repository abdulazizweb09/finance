import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.scss";
import { useCollectionsData } from "../../hooks/data";
import righ from "../../imgs/right.png";
import amount from "../../imgs/amount.svg";
function Home() {
  let { data } = useCollectionsData();
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
                    <p className={styles.amount}>${data?.pots[0].target}</p>
                  </div>
                </div>
                <div className={styles.flex}>
                  <div>
                    <div className={styles.a}>
                      <div className={styles.tiziq}></div>
                      <div className={styles.savingFlex}>
                        <p className={styles.saving}>Savings</p>
                        <p className={styles.dol}>${data?.pots[0].total}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: 16 }} className={styles.a}>
                      <div className={styles.tiziq}></div>
                      <div className={styles.savingFlex}>
                        <p className={styles.saving}>Concert Ticket</p>
                        <p className={styles.dol}>${data?.pots[1].total}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.a}>
                      <div className={styles.tiziq}></div>
                      <div className={styles.savingFlex}>
                        <p className={styles.saving}>Gift</p>
                        <p className={styles.dol}>${data?.pots[2].target}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: 16 }} className={styles.a}>
                      <div className={styles.tiziq}></div>
                      <div className={styles.savingFlex}>
                        <p className={styles.saving}>New Laptop</p>
                        <p className={styles.dol}>${data?.pots[2].total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tran}>
              <div className={styles.post}>
                <h4>Transactions</h4>
                <p>View All</p>
                <img src={righ} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div className={styles.post}>
                <h4>Pots</h4>
                <p>See Details</p>
                <img src={righ} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
