import {useState, useEffect} from "react";
import {QRCodeCanvas} from "qrcode.react";
import logo from "../assets/logo.jpeg";
import donate from "../assets/donate.jpeg";

import Whisper from "../styles/Whisper";
import Dancing from "../styles/Dancing";

function Donate() {
    const upiId = "9864162861@naviaxis"; // Your UPI ID
    const [amount, setAmount] = useState(499);
    const [gpayUrl, setGpayUrl] = useState(499);
    const [activeTab, setActiveTab] = useState("once");
    const [selectedAmount, setSelectedAmount] = useState(499);
    const amounts = [99, 499, 999];
    const [isLargeScreen, setIsLargeScreen] = useState(
        window.innerWidth >= 1024
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCustomInput, setShowCustomInput] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (amount && amount > 0) {
            const encodedUpiId = encodeURIComponent(upiId);
            const encodedName = encodeURIComponent("Astitva Foundation");
            const encodedAmount = encodeURIComponent(Number(amount) || 0);
            const url = `upi://pay?pa=${encodedUpiId}&pn=${encodedName}&am=${encodedAmount}&cu=INR&tn=Donation`;
            setGpayUrl(url);
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

    const handleNext = () => {
        if (!amount || amount <= 0) {
            alert("Please select or enter a valid amount.");
            return;
        }

        if (!gpayUrl) {
            alert("QR code is not ready yet. Please wait.");
            return;
        }

        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12">
            <div className="flex justify-between md:mx-20">
                <div className="max-w-md md:max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="text-center mb-12 font-semibold">
                        <h2 className="text-xl md:text-3xl text-gray-900">
                            Fill your{" "}
                            <Dancing className="text-4xl">heart</Dancing> and
                            someones
                        </h2>
                        <h2 className="text-xl md:text-3xl text-gray-900">
                            life with the <Whisper>Joy</Whisper> of giving
                        </h2>
                    </div>

                    <div className="border-2 border-yellow-500 rounded-tr-[18%] rounded-bl-[18%] p-4 md:p-10 max-w-screen-sm md:max-w-xl mx-auto bg-white shadow-md">
                        {/* Tabs */}
                        {/* <div className="flex bg-gray-100 rounded-t-lg">
                            <button
                                className={`flex-1 py-3 md:p-3 md:text-lg font-bold ${
                                    activeTab === "once"
                                        ? "bg-white shadow-xl text-yellow-500"
                                        : "text-gray-400"
                                }`}
                                onClick={() => setActiveTab("once")}
                            >
                                Give Once
                            </button>
                            <button
                                className={`flex-1 py-3 md:p-3 md:text-lg font-bold ${
                                    activeTab === "monthly"
                                        ? "bg-white shadow-xl text-yellow-500"
                                        : "text-gray-400"
                                }`}
                                onClick={() => setActiveTab("monthly")}
                            >
                                Give Monthly
                            </button>
                        </div> */}

                        {/* Donation Amounts */}
                        <div className="flex border border-yellow-400 mt-3">
                            {amounts.map((amount) => (
                                <button
                                    key={amount}
                                    className={`flex-1 p-2 md:py-4 md:px-9 text-lg font-semibold ${
                                        selectedAmount === amount &&
                                        !showCustomInput
                                            ? "bg-yellow-400 text-white"
                                            : "bg-white text-gray-700"
                                    }`}
                                    onClick={() => {
                                        setSelectedAmount(Number(amount));
                                        setAmount(Number(amount));
                                        setShowCustomInput(false); // Hides input if a fixed amount is selected
                                    }}
                                >
                                    ₹{amount}
                                </button>
                            ))}

                            {/* Other (Custom Amount) Button */}
                            <button
                                className={`flex-1 p-4 text-lg font-semibold border-l border-yellow-400 ${
                                    showCustomInput
                                        ? "bg-yellow-400 text-white"
                                        : "text-gray-700"
                                }`}
                                onClick={() => {
                                    setShowCustomInput(true);
                                    setSelectedAmount("");
                                }}
                            >
                                OTHER
                            </button>
                        </div>

                        {/* Custom Amount Input Field */}
                        {showCustomInput && (
                            <input
                                type="number"
                                className="border text-center w-full h-10 mt-2 border-yellow-500 block rounded-md"
                                placeholder="Enter custom amount"
                                value={selectedAmount}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    if (val > 0) {
                                        setSelectedAmount(val);
                                        setAmount(val); // ✅ Update amount for QR code generation
                                    } else {
                                        setSelectedAmount("");
                                        setAmount("");
                                    }
                                }}
                            />
                        )}

                        {/* Selected Amount */}
                        <div className="text-center text-xl font-bold my-4">
                            Donate{" "}
                            <span className="font-dancing text-orange-600 text-2xl">
                                ₹{selectedAmount || 499}
                            </span>{" "}
                            {activeTab === "monthly" ? "PER MONTH" : "ONE TIME"}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="w-72 md:w-full bg-yellow-400 text-white text-lg font-bold py-3 rounded-lg mb-1 md:mb-0"
                        >
                            NEXT
                        </button>
                    </div>

                    {/* Manual Payment Section */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-700">
                            Facing issues with payment?
                        </p>
                        <p className="text-sm mt-2">
                            Click on this UPI ID to copy and pay manually:{" "}
                            <span
                                className="font-bold cursor-pointer text-orange-600 hover:underline"
                                onClick={copyToClipboard}
                            >
                                {upiId}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="relative w-full flex justify-center md:justify-end">
                    <img
                        src={donate}
                        alt="Donate"
                        className="hidden md:block mt-10 w-80 h-80 lg:w-[600px] lg:h-[600px] object-cover rounded-full shadow-md"
                    />
                </div>
            </div>

            {/* MODAL (Popup) */}
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
                        <hr className="mb-4" />

                        {/* UPI App Button for Mobile Users */}
                        {!isLargeScreen && (
                            <button
                                onClick={() => window.open(gpayUrl, "_blank")}
                                className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                            >
                                Pay via UPI App
                            </button>
                        )}
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full mt-4 text-gray-600 underline text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="md:mt-8 text-center">
                <h3>
                    <p className="text-md">Developed with ❤️ by Nitul Das</p>
                    <p className="text-xs font-thin flex items-center justify-center">
                        Copyright © Astitva Foundation
                    </p>
                </h3>
            </div>
        </div>
    );
}

export default Donate;
