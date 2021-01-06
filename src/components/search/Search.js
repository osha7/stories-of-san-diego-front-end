import React, { useState } from "react";

function Search(props) {

    const API_URL = "http://localhost:3000"
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])
    
    // const query = searchTerm.split(" ").join('').toLowerCase()

    const searchURL = "/search.json?q=" + searchTerm

    const handleOnChange = (e) => {
        // debugger
        setSearchTerm(e.target.value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const fetchSearchResults = async () => {
            const response = await fetch(API_URL + searchURL)
            const fetchSearchData = await response.json()
            setSearchResults(fetchSearchData.stories)
        }
        fetchSearchResults()
        
    };
    console.log("results", searchResults)

    // const retrievingQuery = (searchTerm) => {
    //     // debugger
    //     // let newQueryString = searchTerm.split;
    // };
    return (
        <div className="search-articles">
            <div className="search-box">
                <form onSubmit={handleOnSubmit}>
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
        </div>
    );
}

export default Search;
