import {useState, useEffect} from "react";
import {QRCodeCanvas} from "qrcode.react";
import logo from "../assets/logo.jpeg";
import donate from "../assets/donate.jpeg";

import Whisper from "../styles/Whisper";
import Dancing from "../styles/Dancing";

function Donate() {
    const upiId = "6001393597@naviaxis"; // Your UPI ID
    const [amount, setAmount] = useState("");
    const [gpayUrl, setGpayUrl] = useState("");
    const [selectedAmount, setSelectedAmount] = useState(""); // Keep as string
    const amounts = [50, 100, 500, 1000];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(
        window.innerWidth >= 1024
    );
    const [showCustomInput, setShowCustomInput] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (amount && Number(amount) > 0) {
            const encodedUpiId = encodeURIComponent(upiId);
            const encodedName = encodeURIComponent("Astitva Foundation");
            const encodedAmount = encodeURIComponent(amount);

            // Standard UPI payment URL
            const upiUrl = `upi://pay?pa=${encodedUpiId}&pn=${encodedName}&am=${encodedAmount}&cu=INR&tn=Donation`;

            // Google Pay specific deep link
            const gpayDeepLink = `https://tez.google.com/pay?upi_uri=${encodeURIComponent(
                upiUrl
            )}`;

            setGpayUrl(gpayDeepLink);
        } else {
            setGpayUrl("");
        }
    }, [amount]);

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(upiId)
            .then(() => alert("UPI ID copied to clipboard!"))
            .catch((err) => console.error("Failed to copy UPI ID", err));
    };

    const handleDonate = () => {
        if (!amount || Number(amount) <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const encodedUpiId = encodeURIComponent(upiId);
        const encodedName = encodeURIComponent("Astitva Foundation");
        const encodedAmount = encodeURIComponent(amount);

        // Construct the UPI payment URL
        const upiUrl = `upi://pay?pa=${encodedUpiId}&pn=${encodedName}&am=${encodedAmount}&cu=INR&tn=Donation`;

        // Use Google Pay intent to directly navigate to the payment page
        const gpayIntent = `intent://pay?pa=${encodedUpiId}&pn=${encodedName}&am=${encodedAmount}&cu=INR&tn=Donation&url=${encodeURIComponent(
            upiUrl
        )}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end;`;

        // Open the Google Pay app directly to the payment page
        window.location.href = gpayIntent;
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12">
            <div className="flex flex-col md:flex-row justify-between md:mx-20">
                <div className="max-w-md md:max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="text-center mb-8 font-semibold">
                        <h2 className="text-2xl md:text-3xl text-gray-900">
                            Fill your{" "}
                            <Dancing className="text-4xl">heart</Dancing> and
                            someone's life
                        </h2>
                        <h2 className="text-2xl md:text-3xl text-gray-900">
                            with the <Whisper>Joy</Whisper> of giving
                        </h2>
                    </div>

                    <div className="border-2 border-yellow-500 rounded-xl p-6 md:p-10 bg-white shadow-md">
                        {/* Donation Amounts */}
                        <div className="flex border border-yellow-400 rounded-lg overflow-hidden">
                            {amounts.map((amt) => (
                                <button
                                    key={amt}
                                    className={`flex-1 p-3 md:py-4 md:px-6 text-lg font-semibold ${
                                        selectedAmount === String(amt) &&
                                        !showCustomInput
                                            ? "bg-yellow-400 text-white"
                                            : "bg-white text-gray-700"
                                    }`}
                                    onClick={() => {
                                        setSelectedAmount(String(amt));
                                        setAmount(String(amt));
                                        setShowCustomInput(false);
                                    }}
                                >
                                    ₹{amt}
                                </button>
                            ))}
                        </div>

                        {/* Custom Amount Input */}
                        <input
                            type="text"
                            className="border text-center w-full h-10 mt-3 border-yellow-500 block rounded-md"
                            placeholder="Enter custom amount"
                            value={selectedAmount}
                            onFocus={() => setShowCustomInput(true)}
                            onChange={(e) => {
                                setSelectedAmount(e.target.value);
                                setAmount(e.target.value);
                            }}
                        />

                        {/* Selected Amount */}
                        <div className="text-center text-xl font-bold my-4">
                            Donate{" "}
                            <span className="font-dancing text-orange-600 text-2xl">
                                ₹{selectedAmount}
                            </span>{" "}
                            ONE TIME
                        </div>

                        {/* Donate Button - Different Actions for Mobile and Large Screens */}
                        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4">
                            <button
                                onClick={handleDonate}
                                className="bg-orange-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-red-600 transition"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>

                    {/* Manual Payment Section */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-700">
                            Facing issues with payment?
                        </p>
                        <p className="text-sm mt-2">
                            Click to copy UPI ID:{" "}
                            <span
                                className="font-bold cursor-pointer text-orange-600 hover:underline"
                                onClick={copyToClipboard}
                            >
                                {upiId}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex justify-end">
                    <img
                        src={donate}
                        alt="Donate"
                        className="mt-10 w-80 h-80 lg:w-[600px] lg:h-[600px] object-cover rounded-full shadow-md"
                    />
                </div>
            </div>

            {/* MODAL (QR Code Popup) */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-bold text-center mb-4">
                            Complete Your Donation
                        </h2>
                        <div className="flex justify-center mb-4">
                            <QRCodeCanvas
                                value={gpayUrl}
                                size={200}
                                imageSettings={{
                                    src: logo,
                                    height: 40,
                                    width: 40,
                                    excavate: true,
                                }}
                            />
                        </div>
                        <p className="text-center text-sm mb-4">
                            Scan this QR code to pay
                        </p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full mt-4 text-gray-600 underline text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Donate;
