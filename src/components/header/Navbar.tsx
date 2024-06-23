import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import sideMenuIcon from '../../assets/images/side-menu-icon.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black text-light">
            <div className="container">
                <Link className="navbar-brand" to="#">
                    <img src={sideMenuIcon} alt="Side Menu Icon" />
                </Link>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                سوق السيارات
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                السيارات الجديدة
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                <img src={logo} alt="Mohamed Fahmy Logo" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                هاتوالى
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                بيع لمحمد فهمى
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                بيع عربيتك
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link className="navbar-brand login-anchor" to="#">
                    تسجيل دخول
                </Link>
            </div>
        </nav>
    )
}
