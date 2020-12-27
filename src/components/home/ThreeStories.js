import React, { useState } from "react";

function ThreeStories(props) {
  const latestStory = props.stories[props.stories.length - 1];
  const secondLatestStory = props.stories[props.stories.length - 2];
  const thirdLatestStory = props.stories[props.stories.length - 3];

  const [latestStories] = useState([
    latestStory,
    secondLatestStory,
    thirdLatestStory,
  ]);

  return (
    <>
      {latestStories.map((story) => {
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

export default ThreeStories;
