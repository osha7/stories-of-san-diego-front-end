import React, { useState } from "react";
import { useFetchStoriesData } from '../storiespage/useFetchStoriesData';
import '../../css/search.css'
import { Link } from 'react-router-dom';


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
            <li style={{ listStyleType: "none" }} key={story.id} >
                {/* <p><strong>Story Submitted By: </strong>{story.contributor}</p>
                <p><strong>Story Summary: </strong>{story.summary}</p>
                <div aria-hidden="true">__________</div> */}
                <div className="recent-stories" key={story.id}>
                    <div className="button-container">
                        <img
                            className="story-image"
                            src={story.image}
                            alt={story.contributor}
                        />
                        {/* {console.log("stories", story)} */}
                        <Link to={'/stories/' + story.id} story_id={story.id} >Read More</Link>
                        {/* <a href="#" alt="Read More">
                            Read More
                        </a> */}
                    </div>
                    <div className="story-summary">
                        <h4>{story.summary}</h4>
                    </div>
                </div>
            </li>
        )
    })

    if (stories.length === 0) {
        return (
            <div className="search-articles">
                <div class="wrapper" style={{"height" : "400px"}}>
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
            </div>
        )
    } else {
        return (
            <div className="search-articles">
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
                
                    <div className="search-container">
                        <ul className="search-story-cards">
                            {stories}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
