import moment from "moment";
import EditStoryContainer from "./modal/EditStoryContainer";
import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants'

function Story(props) {
    const id = props.match.params.id;

    const triggerText = "Edit Story";

    const [data, setData] = useState({ stories: [] });
    const storiesURL = "/stories/";
    const story_id = id;

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(API_URL + storiesURL + story_id);
            const fetchData = await response.json();
            // console.log(fetchData.story)
            setData(fetchData.story);
        };
        fetchStory();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit = (data) => {
        setData(data)
    };

    if (data) {
        return (
            <div>
                {console.log("story", props.history)}
                <div className="indiv-story-image">
                    <img
                        src={data.image}
                        alt={data.contributor}
                        className="indiv-story-image__image"
                    />
                </div>
                <div className="indiv-story-image__header">
                    <h2>{data.summary}</h2>
                </div>
                <br />
                <div className="indiv-story-image__contributor">
                    <span className="indiv-story-image__contributor">
                        {data.contributor}
                    </span>
                </div>
                <br />
                <div className="indiv-story-image__story">
                    <p>{data.story}</p>

                    <br />
                    <span className="indiv-story-image__date">
                        Originally Posted:{" "}
                        {moment
                            .parseZone(data.date)
                            .format("MMMM Do, YYYY")}
                    </span>
                    <br />
                    <span className="indiv-story-image__editor">
                        Edited By: {data.transcriber}
                    </span>
                    {localStorage.getItem("token") && (
                        <EditStoryContainer
                            data={data}
                            triggerText={triggerText}
                            onSubmit={onSubmit}
                            history={props.history}
                        />
                    )}
                </div>
                <br />
            </div>
        );
    } else {
        return <h2>Loading...</h2>;
    }
}

export default Story;
