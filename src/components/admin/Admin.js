import "../../css/admin.css";
import LoginForm from './LoginForm'
// import SignupForm from './Signup'
import React, { useState, useEffect } from 'react'

export function Admin(props) {

    const [user, setUser] = useState({})
    // const [form, setForm] = useState('')

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("token1", token)
        if (token) {
            fetch('http://localhost:3000/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                setUser(data)
            })
        }
    }, [])

    const handleLogin = () => {
        setUser(user)
    }

    // const handleAuthClick = () => {
    //     console.log('Here')
    //     // debugger
    //     const token = localStorage.getItem("token")
    //     fetch('http://localhost:3000/user_is_authorized', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log("handleAuthClick", data))
    // }


    return (
        <>
        <LoginForm handleLogin={handleLogin}/>
        {/* <SignupForm handleLogin={handleLogin}/> */}
        {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        </>
    );
}
