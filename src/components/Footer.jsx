import React from 'react';

const Footer = () => {
  // Mendapatkan tahun saat ini
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Klinik Pratama Lapas Kerobokan</p>
    </footer>
  );
};

export default Footer;