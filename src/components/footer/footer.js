import "../../css/footer.css";

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
                <p className="copyright">
                    © Copyright 2020 Stories of San Diego
                </p>
            </section>
            <aside className="contributing-writer">
                <a href="/contributing-writer" alt="Read More">
                    <h2>Become a Contributing Writer</h2>
                </a>
            </aside>
        </main>
    );
};
