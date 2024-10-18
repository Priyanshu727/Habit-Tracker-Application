import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-lg font-bold">Habit Tracker</Link>
                <div>
                    <Link to="/" className="mr-4">My Habits</Link>
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
