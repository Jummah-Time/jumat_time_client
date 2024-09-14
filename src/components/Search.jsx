import searchIcon from '../assets/circum_search.svg';
import locationIcon from '../assets/search_location_6.svg';
import vectorIcon from '../assets/search_vector_1.svg';


function Search() {
    return <>
        <div className='search-box'>
            <input type='text' placeHolder='Mosque'/>
            <img src={searchIcon} className='search-icon'/>
        </div>
    </>
}

export default Search