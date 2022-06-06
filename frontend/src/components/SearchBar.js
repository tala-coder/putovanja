import React from 'react'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const SearchBar = () => {
    const { search, setSearch } = useContext(DataContext);

    return ( 
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}> 
            <input
                class="form-control mr-sm-2 "
                id="search"
                autoComplete="off"
                type="text"
                placeholder="Search Tour"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                // style={{width: '300px'}}
            />
        </form> 
    )
}

export default SearchBar