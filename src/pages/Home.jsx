import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import WBPList from '../components/WBPList';
import Pagination from '../components/Pagination';
import wbpData from '../data/data-wbp.json';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data berdasarkan pencarian
  const filteredData = wbpData['01_02_2025']
    .filter((wbp) => wbp.nomor !== "No") // Hapus header jika ada
    .filter((wbp) =>
      wbp.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container">
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      <WBPList wbpData={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default Home;