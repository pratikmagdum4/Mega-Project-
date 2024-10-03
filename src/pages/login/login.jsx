import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            console.log('Login successful:', response.data);
            // Redirect or handle success
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error, show message to user
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-around mb-6">
                    <button
                        className="toggle-button bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Login
                    </button>
                    <button
                        className="toggle-button bg-gray-200 text-gray-800 py-2 px-4 rounded-lg"
                        onClick={() => window.location.href = '/signup'}
                    >
                        Register
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Email / Phone number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 px-4 text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
