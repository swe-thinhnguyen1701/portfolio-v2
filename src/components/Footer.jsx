import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <ul className="list list-inline">
                <li className="list-item">
                    <a href="https://github.com/swe-thinhnguyen1701" target="_blank" className="link">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://www.facebook.com/ThinhNguyen1701/" target="_blank" className="link">
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/thinh-nguyen-10b31a218/" target="_blank" className="link">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                </li>
            </ul>
            <div>&#169; Charles Nguyen</div>
        </footer>
    )
}

export default Footer;