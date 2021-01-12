import React from "react";
import "../../css/contact.css";
import { Link } from "react-router-dom";

function MailChimpSignup() {
    return (
        <div className="story-submission-div">
            <div className="story-submission">
                <h4 className="header1">SIGNUP TO CONTACT LIST</h4>
                <span>
                    Signup to receive periodic info on Stories about San Diego.
                    We promise, we won't flood your inbox!
                </span>
            </div>
            <div className="story-form-container">
                <Link to="/mailchimp-form">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Link>
                {/* < ContactModal triggerText={triggerText}/> */}
            </div>
        </div>
    );
}

export default MailChimpSignup;
