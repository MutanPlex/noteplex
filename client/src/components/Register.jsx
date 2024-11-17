import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);

        const navigate = useNavigate();

        const goToLoginPage = () => {
                navigate("/login");
        };
        const handleSubmit = async (e) => {
                e.preventDefault();
                setError('');
                setLoading(true);
                setSuccess(false);

                try {
                        setLoading(false);
                        setSuccess(true);
                        setTimeout(() => {
                                goToLoginPage();
                        }, 500);
                }
                catch (err) {
                        setError('Failed to register');
                        setLoading(false);
                }
        }

        return (
                <div className="register">
                        <h1>Register</h1>
                        <div className='notif-box'>
                                {error && <p>{error}</p>}
                                {success && <p>Registration successful.</p>}
                        </div>

                        <form onSubmit={handleSubmit} className='form-container'>
                                <div className='multiple-form'>
                                        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='true' />
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className='multiple-form'>
                                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <button type="submit" disabled={loading}>Register</button>
                        </form>
                </div>
        );
}

export default Register;