import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import styles from "../styles/dashboard.module.css";
import profilePic from "../assets/profile.png";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = { name: "John Doe", avatar: profilePic };
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <Navbar />
      <div className={styles.content}>
        <img src={user?.avatar} alt="Profile" className={styles.profileImage} />
        <div className={styles.textContainer}>
          <h1 className={styles.greeting}>Hello <br /> <span className={styles.userName}>{user ? user.name : "User"}</span></h1>
          <button onClick={() => navigate("/cardAdd")} className={styles.addButton}>
            Add Card
          </button>
        </div>
      </div>

      {/* Section My Cards */}
      <div className={styles.myCardsSection}>
        <div className={styles.buttonContainer}>
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

      <div className={`${styles.mobileNavbarWrapper} mobileNavbarOnly`}>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Dashboard;
