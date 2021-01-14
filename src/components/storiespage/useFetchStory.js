
// this custom hook is not in use at this time, bc in Story.js I was unable 
// to get the data update to rerender the component when this hook was being used

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
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return [data];
}
