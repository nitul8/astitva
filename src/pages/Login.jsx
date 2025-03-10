import {useState} from "react";
import {Link} from "react-router-dom";

import {FaApple} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login:", formData);
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
                    Welcome back
                </p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                        placeholder="Password"
                    />
                    <p className="text-right text-sm text-gray-500 underline cursor-pointer hover:text-black">
                        Forgot Password?
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-red-500 transition"
                    >
                        Log in
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-600 font-bold cursor-pointer underline"
                    >
                        Sign up
                    </Link>
                </p>
                <div className="mt-6 flex flex-col gap-3">
                    <button className="flex items-center justify-center w-full px-3 py-2 border border-black rounded-full shadow-md font-medium bg-black text-white hover:scale-105 transition">
                        <span className="mr-2 text-xl">
                            <FaApple />
                        </span>{" "}
                        Log in with Apple
                    </button>
                    <button className="flex items-center justify-center w-full px-3 py-2 border border-gray-400 rounded-full shadow-md text-gray-600 font-medium hover:scale-105 transition">
                        <span className="mr-2">
                            <FcGoogle />
                        </span>{" "}
                        Log in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
