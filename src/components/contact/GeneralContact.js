import React from 'react';
import '../../css/contact.css';
import { Link } from "react-router-dom";

function GeneralContact(props) {
    return (
        <div className="story-submission-div">
            <div className="story-submission">
                <h4 className="header1">GENERAL CONTACT</h4>
                <span>Send us a message directly.  We can't wait to hear from you.</span>
            </div>
            <div className="story-form-container">
                <Link to="/contact-form">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Link>
                {/* < ContactModal triggerText={triggerText}/> */}
            </div>
        </div>
    );
}

export default GeneralContact;