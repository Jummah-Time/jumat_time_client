import Header from '../components/Header/Header.jsx';
import Search from '../components/Search/Search.jsx';
import Mosques from '../components/Mosque/Mosque.jsx';

const Home = () => {
    return (
        <>
            <Header />
                <Search />
                    <h1>
                        Know the jum’at time of a mosque close to you
                    </h1>
                        <Mosques />
        </>
    )
}

export default Home;