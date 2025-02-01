import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setIsLoading(true);

    setTimeout(() => {
      onSearch(value);
      setIsLoading(false);
    }, 500); // Delay 0.5 detik
  };

  return (
    <div style={{ width: '100%', marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Cari nama WBP..."
        value={query}
        onChange={handleInputChange}
        className="search-bar"
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #dbdbdb',
          borderRadius: '8px',
          fontSize: '14px',
          outline: 'none',
          transition: 'border-color 0.2s ease-in-out',
          boxSizing: 'border-box', /* Pastikan padding tidak melebihi lebar */
        }}
      />
      {isLoading && (
        <div
          style={{
            marginTop: '8px', /* Jarak antara search box dan teks "Searching..." */
            color: '#8e8e8e',
            fontSize: '14px',
            fontStyle: 'italic',
            textAlign: 'left', /* Posisi teks di sebelah kiri */
          }}
        >
          Searching...
        </div>
      )}
    </div>
  );
};

export default SearchBar;