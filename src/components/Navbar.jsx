import {useState} from "react";
import {Link} from "react-router-dom";
import {UserCircleIcon} from "@heroicons/react/24/outline";
import logo from "../assets/logo.jpeg";
import name from "../assets/name.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle link clicks
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-8 m-1" />
                        <Link
                            to="/"
                            className="flex-shrink-0 flex items-center"
                        >
                            <img
                                src={name}
                                alt="Logo"
                                className="h-8 m-0 md:m-1"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            About
                        </Link>
                        <Link
                            to="/drives"
                            className="text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Our Drives
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/donate"
                            className="text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Donate
                        </Link>
                        {/* <Link
                            to="/login"
                            className="text-gray-700 hover:text-red-500"
                            title="Login"
                            onClick={handleLinkClick}
                        >
                            <UserCircleIcon className="ml-4 h-8 w-8" />
                        </Link> */}
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        {/* <Link
                            to="/login"
                            className="text-gray-700 hover:text-red-500"
                            title="Login"
                            onClick={handleLinkClick}
                        >
                            <UserCircleIcon className="h-8 w-8" />
                        </Link> */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="block text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            About
                        </Link>
                        <Link
                            to="/drives"
                            className="block text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Our Drives
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/donate"
                            className="block text-gray-700 hover:text-red-500 px-3 py-2"
                            onClick={handleLinkClick}
                        >
                            Donate
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
