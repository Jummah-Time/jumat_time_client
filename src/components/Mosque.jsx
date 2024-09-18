


function Mosque(mosque) {
    return (
        <>
            <li className="mosque">
                <h6>
                    {mosque.name}
                </h6>
                <p>{mosque.name}</p>
                <h6>{mosque.name} - {mosque.name}</h6>
                <a href={mosque.name}>locate in map</a>
            </li>
        </>
    )
}

function Mosques() {

    const mosques = ["Unilag central Mosque", "Ijesha central mosque", "Lekki central Mosque"];

    return (
        <>
            <h5>Mosques around</h5>
            <ul>
                {mosques.map((mosque) => <Mosque name={mosque} />)}
            </ul>
        </>
    )
}

export default Mosques;