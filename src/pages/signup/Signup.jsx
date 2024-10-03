import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }
        if (!name)
        {
            console.error('name not there');
            return;
        }
        if (!email) {
            console.error('email not there');
            return;
        }
        if (!mobile) {
            console.error('mobile not there');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/signup', {
                name,
                email,
                mobile,
                password,
            });
            console.log('Signup successful:', response.data);
            // Redirect or handle success
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error, show message to user
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-around mb-6">
                    <button
                        className="toggle-button bg-gray-200 text-gray-800 py-2 px-4 rounded-lg"
                        onClick={() => window.location.href = '/login'}
                    >
                        Login
                    </button>
                    <button
                        className="toggle-button bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Register
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
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
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 px-4 text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
