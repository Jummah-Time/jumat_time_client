import style from './Form.module.css';

function Form() {
    return <>

            <h2>
            Contribute to help others know the Jum’at Prayer time in the mosque close to them
            </h2>
    
            <form className={style.mosqueForm}>
                <label>Mosque</label>
                <input className={style.input} type="text" placeholder="Enter your name" />
                <label>Address</label>
                <input type="text" placeholder="11, Heavens gate, Lagos, Nigeria" />
                <label>Map Link (Optional)</label>
                <input type="text" placeholder="google.com/maps/place/Central+mosque" />
                <label>Jum’at Time</label>
                <div className={style.time}>
                    <input type="time" placeholder="1:00" />
                    <input type="time" placeholder="2:00" />
                </div>
                <button>Submit</button>
            </form>
        </>

}

export default Form;