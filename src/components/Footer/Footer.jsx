import logo from '../../assets/images/logo-footer.svg'
import './Footer.css'

function Footer() {
    return (
        < footer className="footer" >
            <img src={logo} alt="Logo Kasa" className="footer-logo" />
            <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
        </footer >
    )
}

export default Footer   