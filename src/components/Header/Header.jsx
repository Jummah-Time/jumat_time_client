import logo from "../../assets/radix-icons_moon.svg";
import plus from "../../assets/Vector.png";
import "./Header.module.css";
import { Outlet, Link } from "react-router-dom";


function Header() {
    return <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={logo} className="logo" alt="Logo" style={{ width: '50px', height: 'auto' }}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc8E6y1JXGjso0n4c4p9belPRRwNn1gHGiNKtjUx4upitNVnA/viewform">
                                <img src={plus} className="add" alt="plus-sign" style={{paddingTop: '10px', width: 'auto', height: '20px' }}/>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </header>
}

export default Header;