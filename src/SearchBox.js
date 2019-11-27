import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
      <div className='searchField'>
        <input
          className='searchInput'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        />
      </div>
    );
  }

export default SearchBox;