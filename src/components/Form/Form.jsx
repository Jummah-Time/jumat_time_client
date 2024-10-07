import React, { useEffect, useState } from 'react';
import style from './Form.module.css';
import axios from 'axios';

function Form() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [link, setLink] = useState('');
    const [jumat_start, setJumatStart] = useState('');
    const [jumat_end, setJumatEnd] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const addMosque = (event) => {
        event.preventDefault();

        setLoading(true);

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

                alert("Thank you very much for contributing, May Allah reward you abundantly");
                setName('');
                setAddress('');
                setLink('');
                setJumatStart('');
                setJumatEnd('');
                setLoading(false);
                // setMessage(response.data.message);
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
                    disabled={loading}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    placeholder="11, Heavens gate, Lagos, Nigeria" 
                    value={address}
                    disabled={loading}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>Map Link (Optional)</label>
                <input 
                    type="text" 
                    name="link" 
                    placeholder="google.com/maps/place/Central+mosque" 
                    value={link}
                    disabled={loading}
                    onChange={(e) => setLink(e.target.value)}
                />
                <label>Jum’at Time</label>
                <div className={style.time}>
                    <input 
                        type="time" 
                        name="jumat_start" 
                        placeholder="1:00" 
                        value={jumat_start}
                        disabled={loading}
                        onChange={(e) => setJumatStart(e.target.value)}
                    />
                    <input 
                        type="time" 
                        name="jumat_end" 
                        placeholder="2:00" 
                        value={jumat_end}
                        disabled={loading}
                        onChange={(e) => setJumatEnd(e.target.value)}
                    />
                </div>
                <button>
                    {loading ? 'Adding...' : 'Add Mosque'}
                </button>
            </form>
        </>

}

export default Form;