import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <div style={styles.heroSection}>
      <div style={styles.textContainer}>
        <h1>In Bali, holidays become more meaningful!</h1>
        <p style={styles.textp}>Find the best tourist attractions here, we will help you on your adventure!</p>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Search destination, location, & price" style={styles.searchInput} />
          <button style={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <img src="public/asset/image/bali.jpg" alt="Bali" style={styles.heroImage} />
    </div>
  );
};

const styles = {
    heroSection: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px',
        backgroundColor: '#E6F0FA',
        borderRadius: '15px',
        margin: '60px',
        height: '400px',
        position: 'relative',
        borderTopLeftRadius: '25px',  // Border-radius hanya di atas kiri
        borderTopRightRadius: '25px',
        borderBottomLeftRadius: '0',  // Tidak ada border-radius di bawah kiri
        borderBottomRightRadius: '0',
        top:'70px',
        marginBottom: '130px',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 600,
        
      },
      
      textContainer: {
        maxWidth: '35%',
        zIndex: 1,  // Membuat textContainer tetap di belakang search bar
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 500,
        color: '//#region 1C1C1C',
      },
      textp: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 100,
        color: '#797A7B',
      },
    
      searchBar: {
        position: 'absolute',  // Memastikan search bar berada di depan kontainer
        top: '100%',  // Menempatkan search bar di tengah-tengah heroSection
        left: '10%',  // Memberi sedikit margin dari kiri
        width: '80%',  // Membuat search bar memanjang
        transform: 'translateY(-50%)',  // Menjaga agar search bar tetap berada di tengah vertikal
        display: 'flex',
        backgroundColor: 'white',  // Memberikan latar belakang putih agar kontras
        padding: '10px',
        borderRadius: '25px',
        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.2)',  // Memberikan efek bayangan agar lebih menonjol
        fontFamily: 'Open Sans, sans-serif',
      },
      
      searchInput: {
        flex: 1,
        padding: '0px',
        fontSize: '16px',
      },
      
      searchButton: {
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: 'white',
        borderRadius: '0 25px 25px 0',
        cursor: 'pointer',
        fontFamily: 'Open Sans, sans-serif',
      },
      
      heroImage: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        borderRadius: '15px',
        objectFit: 'cover',
        borderTopLeftRadius: '0px',  // Border-radius hanya di atas kiri
        borderTopRightRadius: '25px',
        borderBottomLeftRadius: '0',  // Tidak ada border-radius di bawah kiri
        borderBottomRightRadius: '0',
        top: 0,
        left : 580,
      },
};

export default HeroSection;