import { useState } from 'react';
import './login.css';

export default function Login({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Authentication logic here
        if (isLogin) {
            console.log('Logging in with:', email, password);
        } else {
            console.log('Creating account with:', email, password);
        }
    };

    return (
        <div className="auth-overlay">
            <div className="auth-popup">
                <button 
                    className="close-button" 
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                
                <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="submit-button">
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                </form>

                <p className="toggle-link">
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                setIsLogin(false);
                            }}>
                                Create one
                            </a>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                setIsLogin(true);
                            }}>
                                Login
                            </a>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}