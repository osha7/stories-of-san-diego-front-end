import React from 'react';
import '../../css/contact.css';
import StorySubmission from './StorySubmission';
import GeneralContact from './GeneralContact';
import MailChimpSignup from './MailChimpSignup';

export function Contact(props) {
    

    return (
        <div className="contact-page">
            <h1>CONTACT US</h1>
            <StorySubmission />
            <GeneralContact />
            <MailChimpSignup />
        </div>
    )
}
