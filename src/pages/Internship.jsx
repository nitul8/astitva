import Whisper from "../styles/Whisper";
import {Link} from "react-router-dom";

function Internship() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 pt-16">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mt-10">
                        Astitva Foundation
                        <br />
                        <Whisper>Summer Internship Program</Whisper>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">
                        One step towards humanity
                    </p>
                </div>

                {/* Mission & Info Card */}
                <div className="p-8 md:p-12 max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                        Be the Reason for Someone’s Smile
                    </h3>
                    <p className="text-gray-700 text-md md:text-lg mb-6">
                        Join{" "}
                        <strong>
                            Astitva Foundation&apos;s Summer Social Internship
                            Program
                        </strong>
                        , where you&apos;ll actively participate in meaningful
                        social work throughout your internship journey.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base mb-6">
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold mb-1 text-orange-500">
                                Duration
                            </h4>
                            <p>4 Weeks</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold mb-1 text-orange-500">
                                Places
                            </h4>
                            <p>Various districts of Assam</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold mb-1 text-orange-500">
                                Perks
                            </h4>
                            <p>Internship Certificate</p>
                        </div>
                    </div>

                    {/* Apply Now Button */}
                    <Link
                        to="https://forms.gle/3J5AdQzJsPKKvnVC7"
                        target="_blank"
                        className="inline-block mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full shadow-md transition"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>Developed with ❤️ by Nitul Das</p>
                <p className="text-xs mt-1">Copyright © Astitva Foundation</p>
            </footer>
        </div>
    );
}

export default Internship;
