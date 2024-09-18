import logo from "../assets/radix-icons_moon.svg";
import plus from "../assets/Vector.png";


function Header() {
    return <header>
                <nav>
                    <ul>
                        <li>
                            <img src={logo} className="logo" alt="Logo" style={{ width: '50px', height: 'auto' }}/>
                        </li>
                        <li>
                            <img src={plus} className="add" alt="plus-sign" style={{ width: '50px', height: 'auto' }}/>
                        </li>
                    </ul>
                </nav>
            </header>
}

export default Header;