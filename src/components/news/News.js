import React from 'react';
import '../../css/news.css';
import { Link } from 'react-router-dom';

function News(props) {
    return (
        <div className="news-page">
            <div className="under-construction">
                <h1>UNDER CONSTRUCTION</h1>
                <Link to="/contact-us" alt="contact-list-signup"><p>Sign up to our contact list to receive updates.</p></Link>
            </div>
            
        </div>
    );
}

export default News;