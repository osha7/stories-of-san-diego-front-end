import React from "react";
import "../../css/admin.css";
import FormSubmitStory from '../storiespage/FormSubmitStory'

export function AdminDashboard(props) {
    

    if (localStorage.getItem("token")) {
        return (
            <>
            <FormSubmitStory  />
            </>
        );
    } else {
        return (
            <div className="stories">
                <h1>You Must Be Logged In To View Page</h1>
            </div>
        );
    }
}
