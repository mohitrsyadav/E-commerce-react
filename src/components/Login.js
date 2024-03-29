import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {API} from "../../src/api"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        let result = await fetch(`${API}login`, {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/")
        }
        else {
            alert("Please Enter Correct Details");
        }
        console.log(result);
    }
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    })
    return (
        <div>
            <div className="login">
                <h1>Login</h1>
                <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <input className="inputBox" type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                <button onClick={handleLogin} type="button" className="appButton">Login</button>
            </div>
        </div>
    )
}
export default Login;