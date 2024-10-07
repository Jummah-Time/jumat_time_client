import style from './Mosque.module.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Mosques({mosques}) {
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