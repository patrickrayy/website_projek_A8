import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faUsers, faStar, faEye, faCarSide } from '@fortawesome/free-solid-svg-icons';

const RecommendationCard = ({ item }) => {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.cardImage} />
      <h3>{item.title}</h3>
      <div style={styles.textcard}>
        <p><FontAwesomeIcon icon={faClock} /> {item.duration}</p>
        <p><FontAwesomeIcon icon={faCarSide} /> Transport Facility</p>
        <p><FontAwesomeIcon icon={faUsers} /> Family Plan</p>
        <div style={styles.textprice}>
          <div style={styles.leftColumn}>
            <div style={styles.ratingSection}>
              {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{
                    color: index < item.rating ? '#FFD700' : '#D3D3D3',
                  }}
                />
              ))}
            </div>
            <div style={styles.viewerSection}>
              <FontAwesomeIcon style={styles.eyeIcon} icon={faEye} />
              <span style={styles.viewerText}>{item.viewers} viewers</span>
            </div>
          </div>
          <div style={styles.rightColumn}>
            <span>{item.price}</span>
            <span style={styles.perperson}>per person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '250px',
    height: '450px',
    padding: '10px',
    borderRadius: '0px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    width: '250px',
    height: '180px',
    borderRadius: '0px',
    objectFit: 'cover',
  },
  textcard: {
    fontFamily: 'Mulish, sans-serif',  // Apply Mulish font
    fontWeight: '100',  // Light weight
    marginTop: '5px',  // Add space between title and text (adjust as needed)
    position: 'relative',  // If you want to use 'top' for positioning, it's necessary
    top: '20px',  // Keep the existing top value if needed
    lineHeight: '0.0', 
    width: '100%',
  },
  textprice: {
    fontFamily: 'Mulish, sans-serif',
    fontWeight: '500',
    color: '#7BBCB0',
    textAlign: 'left',
    margin: 0,
    lineHeight: '1.1',
    width: '100%',
    display: 'flex',            // Membuat dua kolom
    justifyContent: 'space-between', // Membuat jarak antar kolom
    gap: '10px',  

  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '5px',  
    marginTop: '20px',              // Jarak antara rating dan viewers
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '5px',
    marginTop: '20px',                  // Jarak antara price dan per person
  },
  

  price: {
    fontFamily: 'Volkhov, serif',
    fontWeight: 'bold',
    fontSize: '20px', 
    color: '#7BBCB0',  // Atur ukuran font untuk elemen harga (price)
},

perperson: {
    fontFamily: 'Mulish, sans-serif',  
    fontWeight: '500',   // Atur berat font menjadi 500 untuk lebih tebal
    fontSize: '12px',  
    color: '#666 ', // Atur ukuran font lebih kecil untuk "per person"
},

ratingSection: {
  display: 'flex',
    alignItems: 'center',
    gap: '3px',                   // Jarak antara ikon bintang dan teks rating
    color: '#FFD700',
    paddingLeft: '5px',  // Gold color for star
},
starIcon: {
  fontSize: '14px',  // Adjust size as needed
},
ratingText: {
  fontSize: '14px', 
  color: '#333',
},
viewerSection: {
  display: 'flex',
    alignItems: 'center',
    gap: '3px',                    // Jarak antara ikon mata dan teks viewer
    color: '#7BBCB0',
    paddingLeft: '5px',            // Menambahkan sedikit padding kiri
    marginTop: '3px',  // Adds space between "per person" and viewers
},

eyeIcon: {
  fontSize: '14px',
},

viewerText: {
  fontSize: '12px',
  color: '#666',
},
};

export default RecommendationCard;