import "../../css/footer.css";
import InstagramLogo from "../../css/iconmonstr-instagram-1.svg";
import TwitterLogo from "../../css/iconmonstr-twitter-3.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <main className="footer-sections">
            <section className="footer">
                <ul className="nav">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">
                            HOME
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/stories" className="nav__link">
                            STORIES
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">
                            ABOUT
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contact-us" className="nav__link">
                            CONTACT
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/news" className="nav__link">
                            NEWS
                        </Link>
                    </li>
                </ul>
                <div className="second-row-footer">
                    <div className="social-logos">
                        <a
                            href="https://www.instagram.com/storiesofsd/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={InstagramLogo}
                                alt="insta-logo"
                                className="social-media-logo"
                            ></img>
                        </a>
                        <a
                            href="https://twitter.com/StoriesofSD"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={TwitterLogo}
                                alt="insta-logo"
                                className="social-media-logo"
                            ></img>
                        </a>
                    </div>
                    <p className="copyright">
                        © Copyright {new Date().getFullYear()} Stories of San Diego
                    </p>
                </div>
            </section>
            <aside className="contributing-writer">
                <Link to="/contributing-writer">
                    <h2>Become a Contributing Writer</h2>
                </Link>
                <Link to="/admin" className="admin-login">
                    Admin Log-In
                </Link>
            </aside>
        </main>
    );
};
