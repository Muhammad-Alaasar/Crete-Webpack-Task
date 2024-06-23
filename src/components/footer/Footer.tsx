import './Footer.css'
import footerLogo from '../../assets/images/footer-logo.png'
import instagram from '../../assets/images/instagram.png'
import fb from '../../assets/images/fb.png'
import linkedin from '../../assets/images/linkedin.png'
import x from '../../assets/images/x.png'

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="footer-logo position-relative">
                <img src={footerLogo} alt="Footer Logo" className="d-block mx-auto" />
            </div>
            <ul className="social-media list-unstyled d-flex gap-5 justify-content-center mt-5">
                <li>
                    <img src={linkedin} alt="Linkedin" />
                </li>
                <li>
                    <img src={x} alt="X" />
                </li>
                <li>
                    <img src={instagram} alt="Instagram" />
                </li>
                <li>
                    <img src={fb} alt="Facebook" />
                </li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ul className="footer-links mt-5 list-unstyled text-white">
                            <li>السيارات الجديدة</li>
                            <li>سوق السيارات</li>
                            <li>بيع لمحمد فهمي</li>
                            <li>هاتهالي</li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <ul className="footer-links mt-5 list-unstyled text-white">
                            <li>السيارات الجديدة</li>
                            <li>سوق السيارات</li>
                            <li>بيع لمحمد فهمي</li>
                            <li>هاتهالي</li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <ul className="footer-links mt-5 list-unstyled text-white">
                            <li>السيارات الجديدة</li>
                            <li>سوق السيارات</li>
                            <li>بيع لمحمد فهمي</li>
                            <li>هاتهالي</li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <ul className="footer-links mt-5 list-unstyled text-white">
                            <li>السيارات الجديدة</li>
                            <li>سوق السيارات</li>
                            <li>بيع لمحمد فهمي</li>
                            <li>هاتهالي</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
