import React, { useState } from "react";
import { useFetchStoriesData } from '../storiespage/useFetchStoriesData';
import '../../css/search.css'
import { Link } from 'react-router-dom';


function Search() {
    
    const [data] = useFetchStoriesData()
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTerms, setSearchTerms] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [sorryMessage, setSorryMessage] = useState("")

    const handleOnChange = (e) => {
        let values = e.target.value
        setSearchTerm(values)
        let valuesSplit = values.split(" ")
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
            if (filteredStories.length === 0) {
                setSorryMessage('Sorry. There are no stories fitting that description.')
            }
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
                        <Link to={'/stories/' + story.id} story_id={story.id} >Read More</Link>
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
            <div className="search-articles1">
                <div className="wrapper" style={{"height" : "400px"}}>
                    <div className="container">
                        <div className="search_wrap search_wrap_2">
                            <div className="search_box">
                                <div className="btn btn_common">
                                    <i className="fa fa-search"></i>
                                </div>
                                <form onSubmit={handleOnSubmit}>
                                <input type="search" className="input" value={searchTerm} placeholder="Search For Stories..." onChange={handleOnChange}/>
                                </form>
                            </div>
                            {sorryMessage && (
                                <div>{sorryMessage}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div classNameName="search-articles">
                <div className="wrapper">
                    <div className="container">
                        <div className="search_wrap search_wrap_2">
                            <div className="search_box">
                                <div className="btn btn_common">
                                    <i className="fa fa-search"></i>
                                </div>
                                <form onSubmit={handleOnSubmit}>
                                <input type="search" className="input" value={searchTerm} placeholder="Search For Stories..." onChange={handleOnChange}/>
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
