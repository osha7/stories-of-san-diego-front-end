import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants'

function Contributors(props) {

    const [contributorsData, setContributorsData] = useState([])

    useEffect(() => {
        // console.log("here")
        const fetchContributors = async () => {
            const response = await fetch(API_URL + "/contributors");
            const fetchData = await response.json();
            setContributorsData(fetchData.contributors);
        };
        // console.log(data)
        fetchContributors();
    }, []);

        const contributors1 = contributorsData.map ( contributor => {
            return(
                <>
                    <section className="individual-cards">
                        <img src={contributor.image} alt="" className="individual-image" />
                        <span>
                        <h2>{contributor.full_name}</h2>
                        <p className="">{contributor.bio}</p>
                        </span>
                    </section>
                    <div className="about-divider-2"></div>
                </>
            )
        })
        return (
            <>
                {contributors1}
            </>
        );
    
}

export default Contributors;