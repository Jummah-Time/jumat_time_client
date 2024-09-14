import logo from "../assets/radix-icons_moon.svg";
import plus from "../assets/Vector.png";


function Header() {
    return <header>
                <img src={logo} className="logo" alt="Logo" style={{ width: '150px', height: 'auto' }}/>
                <img src={plus} className="add" alt="plus-sign" style={{ width: '150px', height: 'auto' }}/>
                
            </header>
}

export default Header;