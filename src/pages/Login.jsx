import React, { useState } from "react";
import { auth } from "../API/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch {
            setNotice("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h2 className="login-title">Log In</h2>
                {notice && <div className="login-notice">{notice}</div>}
                <form onSubmit={loginWithUsernameAndPassword}>
                    <div className="form-group">
                        <label htmlFor="loginEmail" className="login-label">Email address</label>
                        <input type="email" className="form-control login-input" id="loginEmail" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="loginPassword" className="login-label">Password</label>
                        <input type="password" className="form-control login-input" id="loginPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 login-button">Log In</button>
                </form>
                <div className="text-center mt-3">
                    <span>Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
