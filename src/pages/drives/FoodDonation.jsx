import React, {useState} from "react";
import {Link} from "react-router-dom";

const FoodDonation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        semester: "",
    });

    const [loading, setLoading] = useState(false); // For button loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Food Donation Registration:", formData);
        setLoading(true);

        try {
            const response = await fetch(
                "https://astitva-backend.vercel.app/",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    college: "",
                    semester: "",
                }); // Clear form
                if (
                    window.confirm(
                        "Registration successful! Would you like to donate now?"
                    )
                ) {
                    window.location.href = "/donate"; // Redirect to donate page
                }
            } else {
                alert(result.error || "Error registering. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong.");
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register for the Food Donation Drive
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* College Field */}
                        <div>
                            <label
                                htmlFor="college"
                                className="block text-sm font-medium text-gray-700"
                            >
                                College
                            </label>
                            <input
                                id="college"
                                name="college"
                                type="text"
                                required
                                value={formData.college}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Semester Field */}
                        <div>
                            <label
                                htmlFor="semester"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Semester
                            </label>
                            <input
                                id="semester"
                                name="semester"
                                type="text"
                                required
                                value={formData.semester}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Submit & Donate Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                                disabled={loading}
                            >
                                {loading ? "Registering..." : "Register Now"}
                            </button>
                            <Link
                                to="/donate"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                            >
                                Donate
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodDonation;
