import React, { useState } from "react";
import "../../css/stories.css";
import { useFetchStoriesData } from "../storiespage/useFetchStoriesData";
import StoriesDiv from "./StoriesDiv";
import Pagination from "../Pagination";

export function Stories(props) {
    const [data] = useFetchStoriesData();
    const [currentPage, setCurrentPage] = useState(1);
    const [storiesPerPage] = useState(4);

    const stories = data.stories;

    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerms, setSearchTerms] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    let currentStories;

    if (searchResults.length === 0) {
        currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);
    } else {
        currentStories = searchResults.slice(
            indexOfFirstStory,
            indexOfLastStory
        );
    }

    const howManyPages = Math.ceil(stories.length / storiesPerPage);
    // console.log("indexOfLastStory", indexOfLastStory)
    // console.log("indexOfFirstStory", indexOfFirstStory)
    // console.log("currentStories", currentStories)
    // console.log("howManyPages", howManyPages)
    // console.log("story props", props)

    const storiesFilterOnChange = (e) => {
        e.preventDefault();
        let values = e.target.value;
        setSearchTerm(values);
        let valuesSplit = values.split(" ");
        console.log("valuesSplit", valuesSplit);
        setSearchTerms(valuesSplit);

        const filteredStories = [];
        if (searchTerms.length > 0) {
            for (let i = 0; i < searchTerms.length; i++) {
                filteredStories.push(
                    ...data.stories.filter(
                        (story) =>
                            story.contributor
                                .toLowerCase()
                                .includes(searchTerms[i].toLowerCase()) ||
                            story.story
                                .toLowerCase()
                                .includes(searchTerms[i].toLowerCase()) ||
                            story.summary
                                .toLowerCase()
                                .includes(searchTerms[i].toLowerCase())
                    )
                );
            }
            setSearchResults(filteredStories);
        }
    };

    return (
        <div className="all-stories">
            <div className="search-articles__stories">
                <div className="wrapper__stories">
                    <div className="container__stories">
                        <div className="search_wrap__stories search_wrap_2__stories">
                            <div className="search_box__stories">
                                <div className="btn btn_common__stories">
                                    <i className="fa fa-search"></i>
                                </div>
                                <input
                                    type="text"
                                    className="input"
                                    value={searchTerm}
                                    placeholder="Search For Stories..."
                                    onChange={storiesFilterOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-three-story-cards">
                <StoriesDiv stories={currentStories} />
            </div>
            <Pagination
                pages={howManyPages}
                setCurrentPage={setCurrentPage}
                history={props.history}
            />
        </div>
    );
}
