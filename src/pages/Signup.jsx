import {useState} from "react";
import {Link} from "react-router-dom";

import {FaApple} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log("Signup:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 mt-8">
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-center text-2xl font-bold mb-6">
                    Create your account
                </p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Full Name"
                    />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Email"
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Create Password"
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Confirm Password"
                    />
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-red-500 transition"
                    >
                        Create Your Account
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-600 font-bold cursor-pointer underline"
                    >
                        Log in
                    </Link>
                </p>
                <div className="mt-6 flex flex-col gap-3">
                    <button className="flex items-center justify-center w-full px-3 py-2 border border-black rounded-full shadow-md font-medium bg-black text-white hover:scale-105 transition">
                        <span className="mr-2 text-xl">
                            <FaApple />
                        </span>{" "}
                        Sign up with Apple
                    </button>
                    <button className="flex items-center justify-center w-full px-3 py-2 border border-gray-400 rounded-full shadow-md text-gray-600 font-medium hover:scale-105 transition">
                        <span className="mr-2">
                            <FcGoogle />
                        </span>{" "}
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Signup;
