import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import styles from '../styles/auth.module.css';
import googleIcon from '../assets/google.png';
import appleIcon from '../assets/apple.png';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('auth-page');
    return () => {
      document.body.classList.remove('auth-page');
    };
  }, []);

  const handleSocialSignup = (provider: 'google' | 'apple') => {
    // Simulation de l'inscription
    alert(`Inscription avec ${provider} en cours...`);
    // Après 1 seconde, on simule une inscription réussie
    setTimeout(() => {
      alert(`Inscription avec ${provider} réussie !`);
      navigate('/login');
    }, 1000);
  };

  const handleClassicSignup = () => {
    // Simulation de l'inscription classique
    alert('Inscription en cours...');
    // Après 1 seconde, on simule une inscription réussie
    setTimeout(() => {
      alert('Inscription réussie ! Veuillez vous connecter.');
      navigate('/login');
    }, 1000);
  };

  return (
    <div className={styles['auth-container']}>
      <h2 className={styles['welcome-title']}>Welcome <br></br> to Cardify !</h2>
      
      <div className={styles['login-box']}>
        <h1 className={styles['title']}>Sign up</h1>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <div className={styles['buttons']}>
          <button className={`${styles['button']} ${styles['secondary']}`} onClick={() => navigate('/')}>Back</button>
          <button className={`${styles['button']} ${styles['primary']}`} onClick={handleClassicSignup}>Sign up →</button>
        </div>
        <div className={styles['separator']}>
          <span className={styles['line']}></span>
          <span className={styles['or-text']}>or</span>
          <span className={styles['line']}></span>
        </div>
        <div className={styles['social-login']}>
          <button className={styles['social-button']} onClick={() => handleSocialSignup('google')}>
            <img src={googleIcon} alt="Google" />
          </button>
          <button className={styles['social-button']} onClick={() => handleSocialSignup('apple')}>
            <img src={appleIcon} alt="Apple" />
          </button>
        </div>
        <p className={styles['register-text']}>Already a member? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;
