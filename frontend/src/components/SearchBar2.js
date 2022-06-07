import React from 'react'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const SearchBar = () => {
    const { search2, setSearch2 } = useContext(DataContext);

    return ( 
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}> 
            <input
                class="form-control mr-sm-2 "
                id="search"
                autoComplete="off"
                type="text"
                placeholder="Search Tour"
                value={search2}
                onChange={(e) => setSearch2(e.target.value)}
                // style={{width: '300px'}}
            />
        </form> 
    )
}

export default SearchBar