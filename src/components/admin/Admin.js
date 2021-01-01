import "../../css/admin.css";
import LoginForm from './LoginForm'
// import SignupForm from './Signup'
import React, { useState, useEffect } from 'react'
import { AdminDashboard } from './AdminDashboard';

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
                // console.log("123", props)
                // props.history.push("/admin-dashboard")
                
            })
        }
    }, [])

    const handleLogin = (user) => {
        setUser(user)
        // props.history.push("/admin-dashboard")
    }

    const handleLogout = (e) => {
        e.preventDefault()
        console.log("logout")
        localStorage.removeItem("token")
        setUser({})
        // props.history.push("/admin")
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


    if (!user.username) {
        return (
            <>
            {console.log("NO user", user.username)}
                <LoginForm handleLogin={handleLogin} handleLogout={handleLogout}/>
                {/* <button onClick={handleLogout}>Log Out</button> */}
                {/* <SignupForm handleLogin={handleLogin}/> */}
                {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
            </>
        );
    } else {
        return (
            <>
            {console.log("have a user", user)}
                {/* <button onClick={handleLogout}>Log Out</button> */}
                <button className="logout-button" onClick={handleLogout}>Log Out</button>
                <AdminDashboard user={user}/>
            </>
        )
    }
}
