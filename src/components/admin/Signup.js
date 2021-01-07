import React, { useState } from 'react';
import "../../css/admin.css";

function Signup(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState({})

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        setUser(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data, data.jwt)
            if (data.jwt) {
                localStorage.setItem("token", data.jwt)
                props.handleLogin ? props.handleLogin(data.user) : handleLogin(data.user)
                alert("Your User Has Been Saved")
            } else {
                alert(data.errors.map(error => error ))
            }
        })
        .catch(() => {
            alert("Unable To Signup At This Time")
        })
        setUsername('')
        setEmail('')
        setPassword('')
    }

    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }

    return (
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui-form" onSubmit={handleSubmit} >
                <div className="field">
                    <label>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input value={email} onChange={handleEmailChange} type="text" placeholder="email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password" />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Signup;

