import React, { useEffect, useState } from 'react';
import style from './Form.module.css';
import axios from 'axios';

function Form() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [link, setLink] = useState('');
    const [jumat_start, setJumatStart] = useState('');
    const [jumat_end, setJumatEnd] = useState('');

    const addMosque = (event) => {
        event.preventDefault();

        const formData = {
            name,
            address,
            link,
            jumat_start,
            jumat_end
        };

        axios({
            url: "https://jumat-time-server.onrender.com/mosques/add",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            data: formData
        })
        .then((response) => {
                console.log(response.data);
        })
        .catch(error => {
                console.error('Error adding mosque', error)
        })
    }

    return <>
            <h2>
            Contribute to help others know the Jum’at Prayer time in the mosque close to them
            </h2>
    
            <form className={style.mosqueForm} onSubmit={addMosque}>
                <label>Mosque</label>
                <input 
                    className={style.input} 
                    type="text" 
                    name="name" 
                    placeholder="Central Mosque" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    placeholder="11, Heavens gate, Lagos, Nigeria" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>Map Link (Optional)</label>
                <input 
                    type="text" 
                    name="link" 
                    placeholder="google.com/maps/place/Central+mosque" 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <label>Jum’at Time</label>
                <div className={style.time}>
                    <input 
                        type="time" 
                        name="jumat_start" 
                        placeholder="1:00" 
                        value={jumat_start}
                        onChange={(e) => setJumatStart(e.target.value)}
                    />
                    <input 
                        type="time" 
                        name="jumat_end" 
                        placeholder="2:00" 
                        value={jumat_end}
                        onChange={(e) => setJumatEnd(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </>

}

export default Form;