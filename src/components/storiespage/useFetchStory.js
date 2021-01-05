import { useState, useEffect } from "react";

export function useFetchStory(id) {
    const [data, setData] = useState({ stories: [] });

    const story_id = id;

    const API_URL = "http://localhost:3000/stories/";

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(API_URL + story_id);
            const fetchData = await response.json();
            setData(fetchData);
        };
        fetchStory();
    });

    return [data];
}
