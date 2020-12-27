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
        <div></div>;
      })}
      {/* {console.log("threeStories return:", latestStories)} */}
      HERE
    </>
  );
}

export default ThreeStories;
