import React from "react";
import "../../css/home.css";
import ThreeStories from "./ThreeStories";
import { Link } from "react-router-dom";
import { useFetchStoriesData } from "../storiespage/useFetchStoriesData";

export function Home(props) {
    const [data] = useFetchStoriesData();

    return (
        <>
            {/* {console.log("here", data)} */}
            <div className="home-image"></div>
            <div className="home-headers">
                <h1>Telling The Full American Story</h1>
                <h3>
                    COVID-19 has put a spotlight on racial disparities and
                    social injustices that plague the United States. Black,
                    Latinx, Asians and other people of color (POC) have been
                    disproportionately affected by the disease. They are the
                    frontline workers who work every day for non-livable wages,
                    little or no sick pay and minimal access to healthcare. 
                </h3> 
                <br />
                <h3>In
                    San Diego, the zip codes hardest hit by COVID-19 are black
                    and brown neighborhoods. </h3>
                {data.stories.length > 0 && (
                    <div className="latest-story-card-divs">
                        {/* {console.log("mapping", data.stories.length === 0)} */}
                        <ThreeStories stories={data.stories} />
                    </div>
                )}
                {data.stories.length === 0 && (
                    <div className="loading">
                        <h1>Loading</h1>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                )}
                <h3 className="second-h3">
                Systemic racism has left POC behind
                    to work blue collar jobs to feed, clothe and serve a
                    privileged white America. Non-white is almost synonymous
                    with non-citizen as POC have historically been deprived of
                    human rights and marginalized based on their race. The
                    culminating piece of the Stories of San Diego Project is a
                    book that will bring together the work of journalists from
                    San Diego and beyond to explore and record this historic
                    time as it unfolds.
                </h3>
            </div>
            
            <div className="home-headers-2">
            <a href="/contact-us" alt="contact-list-signup"><p>Share YOUR Story with us</p></a>
        
            </div>
        </>
    );
}
