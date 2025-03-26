import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaPlus, FaTimes, FaImage, FaQrcode, FaSync, FaRegCreditCard, FaPlay } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/mobileNavbar.module.css';

const MobileNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  return (
    <>
      {isExpanded && <div className={styles.overlay} onClick={() => setIsExpanded(false)}></div>}

      <div className={styles.mobileNavbar}>
        <Link to="/dashboard" className={styles.navButton}><FaHome /></Link>
        <Link to="/cards" className={styles.navButton}><FaRegCreditCard /></Link>

        <div className={styles.centralButtonWrapper}>
          <button className={styles.centralButton} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <FaTimes /> : <FaPlus />}
          </button>
          {isExpanded && (
            <div className={styles.expandedButtons}>
              <button className={styles.expandedButton}><FaImage /></button>
              <button className={styles.expandedButton}><FaQrcode /></button>
              <button className={styles.expandedButton}><FaPlay /></button>
            </div>
          )}
        </div>

        <button className={styles.navButton} onClick={() => window.location.reload()}>
            <FaSync />
        </button>
        <Link to="/profile" className={styles.navButton}><FaUser /></Link>
      </div>
    </>
  );
};

export default MobileNavbar;