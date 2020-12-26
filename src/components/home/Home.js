import React, {useState, useEffect} from 'react'
import '../../css/home.css';

export function Home(props) {
    const [data, setData] = useState({stories: []})

    const API_URL = "http://localhost:3000/"

    useEffect(async () => {
        console.log("here")
        const response = await fetch(API_URL + "stories")
        const fetchData = await response.json()
        setData(fetchData)
        console.log(data)
    }, [])
    

    return (
        <>
            <div className="home-image">
            </div>
            <div className="home-content" >
                <h1 className="home-header">Telling The Full American Story</h1>  
                <h3>Justo quando sit ne, menandri repudiare ea est, at minimum constituam cotidieque pri. An tempor aperiri nostrum eam.</h3>
                <h3 className="second-h3"> Zril accommodare quo no, pri equidem suavitate persequeris ut, eu adolescens omittantur consectetuer mea.</h3>
            </div>
        </>
    )
}
