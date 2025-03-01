import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Impact from "./Impact";
import pic from "../../assets/pic.jpeg";
import FoundersNote from "./FoundersNote";

// Import partner logos
import projecthumanity from "../../assets/partners/projecthumanity.jpeg";
import nhm from "../../assets/partners/nhm.png";
import tps from "../../assets/partners/tps.jpeg";
import nawf from "../../assets/partners/nawf.jpg";
import jec from "../../assets/partners/jec.jpg";
import showeringhope from "../../assets/partners/showeringhope.jpeg";
import bhorokha from "../../assets/partners/bhorokha.jpeg";

import Footer from "./Footer";

// Array of partner logos
const partners = [
    {name: "Project Humanity", logo: projecthumanity},
    {name: "National Health Mission", logo: nhm},
    {name: "The Period Society, Assam", logo: tps},
    {name: "Nu Animal Welfare Foundation", logo: nawf},
    {name: "Jorhat Engineering College", logo: jec},
    {name: "Showering Hope", logo: showeringhope},
    {name: "Bhorokha", logo: bhorokha},
];

const Home = () => {
    return (
        <div className="relative min-h-screen text-gray-900">
            {/* Background Image with Overlay */}
            <div
                className="fixed inset-0 bg-cover bg-center z-0"
                style={{backgroundImage: `url(${pic})`}}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-white z-10">
                <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
                    Astitva Foundation
                </h1>
                <p className="text-lg md:text-2xl mt-4 drop-shadow-lg">
                    One step towards humanity.
                </p>
                <Link
                    to="/donate"
                    className="mt-8 bg-primary text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Donate Now
                </Link>
            </div>

            {/* Impact Section */}
            <div className="relative z-10 bg-white py-20">
                <FoundersNote />
                <Impact />
            </div>

            {/* Trusted Partners Section with Scroll Animation */}
            <div className="bg-gray-400 text-white relative">
                <div className="max-w-6xl mx-auto p-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">
                        Trusted Partners
                    </h2>
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex md:space-x-8 w-fit"
                            animate={{x: ["0%", "-50%"]}} // Continuous effect
                            transition={{
                                repeat: Infinity,
                                duration: 20, // Slower speed
                                ease: "linear",
                            }}
                        >
                            {/* Duplicate the partner list to make it continuous */}
                            {[...partners, ...partners].map(
                                (partner, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center p-4 min-w-[120px] sm:min-w-[150px]"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-h-12 sm:max-h-16 object-contain"
                                        />
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
