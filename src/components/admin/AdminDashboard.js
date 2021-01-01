import React, { useReducer } from "react";
import "../../css/admin.css";

export function AdminDashboard(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}), {
        date: "",
        transcriber: "",
        contributor: "",
        contact_email: "",
        contact_phone: "",
        summary: "",
        story: "",
        image: "",
    });
    const date = userInput.date;
    const transcriber = userInput.transcriber;
    const contributor = userInput.contributor;
    const contact_email = userInput.contact_email;
    const contact_phone = userInput.contact_phone;
    const summary = userInput.summary;
    const story = userInput.story;
    const image = userInput.image;

    const handleOnChange = (e) => {
        setUserInput({
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log("Dashboard Submit", userInput)
        e.preventDefault();
        // debugger
        fetch('http://localhost:3000/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                date,
                transcriber,
                contributor,
                contact_email,
                contact_phone,
                summary,
                story,
                image
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        setUserInput({
            date: "",
            transcriber: "",
            contributor: "",
            contact_email: "",
            contact_phone: "",
            summary: "",
            story: "",
            image: "",
        })
    };

    if (localStorage.getItem("token")) {
        return (
            <>
                {/* {console.log("admin-dashboard", props)} */}
                <h1>SUBMIT A STORY HERE</h1>
                <div className="story-form">
                    <form className="form-story-input" onSubmit={handleSubmit}>
                        <div className="si-form">
                            <label className="">Date: </label>
                            <input
                                name="date"
                                type="date"
                                value={date}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Transcriber: </label>
                            <input
                                name="transcriber"
                                type="text"
                                value={transcriber}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Contributor: </label>
                            <input
                                name="contributor"
                                type="text"
                                value={contributor}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Contact Email: </label>
                            <input
                                name="contact_email"
                                type="email"
                                value={contact_email}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Contact Phone: </label>
                            <input
                                name="contact_phone"
                                type=""
                                value={contact_phone}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Image: </label>
                            <input
                                name="image"
                                type="text"
                                value={image}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Summary: </label>
                            <input
                                name="summary"
                                type="text"
                                value={summary}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="">Story: </label> <br />
                            <textarea
                                name="story"
                                type="text"
                                cols="60" rows="10"
                                value={story}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            ></textarea>
                        </div>
                        <div className="si-form">
                            <input type="submit" className="form-button" value="Submit Story" />
                        </div>
                        
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
