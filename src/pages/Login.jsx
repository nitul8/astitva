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
        console.log("Login:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4 mt-8">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border-4 border-white">
                <p className="text-center text-2xl font-extrabold">Sign In</p>
                <form
                    className="flex flex-col mt-6 gap-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="E-mail"
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                    />
                    <p className="text-sm text-gray-500 text-right underline cursor-pointer hover:text-gray-700">
                        Forgot Password?
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-500 text-white py-3 rounded-xl shadow-lg font-bold hover:scale-105 transition"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-600 font-bold cursor-pointer underline"
                    >
                        Sign up
                    </Link>
                </p>
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Or Sign in with
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="p-3 bg-black text-white rounded-full shadow-md border-4 border-white hover:scale-110 transition">
                        <FaApple className="text-xl" />
                    </button>
                    <button className="p-3 bg-gray-100 text-gray-600 rounded-full shadow-md border-4 border-white hover:scale-110 transition">
                        <FcGoogle className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
