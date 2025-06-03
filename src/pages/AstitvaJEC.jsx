import diptangshu from "../assets/lead/diptangshu.jpeg";
import doly from "../assets/lead/doly.jpeg";
import samudra from "../assets/lead/samudra.png";
import shraban from "../assets/lead/shraban.png";
import dhriti from "../assets/lead/dhriti.jpeg";

import representative from "../constant/members/representative";

import Whisper from "../styles/Whisper";

function About() {
    return (
        <div className="min-h-screen bg-gray-50 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                {/* About Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Team Astitva <br />
                        <Whisper>Jorhat Engineering College</Whisper>
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        One step towards humanity
                    </p>
                </div>

                {/* Mission & Impact */}

                <div className="w-full md:w-3/4 text-center justify-center mx-auto">
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                        About Us
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Jorhat Engineering College, the birthplace of Astitva
                        Foundation, has always nurtured innovation and
                        compassion. It was here that a group of empathetic
                        individuals came together with a shared dream—to make a
                        meaningful difference in the lives of the
                        underprivileged.
                    </p>
                    <p className="text-gray-600">
                        Astitva, a non-profit organization founded in January
                        2025, believes that every life has value, and that every
                        being deserves dignity, care, and compassion.
                    </p>
                </div>

                {/* Team Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Our Team</h3>

                    {/* Leads */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-x-4 w-full">
                        <div className="p-6 text-left flex justify-center items-center space-x-4 w-full max-w-md">
                            <img
                                src={shraban}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Shraban Nath
                                </h4>
                                <p className="text-xs">Unit Head</p>
                                <a
                                    href={`mailto:shrabannath749@gmail.com`}
                                    className="text-orange-500 text-xs hover:underline"
                                >
                                    shrabannath749@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="p-6 text-left flex justify-center items-center space-x-4 w-full max-w-md">
                            <img
                                src={diptangshu}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Diptangshu Parasar
                                </h4>
                                <p className="text-xs">Unit Head</p>
                                <a
                                    href={`mailto:parashardiptangshu@outlook.com`}
                                    className="text-orange-500 text-xs hover:underline"
                                >
                                    parashardiptangshu@outlook.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="p-6 text-left flex justify-center items-center space-x-4 w-full max-w-md">
                            <img
                                src={dhriti}
                                className="w-28 h-28 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Dhritisma Saloi
                                </h4>
                                <p className="text-xs">Unit Head</p>
                                <a
                                    href={`mailto:dhritishma2003@gmail.com`}
                                    className="text-orange-500 text-xs hover:underline"
                                >
                                    dhritishma2003@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center space-x-4 w-full">
                        <div className="p-6 text-left flex justify-center items-center space-x-4 w-full max-w-md">
                            <img
                                src={samudra}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Samudra Baruah
                                </h4>
                                <p className="text-xs">Unit Co-Head</p>
                                <a
                                    href={`mailto:samudraboruah440@gmail.com`}
                                    className="text-orange-500 text-xs hover:underline"
                                >
                                    samudraboruah440@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="p-6 text-left flex justify-center items-center space-x-4 w-full max-w-md">
                            <img
                                src={doly}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Doly Barman
                                </h4>
                                <p className="text-xs">Unit Co-Head</p>
                                <a
                                    href={`mailto:dolybarman729@gmail.com`}
                                    className="text-orange-500 text-xs hover:underline"
                                >
                                    dolybarman729@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* JEC Members */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Representatives
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8">
                        {representative.map((member, index) => (
                            <TeamMember
                                key={index}
                                imgSrc={member.imgSrc}
                                name={member.name}
                                role={member.role}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="md:mt-8 text-center">
                <h3 className="">
                    <p className="text-md">Developed with ❤️ by Nitul Das </p>
                    <p className="text-xs font-thin flex items-center justify-center">
                        Copyright © Astitva Foundation
                    </p>
                </h3>
            </div>
        </div>
    );
}

// eslint-disable-next-line react/prop-types
function TeamMember({imgSrc, name, role}) {
    return (
        <div className="p-6 text-left flex flex-col md:flex-row justify-center items-center space-x-4 w-full max-w-md">
            <img
                src={imgSrc}
                className="w-24 h-24 rounded-full object-cover"
                alt={name}
            />
            <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                <p className="text-orange-400 text-xs">{role}</p>
            </div>
        </div>
    );
}

export default About;
