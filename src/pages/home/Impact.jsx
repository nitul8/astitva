import React from "react";
import {motion} from "framer-motion";
import clothesdonation from "../../assets/drive/clothesdonation.png";
import pawlentine from "../../assets/drive/pawlentine.png";
import fooddistribution from "../../assets/drive/fooddistribution.jpeg";

const imageVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 1}},
};

const textVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 1}},
};

const Impact = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 my-12">
            {/* First Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center"
                initial="hidden"
                whileInView="visible"
                transition={{staggerChildren: 0.4}}
                viewport={{once: true}}
            >
                <motion.img
                    src={clothesdonation}
                    alt="Clothes Donation"
                    variants={imageVariants}
                    className="w-80 md:w-96 rounded-lg shadow-lg"
                />
                <motion.div variants={textVariants} className="text-md">
                    <h2 className="text-red-600 font-extrabold text-2xl md:text-3xl">
                        Clothes Donation Drive
                    </h2>
                    <p className="text-gray-800 mt-4">
                        Generous individuals from our community came forward to
                        donate clothes, extending a helping hand to those in
                        need. Our team organized a collection drive on 22nd
                        January 2025, where we gathered a significant number of
                        warm clothes, ensuring they reached people who required
                        them the most during the cold season.
                    </p>
                    <p className="text-gray-800 mt-4">
                        Distributed over 2000 pieces of clothing including
                        winter-wear and summar-wear to underprivileged
                        communities.
                    </p>
                    <p className="text-gray-800 mt-4">
                        Additionally we distributed 10+ blankets to homeless
                        individuals and families in need.
                    </p>
                </motion.div>
            </motion.div>

            {/* Second Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center m-16"
                initial="hidden"
                whileInView="visible"
                transition={{staggerChildren: 0.4}}
                viewport={{once: true}}
            >
                <motion.div variants={textVariants} className="text-md">
                    <h2 className="text-red-600 font-extrabold text-2xl md:text-3xl">
                        Pawlentine's Day Celebration
                    </h2>
                    <p className="text-gray-800 mt-4">
                        Our Pawlentine Drive was a special initiative dedicated
                        to spreading love and care to our furry friends. On 16th
                        February 2025, we organized a vaccination and feeding
                        drive for stray dogs and cats in Jorhat. Our team
                        collaborated with Rajib Chakraborty Sir, local
                        veterinarian Dr Laaraa Ma'am and Nu Animal Walfare
                        Foundation to provide essential vaccinations and medical
                        care to these animals.
                    </p>
                    <p className="text-gray-800 mt-4">
                        We also conducted a free health check-up camp for the
                        dogs, providing them with necessary vaccinations and
                        treatments. The event was a huge success, with over 100
                        dogs participating and enjoying the festivities.
                    </p>
                    <p className="text-gray-800 mt-4">
                        The event aimed to promote responsible pet ownership and
                        raise awareness about the importance of caring for our
                        furry companions.
                    </p>
                </motion.div>
                <motion.img
                    src={pawlentine}
                    alt="Clothes Donation"
                    variants={imageVariants}
                    className="w-80 md:w-96 rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Third Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center"
                initial="hidden"
                whileInView="visible"
                transition={{staggerChildren: 0.4}}
                viewport={{once: true}}
            >
                <motion.img
                    src={fooddistribution}
                    alt="Food Distribution"
                    variants={imageVariants}
                    className="w-80 md:w-96 rounded-lg shadow-lg"
                />
                <motion.div variants={textVariants} className="text-md">
                    <h2 className="text-red-600 font-extrabold text-2xl md:text-3xl">
                        Food Distribution Drive
                    </h2>
                    <p className="text-gray-800 mt-4">
                        With the collective efforts of generous individuals from
                        our community, we successfully organized a food
                        distribution drive on 9th March,2025, ensuring that no
                        one sleeps with an empty stomach.
                    </p>
                    <p className="text-gray-800 mt-4">
                        Distributed over 100 food packets to underprivileged
                        individuals, including children and families struggling
                        with food insecurity.
                    </p>
                    <p className="text-gray-800 mt-4">
                        Additionally, we provided approximately 120 bottles of
                        water (0.75L each) to help ensure access to clean
                        drinking water.
                    </p>
                    <p className="text-gray-800 mt-4">
                        This initiative was a small step towards making a
                        difference, and we are grateful to everyone who
                        contributed and supported the cause.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Impact;
