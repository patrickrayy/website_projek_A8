import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="../img/TripBaliInLogo.png" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.navLinks}>
        <div style={styles.navLinksnav}>
          <Link to="/HomePage.jsx" style={styles.link}>Home</Link>
          <Link to="/AboutPage.jsx" style={styles.link}>About</Link>
          <Link to="/ItineraryPage.jsx" style={styles.link}>Home</Link>
          <Link to="/ContactPage.jsx" style={styles.link}>Home</Link>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Login</button>
        <button style={styles.registerButton}>Register</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: '#0F67B1',
    color: 'white',
    width: '100%',
    position: 'fixed',                
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '120px',              
  },
  logoImage: {
    width: '130px',
  },
  navLinks: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  navLinksnav: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',                      
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '120px',          
    gap: '10px',                      
  },
  button: {
    padding: '5px 15px',
    color: 'white',
    backgroundColor: '#0F67B1',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily:'Montserrat, sans-serif'
  },
  registerButton: {
    padding: '5px 15px',
    color: '#0F67B1',
    backgroundColor: '#FFFFFF',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily:'Montserrat, sans-serif',
    fontWeight: '550'
  },
};

export default Navbar;
