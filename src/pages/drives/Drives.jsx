import pastDrives from "../../constant/drives/past";
import upcomingDrives from "../../constant/drives/upcoming";
import {Link} from "react-router-dom";

function Drives() {
    return (
        <div className="min-h-screen bg-gray-50 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Our Drives
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Making a difference, one drive at a time
                    </p>
                </div>

                {/* Upcoming Drives Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6">
                        Upcoming Drives
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {upcomingDrives.map((drive) => (
                            <div
                                key={drive.id}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h4 className="text-xl font-semibold text-primary mb-2">
                                    {drive.title}
                                </h4>
                                <div className="text-gray-600 mb-4">
                                    <p className="mb-1">
                                        <span className="font-medium">
                                            Date:
                                        </span>{" "}
                                        {drive.date}
                                    </p>
                                    <p className="mb-1">
                                        <span className="font-medium">
                                            Location:
                                        </span>{" "}
                                        {drive.location}
                                    </p>
                                </div>
                                <p className="text-gray-600">
                                    {drive.description}
                                </p>
                                <Link
                                    className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    to="/food-donation"
                                >
                                    Register to Volunteer
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Drives Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Past Drives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pastDrives.map((drive) => (
                            <div
                                key={drive.id}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h4 className="text-xl font-semibold text-primary mb-2">
                                    {drive.title}
                                </h4>
                                <div className="text-gray-600 mb-4">
                                    <p className="mb-1">
                                        <span className="font-medium">
                                            Date:
                                        </span>{" "}
                                        {drive.date}
                                    </p>
                                    <p className="mb-1">
                                        <span className="font-medium">
                                            Location:
                                        </span>{" "}
                                        {drive.location}
                                    </p>
                                </div>
                                <p className="text-gray-600 mb-2">
                                    {drive.description}
                                </p>
                                <p className="text-green-600 font-medium">
                                    {drive.impact}
                                </p>
                                <button
                                    className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    onClick={() =>
                                        window.open(drive.link, "_blank")
                                    }
                                >
                                    Glimpse of the Drive
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="mt-12 text-center text-gray-700">
                <p className="text-md">
                    Developed with ❤️ by{" "}
                    <span className="font-semibold">Nitul Das</span>
                </p>
                <p className="text-xs font-thin">
                    Copyright © Astitva Foundation
                </p>
            </footer>
        </div>
    );
}

export default Drives;
