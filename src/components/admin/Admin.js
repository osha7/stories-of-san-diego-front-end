import "../../css/admin.css";
import LoginForm from './LoginForm'
// import SignupForm from './Signup'
import React, { useState, useEffect } from 'react'
import { AdminDashboard } from './AdminDashboard';
import { API_URL } from '../../constants'

export function Admin(props) {

    const [user, setUser] = useState({})
    // const [form, setForm] = useState('')

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch(API_URL + '/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
        }
    }, [])

    const handleLogin = (user) => {
        setUser(user)
        // props.history.push("/admin-dashboard")
    }

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        setUser({})
        // props.history.push("/admin")
    }

    // const handleAuthClick = () => {
    //     const token = localStorage.getItem("token")
    //     fetch(API_URL + '/user_is_authorized', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log("handleAuthClick", data))
    // }


    if (user === undefined || !user.username) {
        return (
            <>
                <LoginForm handleLogin={handleLogin} handleLogout={handleLogout}/>
            </>
        );
    } else {
        return (
            <>
                {/* <button onClick={handleLogout}>Log Out</button> */}
                <button className="logout-button" onClick={handleLogout}>Log Out</button>
                <AdminDashboard user={user}/>
            </>
        )
    }
}
