import React, { useState, useEffect } from "react";

export function AdminDashboard(props) {
    const [state, setstate] = useState({
        date: "",
        transcriber: "",
        contributor: "",
        contact_email: "",
        contact_phone: "",
        summary: "",
        story: "",
        image: "",
    });
    const date = state.date;
    const transcriber = state.transcriber;
    const contributor = state.contributor;
    const contact_email = state.contact_email;
    const contact_phone = state.contact_phone;
    const summary = state.summary;
    const story = state.story;
    const image = state.image;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (localStorage.getItem("token")) {
        return (
            <>
                {console.log("admin-dashboard", props)}
                <h1>SUBMIT A STORY HERE</h1>
                <div>
                    <form className="story-form" onSubmit={handleSubmit}>
                        <label className="">Date:</label>
                        <input
                            name=""
                            type=""
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">transcriber</label>
                        <input
                            name="transcriber"
                            type=""
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">contributor</label>
                        <input
                            name=""
                            type="contributor"
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">contact_email</label>
                        <input
                            name=""
                            type="contact_email"
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">contact_phone</label>
                        <input
                            name="contact_phone"
                            type=""
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">summary</label>
                        <input
                            name=""
                            type="summary"
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">story</label>
                        <input
                            name=""
                            type="story"
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>

                        <label className="">image</label>
                        <input
                            name=""
                            type="image"
                            value=""
                            onChange=""
                            className=""
                            required
                        ></input>
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <div>
                <h1>You Must Be Logged In To View Page</h1>
            </div>
        );
    }
}
