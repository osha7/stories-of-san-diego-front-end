import React from "react";
import Mailchimp from "react-mailchimp-form";

function MailchimpForm(props) {

    // const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY;
    return (
        <div className="mail-chimp-form">
            <h2>SignUp For Our Emails</h2>
            <Mailchimp
                action={process.env.REACT_APP_MAILCHIMP_KEY}
                className="chimp-forms"
                fields={[
                    {
                        name: "FNAME",
                        placeholder: "First Name",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "LNAME",
                        placeholder: "Last Name",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "EMAIL",
                        placeholder: "Email",
                        type: "email",
                        required: true,
                    }
                ]}
            />
        </div>
    );
}

export default MailchimpForm;