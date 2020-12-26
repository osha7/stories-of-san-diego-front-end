import React from 'react';

function ThreeStories(props) {

    
    return (
        <div>
            HERE
            {console.log("these props", props.stories[props.stories.length - 1])}
        </div>
    );
}

export default ThreeStories;