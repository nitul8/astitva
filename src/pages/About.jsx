import nitul from "../assets/lead/nitul.jpeg";
import rishad from "../assets/lead/rishad.jpeg";
import arnab from "../assets/lead/arnab.png";
import tanaya from "../assets/lead/tanaya.jpeg";
import kristi from "../assets/lead/kristi.jpeg";
import sakil from "../assets/lead/sakil.png";
import jyotishman from "../assets/lead/jyotishman.png";
import abiram from "../assets/lead/abiram.png";
import hiya from "../assets/lead/hiya.jpeg";

import jec from "../constant/members/jec";
import nonjec from "../constant/members/nonjec";

function About() {
    return (
        <div className="min-h-screen bg-gray-50 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                {/* About Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        About Astitva
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        One step towards humanity
                    </p>
                </div>

                {/* Mission & Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Astitva, a non-profit organization, founded in
                            January, 2025, believes that every life has value
                            and that every being deserves dignity, care, and
                            compassion.
                        </p>
                        <p className="text-gray-600">
                            True to our name, which means "existence" or
                            "being“, we are engaged in various social work
                            initiatives, ensuring that every individual, human
                            or animal, receives the care and dignity they
                            deserve. Our work ranges from cloth donation drives
                            to vaccination drives for stray animals and many
                            more.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Our Impact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-600">
                                    Distributed over 2000 pieces of clothing to
                                    underprivileged communities.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-600">
                                    Fed and cared for more than 100 stray
                                    animals.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-600">
                                    Conducted 50+ vaccination drives for stray
                                    dogs.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-600">
                                    Engaged 100+ volunteers in our various
                                    initiatives.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-8">Our Team</h3>

                    {/* Leads */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                        <TeamMember
                            imgSrc={nitul}
                            name="Nitul Das"
                            role="Co-Founder & Lead"
                        />
                        <TeamMember
                            imgSrc={rishad}
                            name="Rishad Zia"
                            role="Co-Founder & Lead"
                        />
                        <TeamMember
                            imgSrc={arnab}
                            name="Arnab Pran Kaishyap"
                            role="Joint Lead"
                        />
                    </div>

                    {/* Executive Body*/}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 mb-6">
                        <TeamMember
                            imgSrc={tanaya}
                            name="Tanaya Kuri"
                            role="Co-Lead"
                        />
                        <TeamMember
                            imgSrc={kristi}
                            name="Kristi Mallika"
                            role="Co-Lead"
                        />
                        <TeamMember
                            imgSrc={sakil}
                            name="Sakil Ahmed"
                            role="Executing Lead"
                        />
                        <TeamMember
                            imgSrc={jyotishman}
                            name="Jyotishman Das"
                            role="Management Lead"
                        />
                    </div>

                    {/* Management Team*/}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8 mb-12">
                        <TeamMember
                            imgSrc={abiram}
                            name="Abiram Yein"
                            role="Management Lead"
                        />
                        <TeamMember
                            imgSrc={hiya}
                            name="Hiya Bharadwaj"
                            role="Content Lead"
                        />
                    </div>
                </div>

                {/* JEC Members */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-8">
                        Our Members from JEC
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-8">
                        {jec.map((member, index) => (
                            <TeamMember
                                key={index}
                                imgSrc={member.imgSrc}
                                name={member.name}
                                role={member.role}
                            />
                        ))}
                    </div>
                </div>

                {/* Non-JEC Members */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-8">
                        Our Non-JEC Members
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-8 mt-8">
                        {nonjec.map((member, index) => (
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

// Reusable TeamMember Component
function TeamMember({imgSrc, name, role}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
                src={imgSrc || "https://via.placeholder.com/100"}
                className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 fit"
                alt={name}
            />
            <h4 className="text-xs md:text-xl font-semibold">{name}</h4>
            <p className="text-gray-600 text-xs md:text-sm">{role}</p>
        </div>
    );
}

export default About;
