// 1

import React from 'react';
import '../../css/contact.css';
// import { Link } from "react-router-dom";
import ContactModal from '../../containers/ContactModal'


function StorySubmission(props) {

    const triggerText = ">"
    return (
        <div className="story-submission-div">
            <div className="story-submission">
                <h4 className="header1">STORY SUBMISSON</h4>
                <span>Stories of San Diego is collecting stories of people affected by racial inequities and COVID-19.</span>
            </div>
            <div>
                {/* <button className="story-submission-btn">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button> */}
                {/* <Link to="/story-form">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Link> */}
                < ContactModal triggerText={triggerText}/>
            </div>
        </div>
    );
}

export default StorySubmission;
