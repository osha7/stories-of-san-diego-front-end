import React, { useReducer } from "react";
import "../../css/admin.css";
import ImageUploads from './ImageUploads'

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
        // console.log(e)
        setUserInput({
            [e.target.name]: e.target.value,
        });
    };

    const onChange = (e) => {
        e.persist()
        setUserInput({
                [e.target.name]: e.target.files[0]
        })
    }

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
                // image
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const id = data.id
            imageSubmit(e, id)
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

    const imageSubmit = (e, id) => {
        // debugger
        e.preventDefault()
        console.log("onSubmit here")
        let body = new FormData()
        body.append("image", image)
        body.append("id", id)
        fetch('http://localhost:3000/image_upload', {
            method: "PUT",
            body
        })
        .then(res => res.json())
        .then(json => {
            console.log("put fetch", json)
        })
        .catch(error => {
            console.log("Avatar upload error:", error)
        })
    }

    if (localStorage.getItem("token")) {
        return (
            <div className="stories">
                {/* {console.log("admin-dashboard", props)} */}
                <h1>Submit A Story Here</h1>
                <div className="story-form">
                    <form className="form-story-input" onSubmit={handleSubmit}>
                        <div className="si-form">
                            <label className="story-form-label">Date: </label>
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
                            <label className="story-form-label">Transcriber: </label>
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
                            <label className="story-form-label">Contributor: </label>
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
                            <label className="story-form-label">Contact Email: </label>
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
                            <label className="story-form-label">Contact Phone: </label>
                            <input
                                name="contact_phone"
                                type=""
                                value={contact_phone}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <input type="file" name="image" onChange={onChange} accept="image/*" />
                        
                        {/* <div className="si-form">
                            <label className="story-form-label">Image: </label>
                            <input
                                name="image"
                                type="text"
                                value={image}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div> */}
                        <div className="si-form">
                            <label className="story-form-label">Summary: </label>
                            <input
                                name="summary"
                                type="text"
                                value={summary}
                                onChange={handleOnChange}
                                className="story-input"
                                maxLength="50"
                                cols="3" rows="20"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="story-form-label">Story: </label> <br />
                            <textarea
                                name="story"
                                type="text"
                                cols="60" rows="20"
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
                    {/* <ImageUploads /> */}
                </div>
            </div>
        );
    } else {
        return (
            <div className="stories">
                <h1>You Must Be Logged In To View Page</h1>
            </div>
        );
    }
}
