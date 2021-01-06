import React, { useState } from "react";
import { useFetchStoriesData } from '../storiespage/useFetchStoriesData';

function Search() {
    
    const [data] = useFetchStoriesData()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerms, setSearchTerms] = useState([])
    const [searchResults, setSearchResults] = useState([])
    
    // const query = searchTerm.split(" ").join('').toLowerCase()
    // console.log("search data", data.stories)
    
    const API_URL = "http://localhost:3000"
    const searchURL = "/search.json?q=" + searchTerm

    const handleOnChange = (e) => {
        // debugger
        let values = e.target.value
        setSearchTerm(values)
        let valuesSplit = values.split(" ")
        console.log("valuesSplit", valuesSplit) // ["fun", "and"]
        setSearchTerms(valuesSplit)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // const fetchSearchResults = async () => {
        //     const response = await fetch(API_URL + searchURL)
        //     const fetchSearchData = await response.json()
        //     setSearchResults(fetchSearchData.stories)
        // }
        // fetchSearchResults()
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
    // console.log("results", searchResults)

    // const retrievingQuery = (searchTerm) => {
    //     // debugger
    //     // let newQueryString = searchTerm.split;
    // };

    const stories = searchResults.map(story => {
        return (
            <li style={{ listStyleType: "none" }} key={story.id}>
                <p><strong>Story Submitted By: </strong>{story.contributor}</p>
                <p><strong>Story Summary: </strong>{story.summary}</p>
                <div aria-hidden="true">__________</div>
            </li>
        )
    })
    return (
        <div className="search-articles">
            <div className="search-box">
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="searchTerm">Search:</label>
                    <input
                        className="search-input"
                        name="searchTerm"
                        type="search"
                        value={searchTerm}
                        onChange={handleOnChange}
                        placeholder="Search For Stories..."
                    />
                    <a className="search-btn" onClick={handleOnSubmit}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </form>
            </div>
            <div className="search-container">
                <ul>
                    {stories}
                </ul>
            </div>
        </div>
    );
}

export default Search;
