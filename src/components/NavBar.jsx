import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <nav>
            <h2 className="nav-my-name">Charles</h2>
            <ul className="list list-inline">
                <li className="list-item">
                    <Link to="/" className={currentPage === "/" ? "link highlight" : "link"}>Home</Link>
                </li>
                <li className="list-item">
                    <Link to="/About" className={currentPage === "/About" ? "link highlight" : "link"}>About</Link>
                </li>
                <li className="list-item">
                    <Link to="/Projects" className={currentPage === "/Project" ? "link highlight" : "link"}>Projects</Link>
                </li>
                <li className="list-item">
                    <Link to="/Resume" className={currentPage === "/Resume" ? "link highlight" : "link"}>Resume</Link>
                </li>
            </ul>
            <button className="btn contact-me-btn">Contact Me</button>
        </nav>
    );
}

export default NavBar;