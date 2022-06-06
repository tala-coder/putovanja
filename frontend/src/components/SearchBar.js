import React from 'react'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const SearchBar = () => {
    const { search, setSearch } = useContext(DataContext);

    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}> 
            <input
                id="search"
                autoComplete="off"
                type="text"
                placeholder="Search Tour"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchBar