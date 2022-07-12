import '../App.css'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1 className="logo-text">
                <Link to={"/"} className="nav-link">
                    ONE SHOP
                </Link>
            </h1>
            <ul className="navbar-list">
                <li>
                    <Link to={"/shop"}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar;