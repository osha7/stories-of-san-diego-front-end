
import { useState, useEffect } from "react";
import { API_URL } from '../../constants'
    
export function useFetchStoriesData() {
    const [data, setData] = useState({ stories: [] });

    useEffect(() => {
        // console.log("here")
        const fetchStories = async () => {
            const response = await fetch(API_URL + "/stories");
            const fetchData = await response.json();
            setData(fetchData);
        };
        // console.log(data)
        fetchStories();
    }, []);

    return [ data ]
}
