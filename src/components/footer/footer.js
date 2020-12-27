import "../../css/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-3-of-4">
          <div className="footer-links">
            <a href="/" alt="Home">
              HOME
            </a>
            <br />
            <a href="/stories" alt="Stories">
              STORIES
            </a>
            <br />
            <a href="/about" alt="About">
              ABOUT
            </a>
            <br />
            <a href="/contact-us" alt="Contact Us">
              CONTACT US
            </a>
            <br />
            <a href="/admin" alt="Admin">
              ADMIN
            </a>
            <br />
          </div>
        </div>
        <div className="col-1-of-4">
          <a href="/contact-us" alt="Read More">
            <h2>Become a Contributing Writer</h2>
          </a>
        </div>
      </div>
    </div>
  );
};
