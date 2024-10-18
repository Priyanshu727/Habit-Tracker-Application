import { useState } from 'react';
import { login } from '../api/AuthApi';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
            navigate('/habits');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
            <form className="max-w-md w-full bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Login</h2>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200 w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
