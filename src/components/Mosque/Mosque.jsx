import style from './Mosque.module.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Mosques({mosques}) {
    const convertTo12HourFormat = (time) => {
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);

        if (hours >= 12) {
            if (hours > 12) hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        return `${hours}:${minutes}`;
    };

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
                                <p className={style.time}>{convertTo12HourFormat(mosque.jumat_start)} - {convertTo12HourFormat(mosque.jumat_end)}</p>
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