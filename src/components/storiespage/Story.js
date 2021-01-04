import { useFetchStory } from "../storiespage/useFetchStory";

function Story(props) {
    // console.log("fetchStory", props)
    const id = props.match.params.id;

    const [data] = useFetchStory(id);

    if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                STORY! WHAATTTTT! So Happy
                {console.log("individual story", data)}
            </div>
        );
    }
}

export default Story;
