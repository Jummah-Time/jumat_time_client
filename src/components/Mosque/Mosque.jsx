import style from './Mosque.module.css';


function Mosque(mosque) {
    return (
        <>
            <div className={style.mosque}>
                <ul>
                    <li>
                        <h3>
                            {mosque.name}
                        </h3>
                        <p className={style.address}>{mosque.name}</p>
                        <p className={style.time}>1:30 - 2:30</p>
                        <a href={mosque.name}>locate in map</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

function Mosques() {

    const mosques = ["Unilag central Mosque", "Ijesha central mosque", "Lekki central Mosque"];

    return (
        <>
            <p className={style.mosquesTop}>Mosques around</p>
            <ul>
                {mosques.map((mosque) => <Mosque name={mosque} />)}
            </ul>
        </>
    )
}

export default Mosques;