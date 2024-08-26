import React from 'react';

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-around mb-6">
                    <button
                        className="toggle-button bg-gray-200 text-gray-800 py-2 px-4 rounded-lg"
                        onClick={() => window.location.href = 'Login.html'}
                    >
                        Login
                    </button>
                    <button
                        className="toggle-button bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Register
                    </button>
                </div>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Email / Phone number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
                    />
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

export default Signup;
