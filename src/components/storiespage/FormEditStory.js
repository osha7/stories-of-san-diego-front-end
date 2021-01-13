import React, { useReducer } from "react";
import { API_URL } from '../../constants';
import moment from "moment";

function FormEditStory(props) {

    const storyData = props.data.story

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}), {
            id: storyData.id,
            date: storyData.date,
            transcriber: storyData.transcriber,
            contributor: storyData.contributor,
            contact_email: storyData.contact_email,
            contact_phone: storyData.contact_phone,
            summary: storyData.summary,
            story: storyData.story
        }
    );
    const id = userInput.id;
    const date = userInput.date;
    const transcriber = userInput.transcriber;
    const contributor = userInput.contributor;
    const contact_email = userInput.contact_email;
    const contact_phone = userInput.contact_phone;
    const summary = userInput.summary;
    const story = userInput.story;

    const handleOnChange = (e) => {
        // console.log(e)
        setUserInput({
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API_URL + `/stories/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                transcriber,
                contributor,
                contact_email,
                contact_phone,
                summary,
                story,
            })
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            console.log("props", props)

            if (data.id) {
                setTimeout(function(){ alert("Thank you. Your story has been updated.") }, 500);
                if (props) {
                    setTimeout(function(){ props.closeModal() }, 1000);
                    
                }
            } else {
                alert(data.error)
            }

        })
        

    };

    const momentDate = moment.parseZone(date).format("MMMM Do, YYYY")

    return (
        <div className="stories">
                {console.log("admin-dashboard", storyData)}
                <h1>Edit Story</h1>
                <div className="story-form">
                    <form className="form-story-input" onSubmit={handleSubmit}>
                        <div className="si-form">
                            <label className="story-form-label">Submission Date: {momentDate}</label>
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
                                type="text"
                                value={contact_phone}
                                onChange={handleOnChange}
                                className="story-input"
                                required
                            />
                        </div>
                        <div className="si-form">
                            <label className="story-form-label">Image: Unable to change image here.  Please go back to story and select 'Edit Image' button.</label>
                            
                        </div>
    
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
                            <input type="submit" className="form-button" value="Submit Edits" />
                        </div>
                        
                    </form>
                </div>
            </div>
    );
}

export default FormEditStory;