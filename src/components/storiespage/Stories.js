import React, { useState } from "react";
import "../../css/stories.css";
import { useFetchStoriesData } from "../storiespage/useFetchStoriesData";
import StoriesDiv from "./StoriesDiv";
import Pagination from '../Pagination'

export function Stories(props) {
    const [data] = useFetchStoriesData();
    const [currentPage, setCurrentPage] = useState(1)
    const [storiesPerPage]  = useState(12)

    const stories = data.stories

    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerms, setSearchTerms] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const indexOfLastStory = currentPage * storiesPerPage
    const indexOfFirstStory = indexOfLastStory - storiesPerPage
    let currentStories

    if (searchResults.length === 0) {
        currentStories = stories.slice(indexOfFirstStory, indexOfLastStory)
    } else {
        currentStories = searchResults.slice(indexOfFirstStory, indexOfLastStory)
    }

    const howManyPages = Math.ceil(stories.length/storiesPerPage)
    // console.log("indexOfLastStory", indexOfLastStory)
    // console.log("indexOfFirstStory", indexOfFirstStory)
    // console.log("currentStories", currentStories)
    // console.log("howManyPages", howManyPages)
    // console.log("story props", props)

    const storiesFilterOnChange = (e) => {
        e.preventDefault();
        let values = e.target.value
        setSearchTerm(values)
        let valuesSplit = values.split(" ")
        console.log("valuesSplit", valuesSplit)
        setSearchTerms(valuesSplit)

        const filteredStories = []
        if (searchTerms.length > 0) {
            for (let i = 0; i < searchTerms.length; i++) {
                filteredStories.push(...data.stories.filter(story => story.contributor.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                story.story.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                story.summary.toLowerCase().includes(searchTerms[i].toLowerCase())
                ))
            }
            setSearchResults(filteredStories)
        }
        
    };

    return (
        <div className="all-stories">
            <div className="search-articles">
                <div class="wrapper">
                    <div class="container">
                        <div class="search_wrap search_wrap_2">
                            <div class="search_box">
                                <div class="btn btn_common">
                                    <i class="fa fa-search"></i>
                                </div>
                                <input type="search" class="input" value={searchTerm} placeholder="Search For Stories..." onChange={storiesFilterOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-three-story-cards">
            <StoriesDiv stories={currentStories} />
            </div>
            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} history={props.history}/>
        </div>
    );
}
