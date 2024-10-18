import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                    Welcome to <span className="text-blue-600">Habit Tracker</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Stay focused and productive by managing your daily habits. Let's make life better, one habit at a time!
                </p>
                <div className="flex justify-center space-x-6">
                    <Link
                        to="/login"
                        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 focus:outline-none"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
