import React, { useState } from "react";
import "../../css/stories.css";
import { useFetchStoriesData } from "../storiespage/useFetchStoriesData";
import StoriesDiv from "./StoriesDiv";
import Pagination from '../Pagination'

export function Stories(props) {
    const [data] = useFetchStoriesData();
    const [currentPage, setCurrentPage] = useState(1)
    const [storiesPerPage]  = useState(3)
    // console.log("stories", data);
    const stories = data.stories

    console.log(stories.length)

    const indexOfLastStory = currentPage * storiesPerPage
    const indexOfFirstStory = indexOfLastStory - storiesPerPage
    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory)
    const howManyPages = Math.ceil(stories.length/storiesPerPage)
    console.log("indexOfLastStory", indexOfLastStory)
    console.log("indexOfFirstStory", indexOfFirstStory)
    console.log("currentStories", currentStories)
    console.log("howManyPages", howManyPages)

    return (
        <div className="all-stories">
            <div className="stories-headers">
                <h1>All Contributed Stories</h1>
            </div>
            <div className="first-three-story-cards">
            <StoriesDiv stories={currentStories} />
            </div>
            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>
        </div>
    );
}
