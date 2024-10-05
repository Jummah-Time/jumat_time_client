import style from './Mosque.module.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Mosque(mosque) {
    return (
        <>
            <div className={style.mosque}>
                <ul>
                    <li>
                        <h3>
                            {mosque.name}
                        </h3>
                        <p className={style.address}>{mosque.address}</p>
                        <p className={style.time}>{mosque.jumat_start} - {mosque.jumat_end}</p>
                        <a href={mosque.name}>locate in map</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

function Mosques() {

    // const mosques = ["Unilag central Mosque", "Ijesha central mosque", "Lekki central Mosque"];
    const [ mosques, setMosques ] = useState([]);

    const apiUrl = "https://jumat-time-server.onrender.com/mosques";

    useEffect(() => {
        axios({
            url: apiUrl,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => {
                const mosques = response.data.mosques;
                console.log(mosques);
                setMosques(mosques);
            })
            .catch(error => console.error('Error fetching mosques', error))
    }, []);


    return (
        <>
        <div>
            <p className={style.mosquesTop}>Mosques around</p>
                {mosques.map((mosque) => (
                    <div className={style.mosque}>
                        <ul>
                            <li>
                                <h3>
                                    {mosque.name}
                                </h3>
                                <p className={style.address}>{mosque.address}</p>
                                <p className={style.time}>{mosque.jumat_start} - {mosque.jumat_end}</p>
                                <a href={mosque.link}>locate in map</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Mosques;