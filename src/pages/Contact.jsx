import {useState} from "react";
import validator from "validator";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {isValidPhoneNumber} from "react-phone-number-input";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        if (name === "email") {
            if (!validator.isEmail(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Invalid email address",
                }));
            } else {
                setErrors((prevErrors) => {
                    const {email, ...rest} = prevErrors;
                    return rest;
                });
            }
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({...formData, phone: value});
        if (value && !isValidPhoneNumber(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Invalid phone number",
            }));
        } else {
            setErrors((prevErrors) => {
                const {phone, ...rest} = prevErrors;
                return rest;
            });
        }
    };

    return (
        <div className="min-h-screen pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Contact Us
                    </h2>
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form
                            className="mb-0 space-y-6"
                            action="https://getform.io/f/azywwqrb"
                            method="POST"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <PhoneInput
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    defaultCountry="IN"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-red-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div id="recaptcha-container"></div>
                </div>
            </div>
            <div className="md:mt-8 text-center">
                <h3>
                    <p className="text-sm">
                        Contact No: +91 98641 62861, +91 60013 93597
                    </p>
                    <p className="text-sm">Address: Jorhat, Assam</p>
                </h3>
                <br />
                <h3>
                    <p className="text-md">Developed with ❤️ by Nitul Das </p>
                    <p className="text-xs font-thin flex items-center justify-center">
                        Copyright © Astitva Foundation
                    </p>
                </h3>
            </div>
        </div>
    );
}

export default Contact;
