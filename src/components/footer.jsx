import React from "react";

function Footer () {
  const styles = {
    footer: {
      backgroundColor: "#0F67B1",
      color: "#fff",
      padding: "30px",
      display: "flex",
      flexWrap: "wrap",
      
    },
    footerin: {
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        top: 100,
        marginLeft: "25px", // Menambahkan margin kiri
        marginRight: "20px",
      },
    section1: {
      minWidth: "50px",
      padding: "50px",
      marginLeft: "10px", // Menambahkan margin kiri untuk section
    marginRight: "10px",
    },
    section2: {
        minWidth: "50px",
        padding: "50px",
        marginLeft: "10px", // Menambahkan margin kiri untuk section
      marginRight: "10px",
      },

      section3: {
        minWidth: "50px",
        padding: "50px",
        marginLeft: "10px", // Menambahkan margin kiri untuk section
      marginRight: "10px",
      },
      section4  : {
        minWidth: "50px",
        padding: "50px",
        marginLeft: "10px", // Menambahkan margin kiri untuk section
      marginRight: "10px",
      },
    title: {
      fontWeight: "bold",
      marginBottom: "10px",
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Bold style
        fontSize: '15px', // Adjust the font size as needed
        marginBottom: '20px',
    },
    listItem: {
        fontFamily: 'Montserrat, sans-serif', // Apply Montserrat Regular
        fontWeight: '50', // Regular weight
        fontSize: '15px', // Adjust the font size as needed
        marginBottom: '8px', 
    },
    languageCurrency: {
      display: "flex",
      flexDirection: "column",
    },
    dropdown: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
    },
    paymentIcons: {
        display: 'flex',
      gap: "5px",
      marginTop: "10px",
      flexDirection: 'column',
    },
    paymentIcon: {
      width: "50px",
      height: "25px",
      margin: '0 2px',
    },
    copyright: {
      backgroundColor: "#054D89",
      textAlign: "center",
      padding: "10px",
      color: "#fff",
      marginTop: "0px",
      fontFamily: 'Montserrat, sans-serif', // Apply Montserrat Regular
        fontWeight: '50',
    },
      row: {
        display: 'flex', // Arrange images in a row
        justifyContent: 'flex-start', // Center images horizontally in each row
        marginBottom: '10px', // Space between the rows
      },
  };

  return (
    <footer>
      <div style={styles.footer}>
        <div style={styles.footerin}>
                {/* Language and Currency */}
                <div style={{ ...styles.section4, ...styles.languageCurrency }}>
                <div style={styles.title}>Language</div>
                <select style={styles.dropdown}>
                    <option>English (UK)</option>
                    {/* Tambahkan pilihan bahasa lain sesuai kebutuhan */}
                </select>

                <div style={styles.title}>Currency</div>
                <select style={styles.dropdown}>
                    <option>IDR (Rp)</option>
                    {/* Tambahkan pilihan mata uang lain sesuai kebutuhan */}
                </select>
                </div>

                {/* Company Section */}
                <div style={styles.section1}>
                <div style={styles.title}>Company</div>
                <div style={styles.listItem}>About Us</div>
                <div style={styles.listItem}>Accomodation</div>
                <div style={styles.listItem}>Destination</div>
                <div style={styles.listItem}>Indonesia</div>
                </div>

                {/* Help Section */}
                <div style={styles.section2}>
                <div style={styles.title}>Help</div>
                <div style={styles.listItem}>Contact us</div>
                <div style={styles.listItem}>FAQs</div>
                <div style={styles.listItem}>Terms and conditions</div>
                <div style={styles.listItem}>Privacy policy</div>
                <div style={styles.listItem}>Sitemap</div>
                </div>

                {/* Payment Methods */}
                <div style={styles.section3}>
                    <div style={styles.title}>Payment methods possible</div>
                    <div style={styles.paymentIcons}>
                        <div style={styles.row}>
                        <img src="/asset/image/visa.png" alt="Visa" style={styles.paymentIcon} />
                        <img src="/asset/image/mastercard.png" alt="Mastercard" style={styles.paymentIcon} />
                        <img src="/asset/image/indo.png" alt="Paypal" style={styles.paymentIcon} />
                        <img src="/asset/image/bca.png" alt="BCA" style={styles.paymentIcon} />
                        <img src="/asset/image/mandiri.png" alt="Mandiri" style={styles.paymentIcon} />
                        </div>
                        <div style={styles.row}>
                        <img src="/asset/image/bri.png" alt="BRI" style={styles.paymentIcon} />
                        <img src="/asset/image/alfa.png" alt="Alfa" style={styles.paymentIcon} />
                        <img src="/asset/image/alfa2.png" alt="Alfa2" style={styles.paymentIcon} />
                        <img src="/asset/image/dki.png" alt="DKI" style={styles.paymentIcon} />
                        <img src="/asset/image/bni.png" alt="BNI" style={styles.paymentIcon} />
                        </div>
                        <div style={styles.row}>
                        <div style={styles.title}>Company</div>
                        <div style={styles.listItem}>Become a Itinerary web</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div style={styles.copyright}>
            Copyright 2024 TripBaliin. All Rights Reserved
        </div>
        </footer>
  );
};

export default Footer;