
import { useState, useEffect } from "react";
    
export function useFetchStoriesData() {
    const [data, setData] = useState({ stories: [] });
    
    const API_URL = "http://localhost:3000/";

    useEffect(() => {
        // console.log("here")
        const fetchStories = async () => {
            const response = await fetch(API_URL + "stories");
            const fetchData = await response.json();
            setData(fetchData);
        };
        // console.log(data)
        fetchStories();
    }, []);

    return [ data ]
}
