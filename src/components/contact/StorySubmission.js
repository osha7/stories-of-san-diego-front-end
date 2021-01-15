// 1

import React from 'react';
import '../../css/contact.css';
import { Link } from "react-router-dom";
// import ContactModal from '../../containers/ContactModal'


function StorySubmission(props) {

    // const triggerText = ">"
    return (
        <div className="story-submission-div">
            <div className="story-submission">
                <h4 className="header1">STORY SUBMISSON  / Envía Tu Historia</h4>
                <span>Stories of San Diego is collecting stories to preserve and record the lives of people affected by racial inequities and COVID-19.

This is a way for our voices to be heard and for us to share and connect with one another. There is no limit to the length of your story.

Talk about your challenges, your hopes and triumphs. 
</span>
            </div>
            <div className="story-form-container">
                <Link to="/story-form">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Link>
                {/* < ContactModal triggerText={triggerText}/> */}
            </div>
        </div>
    );
}

export default StorySubmission;
