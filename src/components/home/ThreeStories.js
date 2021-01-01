import React, { useState } from "react";
import StoriesDiv from '../storiespage/StoriesDiv'

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
      <StoriesDiv latestStories={latestStories} />
    </>
  );
}

export default ThreeStories;
