import React, { useState } from 'react'

function LoginForm(props) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log("Handle Submit")
        e.preventDefault()
        fetch('http://localhost:3000/login', {
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
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                    Log In
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                    Sign Up
                </label>
                {/* --------------------FORM------------------------- */}
                
                    <div className="login-form">
                        <div className="sign-in-htm">
                        <form onSubmit={handleSubmit}>
                            <div className="group">
                                <label htmlFor="user" className="label">
                                    Username
                                </label>
                                <input
                                    value={username}
                                    id="user"
                                    type="text"
                                    className="input"
                                    onChange={handleUsernameChange}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="label">
                                    Email Address
                                </label>
                                <input
                                    value={email}
                                    id="email"
                                    type="text"
                                    className="input"
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    id="pass"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="submit"
                                    className="button"
                                    value="Log In"
                                />
                            </div>
                            <div className="hr"></div>
                            </form>
                        </div>
                        {/* ------------------------------------------- */}
                        <div className="sign-up-htm">
                            <div className="hr"></div>
                            <h3>
                                Please Get In Contact With Admin To Secure Your
                                Credentials
                            </h3>
                            <div className="hr"></div>
                            
                        </div>
                    </div>
                
                {/* --------------------FORM------------------------- */}
            </div>
        </div>
    );
}

export default LoginForm;
