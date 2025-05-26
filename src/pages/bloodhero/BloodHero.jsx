import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.jpeg";
import bloodhero from "../../assets/bloodhero.png";
import Button from "../../styles/Button";
import StatsSection from "./StatsSection";

const BloodHero = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="hero-gradient min-h-screen flex justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="text-center">
                        <div className="flex justify-center items-center ">
                            <img src={logo} alt="logo" className="h-20 mx-2" />
                            <img
                                src={bloodhero}
                                alt="logo"
                                className="h-20 mx-2"
                            />
                        </div>
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="flex justify-center items-center text-4xl md:text-7xl font-bold mb-3 text-red-600"
                        >
                            Astitva Blood Hero
                        </motion.h1>
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="text-2xl md:text-4xl font-bold text-gray-900 mb-6"
                        >
                            Be a Hero, Save Lives
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="text-xl text-gray-600 mb-8"
                        >
                            Join our community of blood donors and help save
                            lives today. Every drop counts.
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.4}}
                            className="flex justify-center gap-2 md:gap-4"
                        >
                            <Button>
                                <Link to="/donate">Donate Blood</Link>
                            </Button>
                            <Button>
                                <Link to="/searchnearby">Search Nearby</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <StatsSection />

            {/* CTA Section */}
            <section className="py-16 bg-primary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-red-500 mb-4">
                        About Astitva Blood Hero
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-4xl mx-auto">
                        <p>Be a Hero, Save Lives</p>
                        <p>
                            Astitva Blood Hero is an initiative by Astitva,
                            dedicated to bridging the gap between blood donors
                            and those in urgent need. We believe that anyone can
                            be a hero, and a single act of kindness, donating
                            blood, can save lives. Our platform connects
                            voluntary blood donors with patients, ensuring that
                            no one suffers due to the unavailability of blood.
                            By registering as a donor, your location is added to
                            our database, making it easy for those in need to
                            find and contact nearby donors swiftly.
                        </p>
                        <p>
                            Join us today and be the reason someone gets a
                            second chance at life.
                        </p>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default BloodHero;
