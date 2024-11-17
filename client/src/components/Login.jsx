import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);

        const navigate = useNavigate();

        const goToHomePage = () => {
                navigate("/");
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
                                goToHomePage();
                        }, 500);
                }
                catch (err) {
                        setError('Failed to login');
                        setLoading(false);
                }
        }

        return (
                <div className="login">
                        <h1>Login</h1>
                        <div className='notif-box'>{
                                error && <p>{error}</p>}
                                {success && <p>Login successful</p>}
                        </div>
                        <form onSubmit={handleSubmit} className='form-container'>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <button type="submit" disabled={loading}>Login</button>

                        </form>
                </div>
        );
}

export default Login;