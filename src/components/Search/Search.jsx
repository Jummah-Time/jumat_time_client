import searchIcon from '../../assets/circum_search.svg';
import locationIcon from '../../assets/search_location_6.svg';
import vectorIcon from '../../assets/search_vector_1.svg';
import search from './Search.module.css';


function Search() {
    return <>
        <div className={search.searchBox}>
            <img src={searchIcon} className={search.searchIcon}/>
            <input type='text' placeHolder='Mosque'/>
        </div>
    </>
}

export default Search