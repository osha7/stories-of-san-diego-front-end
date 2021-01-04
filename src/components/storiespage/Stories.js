import React from "react";
import "../../css/stories.css";
import { useFetchStoriesData } from "../storiespage/useFetchStoriesData";
import StoriesDiv from "./StoriesDiv";

export function Stories(props) {
    const [data] = useFetchStoriesData();
    // console.log("stories", data);
    return (
        <div className="all-stories">
            <div className="stories-headers">
                <h1>All Contributed Stories</h1>
            </div>
            <div className="first-three-story-cards">
            <StoriesDiv stories={data.stories} />
            </div>
        </div>
    );
}
