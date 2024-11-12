import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="/asset/image/logo website tripbaliin.png" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.navLinks}>
        <div style={styles.navLinksnav}>
          <a href="app.jsx" style={styles.link}>Home</a>
          <a href="about.jsx" style={styles.link}>About</a>
          <a href="itenerary.jsx" style={styles.link}>Itinerary</a>
          <a href="#contact" style={styles.link}>Contact</a>
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
