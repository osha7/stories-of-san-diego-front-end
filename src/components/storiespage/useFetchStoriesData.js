
import { useState, useEffect } from "react";
import { API_URL } from '../../constants'
    
export function useFetchStoriesData() {
    const [data, setData] = useState({ stories: [] });

    useEffect(() => {
        const fetchStories = async () => {
            const response = await fetch(API_URL + "/stories");
            const fetchData = await response.json();
            setData(fetchData);
        };
        fetchStories();
    }, []);

    return [ data ]
}
