// Search.js
import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search food by name"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
