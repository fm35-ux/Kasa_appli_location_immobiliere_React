import logo from '../../assets/images/logo-footer.svg'
import './Footer.css'

function Footer() {
    return (
        < footer className="footer" >
            <img src={logo} alt="Logo Kasa" className="footer-logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer >
    )
}

export default Footer   