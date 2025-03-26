import React, { useEffect, useState } from 'react';
import MobileNavbar from '../components/MobileNavbar';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import { FaRegUser, FaRegCreditCard } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileNavbar /> : (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Post AR</h1>
      <div className={styles.links}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cards" className={`${styles.link} ${location.pathname === '/cards' ? styles.active : ''}`}>
          <FaRegCreditCard /> Cards
        </Link>
        <Link to="/profile" className={`${styles.link} ${location.pathname === '/profile' ? styles.active : ''}`}>
          <FaRegUser /> Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;