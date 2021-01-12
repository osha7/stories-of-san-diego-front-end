import "../../css/footer.css";
import InstagramLogo from '../../css/iconmonstr-instagram-1.svg'
import TwitterLogo from '../../css/iconmonstr-twitter-3.svg'

export const Footer = () => {
    return (
        <main className="footer-sections">
            <section className="footer">
                <ul className="nav">
                    <li className="nav__item">
                        <a href="/" alt="Home" className="nav__link">
                            HOME
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/stories" alt="Stories" className="nav__link">
                            STORIES
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/about" alt="About" className="nav__link">
                            ABOUT
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/contact-us"
                            alt="Contact Us"
                            className="nav__link"
                        >
                            CONTACT
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/admin" alt="Admin" className="nav__link">
                            ADMIN
                        </a>
                    </li>
                </ul>
                <div className="second-row-footer" >
                <div className="social-logos">
                        <a href="https://www.instagram.com/storiesofsd/" target="_blank" rel="noreferrer" ><img src={InstagramLogo} alt="insta-logo" className="social-media-logo"></img></a>
                        <a href="https://twitter.com/StoriesofSD" target="_blank" rel="noreferrer" ><img src={TwitterLogo} alt="insta-logo" className="social-media-logo"></img></a>
                    </div>
                    <p className="copyright">
                        © Copyright 2020 Stories of San Diego
                    </p>
                    
                </div>
            </section>
            <aside className="contributing-writer">
                <a href="/contributing-writer" alt="Read More">
                    <h2>Become a Contributing Writer</h2>
                </a>
                <a href="/admin" alt="admin-login" className="admin-login">
                    Admin Log-In
                </a>
            </aside>
        </main>
    );
};
