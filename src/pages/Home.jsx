import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header.jsx';
import Search from '../components/Search/Search.jsx';
import Mosques from '../components/Mosque/Mosque.jsx';

const Home = () => {
    

    // const mosques = ["Unilag central Mosque", "Ijesha central mosque", "Lekki central Mosque"];
    const [ mosques, setMosques ] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchMosques = () => {

        setLoading(true);

        const apiUrl = "https://jumat-time-server.onrender.com/mosques";

        axios({
            url: apiUrl,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            params: {
                search: search
            }
        })
            .then((response) => {
                console.log(response.data.mosques);
                setMosques(response.data.mosques);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching mosques', error))
        };

    return (
        <>
            <Header />
                <Search setSearch={setSearch} loading={loading} mosques={fetchMosques} />
                    <h1>
                        Know the jum’at time of a mosque close to you
                    </h1>
                        <Mosques mosques={mosques} />
        </>
    )
}

export default Home;