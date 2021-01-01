import React, { useState, useEffect } from "react";
import "../../css/home.css";
import ThreeStories from "./ThreeStories";
import { Link } from "react-router-dom";
import{ useFetchStoriesData } from '../storiespage/useFetchStoriesData'

export function Home(props) {
    const [data] = useFetchStoriesData()
    console.log(data)

    return (
        <>
            {/* {console.log("here", data)} */}
            <div className="home-image"></div>
            <div className="home-headers">
                <h1>Telling The Full American Story</h1>
                <h3>
                    Justo quando sit ne, menandri repudiare ea est, at minimum
                    constituam cotidieque pri. An tempor aperiri nostrum eam.
                </h3>
                <h3 className="second-h3">
                    Zril accommodare quo no, pri equidem suavitate persequeris
                    ut, eu adolescens omittantur consectetuer mea.
                </h3>
            </div>
            {data.stories.length > 0 && (
                <div className="first-three-story-cards">
                    {/* {console.log("mapping", data.stories.length === 0)} */}
                    <ThreeStories stories={data.stories} />
                </div>
            )}
            <div className="home-headers-2">
                <Link to="/contact-us">
                    <h3>Share YOUR Story with us</h3>
                </Link>
            </div>
        </>
    );
}
