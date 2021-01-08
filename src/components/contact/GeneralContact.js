import React from 'react';
import '../../css/contact.css';

function GeneralContact(props) {
    return (
        <div className="story-submission-div">
            <div className="story-submission">
                <h4 className="header1">GENERAL CONTACT</h4>
                <span>Send us an message directly.  We can't wait to hear from you.</span>
            </div>
            <div>
                <button className="story-submission-btn">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default GeneralContact;