import React, {useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../styles/Button";

const BloodDonation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        bloodgroup: "",
    });

    const [loading, setLoading] = useState(false); // For button loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Blood Donation Drive Registration:", formData);
        setLoading(true);

        try {
            const response = await fetch(
                "https://astitva-backend.vercel.app/blood/",
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
                    age: "",
                    bloodgroup: "",
                }); // Clear form
                if (
                    window.confirm(
                        "You've successfully registered for blood donation. Do you want to contribute something?"
                    )
                ) {
                    window.location.href = "/donate";
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
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4 md:mt-8">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border-4 border-white">
                <h2 className="text-center text-2xl font-extrabold mb-8 text-orange-500">
                    Register for the Blood Donation Drive
                </h2>

                <form
                    className="flex flex-col mt-6 gap-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Full Name"
                    />

                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Email Address"
                    />

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Phone Number"
                    />

                    <input
                        id="age"
                        name="age"
                        type="number"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Age"
                    />

                    <input
                        id="bloodgroup"
                        name="bloodgroup"
                        type="text"
                        required
                        value={formData.bloodgroup}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Blood Group"
                    />

                    {/* Submit & Donate Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Registering..." : "Register Now"}
                        </Button>
                        <Button>
                            <Link to="/donate">Donate Now</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BloodDonation;
