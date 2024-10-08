import React, { useState } from 'react';
import searchIcon from '../../assets/circum_search.svg';
import search from './Search.module.css';


function Search({setSearch, loading, mosques}) {

    const [searchText, setSearchText] = useState('');

    const handleClick = () => {
        mosques();
    };

    React.useEffect(() => {
        mosques();
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            mosques();
        }
    }

    const handleChange = (event) => {
        setSearchText(event.target.value);
        setSearch(event.target.value);
    }
    return <>
        <div className={search.searchBox}>
            <button onClick={handleClick} ><img src={searchIcon} className={search.searchIcon}/>{loading? '...' : ''}</button>
            <input
                type='text'
                placeholder='Mosque'
                name='search'
                value={searchText}                
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    </>
}

export default Search