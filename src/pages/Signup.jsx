import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../API/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import "../styles/signup.css";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [notice, setNotice] = useState("");

    const saveUserDataToDatabase = async (userId, email) => {
        try {
            const db = getDatabase();
            set(ref(db, 'usuarios/' + userId), {
                email: email,
                firstName: firstName,
                lastName: lastName,
                phone: phone
            });
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await saveUserDataToDatabase(user.uid, email);

                navigate("/");
            } catch (error) {
                console.error("Error creating user:", error);
                setNotice("Sorry, something went wrong. Please try again.");
            }
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h2 className="signup-title">Sign Up</h2>
                {notice && <div className="signup-notice">{notice}</div>}
                <form onSubmit={signupWithUsernameAndPassword}>
                    <div className="form-group">
                        <label htmlFor="signupFirstName" className="signup-label">Nombres</label>
                        <input type="text" className="form-control signup-input" id="signupFirstName" placeholder="Nombres" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signupLastName" className="signup-label">Apellidos</label>
                        <input type="text" className="form-control signup-input" id="signupLastName" placeholder="Apellidos" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signupPhone" className="signup-label">Celular</label>
                        <input type="tel" className="form-control signup-input" id="signupPhone" placeholder="Celular" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signupEmail" className="signup-label">Email address</label>
                        <input type="email" className="form-control signup-input" id="signupEmail" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signupPassword" className="signup-label">Password</label>
                        <input type="password" className="form-control signup-input" id="signupPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
                        <input type="password" className="form-control signup-input" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="w-100 signup-button">Sign Up</button>
                </form>
                <div className="text-center mt-3">
                    <span>Already have an account? <Link to="/login" className="signup-link">Log in</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Signup;