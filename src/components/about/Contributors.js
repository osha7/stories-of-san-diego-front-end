import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants'

function Contributors(props) {

    const [contributorsData, setContributorsData] = useState([])

    useEffect(() => {
        const fetchContributors = async () => {
            const response = await fetch(API_URL + "/contributors");
            const fetchData = await response.json();
            setContributorsData(fetchData.contributors);
        };
        fetchContributors();
    }, []);

        const contributors1 = contributorsData.map ( contributor => {
            return(
                <div key={contributor.id}>
                    <section className="individual-cards" >
                        <img src={contributor.image} alt="" className="individual-image" />
                        <span>
                        <h2>{contributor.full_name}</h2>
                        <p className="">{contributor.bio}</p>
                        </span>
                    </section>
                    <div className="about-divider-2"></div>
                </div>
            )
        })
        if (contributors1) {
            return (
                <>
                    {contributors1}
                </>
            );
        } else {
            return (
                <div className="loading">
                    <h1>Loading</h1>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            )
        }
        
}

export default Contributors;