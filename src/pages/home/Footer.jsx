import React from "react";
import {FaInstagram, FaWhatsapp, FaLinkedin} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className="md:mt-8 text-center bg-gray-400">
            <div className="flex justify-center items-center space-x-10 pb-4 text-2xl ">
                <Link
                    to="https://www.instagram.com/astitvafndn/"
                    target="_blank"
                    className="hover:scale-105"
                >
                    <FaInstagram />
                </Link>
                <Link
                    to="https://chat.whatsapp.com/F2UoSawpuYqLuuxXJEu2Uq"
                    target="_blank"
                    className="hover:scale-105"
                >
                    <FaWhatsapp />
                </Link>
                <Link
                    to="https://www.linkedin.com/company/astitvafndn/"
                    target="_blank"
                    className="hover:scale-105"
                >
                    <FaLinkedin />
                </Link>
                <Link
                    to="mailto:astitvafndn@gmail.com"
                    target="_blank"
                    className="hover:scale-105"
                >
                    <IoIosMail />
                </Link>
            </div>
            <h3 className="text-gray-100 font-thin">
                <p className="text-md">Developed with ❤️ by Nitul Das </p>
                <p className="text-xs flex items-center justify-center">
                    Copyright © Astitva Foundation
                </p>
            </h3>
        </div>
    );
};

export default Footer;
