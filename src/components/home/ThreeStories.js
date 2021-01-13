import React, { useState } from "react";
import StoriesDiv from '../storiespage/StoriesDiv'

function ThreeStories(props) {
  const latestStory = props.stories[0];
  const secondLatestStory = props.stories[1];
  const thirdLatestStory = props.stories[2];

  const [latestStories] = useState([
    latestStory,
    secondLatestStory,
    thirdLatestStory,
  ]);

  return (
    <>
    {console.log(props.stories[0])}
      <StoriesDiv stories={latestStories} />
    </>
  );
}

export default ThreeStories;
