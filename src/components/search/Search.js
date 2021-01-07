import React, { useState } from "react";
import { useFetchStoriesData } from '../storiespage/useFetchStoriesData';
import '../../css/search.css'

function Search() {
    
    const [data] = useFetchStoriesData()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerms, setSearchTerms] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const handleOnChange = (e) => {
        let values = e.target.value
        setSearchTerm(values)
        let valuesSplit = values.split(" ")
        console.log("valuesSplit", valuesSplit)
        setSearchTerms(valuesSplit)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
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
            {/* <div className="search-box">
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
            </div> */}
            <div class="wrapper">
                <div class="container">
                    <div class="search_wrap search_wrap_2">
                        <div class="search_box">
                            <div class="btn btn_common">
                                <i class="fa fa-search"></i>
                            </div>
                            <form onSubmit={handleOnSubmit}>
                            <input type="search" class="input" value={searchTerm} placeholder="Search For Stories..." onChange={handleOnChange}/>
                            </form>
                        </div>
                    </div>
                </div>
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
