import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/MyCards.module.css'

const MyCards: React.FC = () => {
    return (
        <div className={styles.wrapper}>
      {/* Navbar */}
      <div>
        <Navbar/>
      </div>

      <div>
        <h1 className={styles.header}>My Cards</h1>
      </div>

      <div className={styles.searchcontainer}>
        <input className={styles.searchbar} type="text" placeholder="Search here..." />
      </div>

      <div>
        <button className={styles.allbutton}>All</button>
        <button className={styles.sentbutton}>Sent</button>
        <button className={styles.receivedbutton}>Received</button>
      </div>

      <div className={styles.cardscontainer}>
        <div className={styles.cards}>
            <button className={styles.card}><p className={styles.cardtext}>Main Balance</p></button>
            <button className={styles.card}><p className={styles.cardtext}>Sunshine Memory</p></button>
            <button className={styles.card}><p className={styles.cardtext}>Card</p></button>
            <button className={styles.card}><p className={styles.cardtext}>Card</p></button>
            <button className={styles.card}><p className={styles.cardtext}>Card</p></button>
        </div>
      </div>

      <div>
        <h2 className={styles.thisyear}>This Year</h2>
        <div className={styles.cardsent}>
          <div className={styles.nomandiccard1}>
            <div className={styles.nomandiccarddiv}></div>
            <h3>Nomadic Card</h3>
            <p>A stunning mountain view from an unforgettable trip.</p>
          </div>
          <div className={styles.nomandiccard2}>
            <div className={styles.nomandiccarddiv}></div>
            <h3>Nomadic Card 2</h3>
            <p>A stunning mountain view from an unforgettable trip.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCards;