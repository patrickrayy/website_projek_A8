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
    padding: '20px 50px',
    backgroundColor: '#0F67B1',
    color: 'white',
    width: '1160px',
    height: '50px',
    position: 'fixed', 
    zIndex: 1000,
    top: 0,  // Menjaga navbar tetap di bagian atas
    left: 0,  //
  },
  logo: {
    display: 'flex',
  },
  logoImage: {
    width: '150px',
    marginLeft: '30px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navLinksnav: {

    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginRight: '230px',
    fontFamily: 'Montserrat, sans-serif', // Apply Montserrat Regular
    fontWeight: '20',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
  },
  button: {
    marginLeft: '10px',
    padding: '5px 15px',
    color: 'white',
    backgroundColor: '#0F67B1',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  registerButton: {
    padding: '5px 15px',
    color: 'blue',
    backgroundColor: '#FFFFFF',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight:'30px',
  },
  // Tambahkan style lainnya
};

export default Navbar;