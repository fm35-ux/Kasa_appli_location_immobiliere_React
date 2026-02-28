import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './Header.css'


function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="header-logo" />
            <nav className="nav">
                <NavLink to="/" className="nav-link">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header