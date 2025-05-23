import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/profile.module.css';
import Navbar from '../components/Navbar';
import { FaEdit, FaCheckCircle } from 'react-icons/fa';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.profileWrapper}>
      <Navbar />
      
      <div className={styles.profileContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.profileTitle}>My profile</h2>
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.imageContainer}>
                <img src="/Post-AR/profile.png" alt="Profile" className={styles.profilePic} />
                <FaCheckCircle className={styles.verifiedIcon} />
              </div>
              <div className={styles.userInfo}>
                <h3>John Doe</h3>
                <p className={styles.email}>johndoe@mail.com</p>
              </div>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statBox}><span>6</span> Cards sent</div>
            <div className={styles.statBox}><span>4</span> Cards received</div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <button className={styles.editProfile}><FaEdit /> Edit your profile</button>
          <div className={styles.options}>
            <button>About App</button>
            <button>Contact us</button>
            <button className={styles.logout} onClick={() => navigate('/')}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
