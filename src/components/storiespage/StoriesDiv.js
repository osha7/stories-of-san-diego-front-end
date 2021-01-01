import React from "react";

function StoriesDiv(props) {
    console.log(props);
    
    return (
        <>
            {props.stories.map((story) => {
                //   console.log(story.summary),
                return (
                    <div className="recent-stories" key={story.id}>
                        <div className="button-container">
                            <img
                                className="story-image"
                                src={story.image}
                                alt={story.contributor}
                            />
                            <a href="#" alt="Read More">
                                Read More
                            </a>
                        </div>
                        <div className="story-summary">
                            <h4>{story.summary}</h4>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default StoriesDiv;
