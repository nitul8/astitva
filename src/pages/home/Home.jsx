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
import asha from "../../assets/partners/asha.jpeg";

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
    {name: "Asha", logo: asha},
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
                <p className="text-lg md:text-2xl mt-4 mb-8 drop-shadow-lg">
                    One step towards humanity.
                </p>
                <Link
                    to="/donate"
                    className="relative inline-block px-10 py-3 text-white text-lg font-medium rounded-lg transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(140.14deg, #ec540e 15.05%, #d6361f 114.99%) padding-box, linear-gradient(142.51deg, #ff9465 8.65%, #af1905 88.82%) border-box",
                        borderRadius: "7px",
                        border: "2px solid transparent",
                        textShadow: "1px 1px 1px #00000040",
                        boxShadow: "8px 8px 20px 0px #45090059",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = "none")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow =
                            "8px 8px 20px 0px #45090059")
                    }
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
