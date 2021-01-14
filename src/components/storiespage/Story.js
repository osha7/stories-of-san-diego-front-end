import { useFetchStory } from "../storiespage/useFetchStory";
import moment from "moment";
import EditStoryContainer from "./modal/EditStoryContainer";

function Story(props) {
    const id = props.match.params.id;
 

    const [data] = useFetchStory(id);

    const triggerText = "Edit Story";

    const onSubmit = (event) => {
        event.preventDefault(event);
    };

    if (data.story) {
        return (
            <div>
                {/* {console.log("individual story", data.story)} */}

                <div className="indiv-story-image">
                    <img
                        src={data.story.image}
                        alt={data.story.contributor}
                        className="indiv-story-image__image"
                    />
                </div>
                <div className="indiv-story-image__header">
                    <h2>{data.story.summary}</h2>
                </div>
                <br />
                <div className="indiv-story-image__contributor">
                    <span className="indiv-story-image__contributor">
                        {data.story.contributor}
                    </span>
                </div>
                <br />
                <div className="indiv-story-image__story">
                    <p>{data.story.story}</p>

                    <br />
                    <span className="indiv-story-image__date">
                        Originally Posted:{" "}
                        {moment
                            .parseZone(data.story.date)
                            .format("MMMM Do, YYYY")}
                    </span>
                    <br />
                    <span className="indiv-story-image__editor">
                        Edited By: {data.story.transcriber}
                    </span>
                    {localStorage.getItem("token") && (
                        <EditStoryContainer
                            data={data}
                            triggerText={triggerText}
                            onSubmit={onSubmit}
                        />
                    )}
                </div>
                <br />
            </div>
        );
    } else {
        return <h2>Loading...</h2>;
    }
}

export default Story;
