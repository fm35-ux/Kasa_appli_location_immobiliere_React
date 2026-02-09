import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './Header.css'


function Header() {
    return (
        <header className="header">
            <NavLink to="/">
                <img src={logo} alt="Logo Kasa" className="header-logo" />
            </NavLink>
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header