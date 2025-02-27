import React from "react";
import {motion} from "framer-motion";
import founderImage from "../../assets/drive/founder.png";

const FoundersNote = () => {
    return (
        <div className="min-h-screen max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
                {/* Image Section */}
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className="relative"
                >
                    <img
                        src={founderImage}
                        alt="Founder with children"
                        className="rounded-lg shadow-lg grayscale w-full"
                    />
                    <div className="absolute inset-0 border-4 border-yellow-400 rounded-lg animate-pulse"></div>
                </motion.div>
                <div className="text-center text-4xl text-yellow-600 font-bold mt-4">
                    Founder's Note
                </div>
            </div>
            {/* Text Section */}
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1}}
            >
                <h2 className="text-red-600 font-extrabold text-2xl md:text-3xl">
                    ONE STEP TOWARDS HUMANITY
                </h2>
                <p className="text-gray-800 mt-4 text-md">
                    Every day in India, millions of lives, both human and
                    animal, endure heart-breaking struggles. 13.7% of people go
                    to bed hungry, while 700 lives are lost each year to the
                    cold. 20,000 people fall victim to rabies, and countless
                    stray animals wander the streets, longing for food and
                    warmth. Meanwhile, 260 million children are deprived of
                    education, and so many more suffer from the lack of clean
                    water, sanitation, and healthcare. These are not just
                    numbers; they are lives, families, and innocent beings
                    yearning for a chance at survival, comfort, and hope. Thus
                    the need of action is critical.
                </p>
                <p className="text-gray-800 mt-4 text-md">
                    At Astitva Foundation, we believe every life deserves
                    dignity, care, and a chance to thrive. We are committed to
                    offering food, shelter, medical aid, and education to those
                    who need it the most. But we cannot do this alone. We need
                    your support. Your small contribution can create a world of
                    change, a chance for someone to live with hope, and not just
                    survive.
                </p>
                <p className="text-gray-800 mt-4 text-md">
                    Join us in making a real difference, one drive at a time.
                </p>
                <p className="mt-6 font-semibold text-xl text-yellow-600">
                    With love and gratitude, <br /> NITUL DAS & RISHAD ZIA
                </p>
            </motion.div>
        </div>
    );
};

export default FoundersNote;
