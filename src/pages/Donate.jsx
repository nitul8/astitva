import {useState, useEffect} from "react";
import {QRCodeCanvas} from "qrcode.react";
import logo from "../assets/logo.jpeg";

function Donate() {
    const upiId = "6001393597@naviaxis"; // Your UPI ID
    const [amount, setAmount] = useState("");
    const [gpayUrl, setGpayUrl] = useState("");
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Adjust for laptop screens
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (amount && amount > 0) {
            const encodedUpiId = encodeURIComponent(upiId);
            const encodedName = encodeURIComponent("Astitva Foundation");
            const encodedAmount = encodeURIComponent(amount);
            const url = `upi://pay?pa=${encodedUpiId}&pn=${encodedName}&am=${encodedAmount}&cu=INR&tn=Donation`;
            setGpayUrl(url);
        } else {
            setGpayUrl("");
        }
    }, [amount]);

    const redirectToGPay = () => {
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        window.open(gpayUrl, "_blank"); // Open Google Pay in a new tab
    };

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(upiId)
            .then(() => alert("UPI ID copied to clipboard!"))
            .catch((err) => console.error("Failed to copy UPI ID", err));
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 min-h-screen">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Support Our Cause
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Your contribution can make a real difference
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                    <h4 className="text-xl font-semibold text-primary mb-4">
                        Enter Amount to Donate
                    </h4>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {!isLargeScreen ? (
                        <button
                            onClick={redirectToGPay}
                            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Pay
                        </button>
                    ) : gpayUrl ? (
                        <div className="flex flex-col items-center">
                            <QRCodeCanvas
                                value={gpayUrl}
                                size={200}
                                includeMargin={true}
                                imageSettings={{
                                    src: logo, // Replace with actual logo path
                                    x: undefined,
                                    y: undefined,
                                    height: 40,
                                    width: 40,
                                    excavate: true,
                                }}
                            />
                            <p className="text-sm mt-2">Scan to Pay</p>
                        </div>
                    ) : null}
                </div>
                <div className="text-center mt-6">
                    Facing issue with payment{" "}
                    <p className="text-sm mt-2">
                        Click on this UPI ID to copy and pay manually:{" "}
                        <span
                            className="font-bold cursor-pointer text-blue-600"
                            onClick={copyToClipboard}
                        >
                            {upiId}
                        </span>
                    </p>
                </div>
            </div>

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
