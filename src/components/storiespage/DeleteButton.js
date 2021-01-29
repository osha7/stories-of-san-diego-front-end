import React from "react";
// import { UseFetchDeleteStory } from "./useFetchDeleteStory";
import { API_URL } from "../../constants";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const DeleteButton = (props) => {
    
    const storyURL = `/stories/${props.id}`;

    
    const handleOnClick = () => {
        confirmAlert({
            title: "CAUTION !!!!",
            message:
                "Are you absolutely sure you want to delete this story?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteSection(),
                },
                {
                    label: "No",
                    // onClick: () => props.history.push(`/stories/${id}`),
                    onClick: () => alert('Phew! This story will not be deleted.')
                },
            ],
        });
    };

    const deleteSection = () => {
        if (localStorage.getItem("token")) {
            const fetchStory = async () => {
                const response = await fetch(API_URL + storyURL, {
                    method: "DELETE"
                })
                const fetchData = await response.json();
                console.log("fetchData Delete", fetchData)
            };
            fetchStory()
        }
        props.history.push("/stories")
    }

    return (
        <button className="btn-edit" onClick={handleOnClick}>
            DELETE STORY
        </button>
    );
};

export default DeleteButton;
