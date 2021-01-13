import { useState, useEffect } from "react";
import { API_URL } from '../../constants'

export function useFetchStory(id) {
    const [data, setData] = useState({ stories: [] });
    const storiesURL = "/stories/";
    const story_id = id;

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(API_URL + storiesURL + story_id);
            const fetchData = await response.json();
            setData(fetchData);
        };
        fetchStory();
    }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

    return [data];
}
