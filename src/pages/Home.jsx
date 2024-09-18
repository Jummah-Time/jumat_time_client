import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Mosques from '../components/Mosque.jsx';

const Home = () => {
    return (
        <>
            <Header />
                <Search />
                    <Mosques />
        </>
    )
}

export default Home;