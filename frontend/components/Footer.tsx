"use client";
import React from 'react';
import { FaDiscord, FaArrowUp, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../app/assets/ahemahem.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white p-2 md:p-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 items-center relative bottom-0 w-full">
            <div className="flex items-center col-span-2 md:col-span-1">
                <a href="https://localhost:3000" className="flex items-center text-white no-underline transform transition duration-500 ease-in-out hover:scale-110">
                    <Image src={logo} alt='voldemort' className="w-8 h-8 mr-2 rounded-full" />
                    <span className="font-semibold text-lg md:text-xl text-white hover:text-rosered transform transition duration-500 ease-in-out hover:scale-110">no onion</span>
                </a>
            </div>
            <div className="col-span-2 md:col-span-1">
                <h2 className="font-bold text-sm md:text-base mb-1 md:mb-2 text-[#FF033E]">Resources</h2>
                <ul className="list-none">
                    <li><a href="#" className="text-white no-underline hover:underline hover:text-gray-500">lorem ipsum</a></li>
                    <li><a href="#" className="text-white no-underline hover:underline hover:text-gray-500">gibsum tipsum</a></li>
                </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
                <h2 className="font-bold text-sm md:text-base mb-1 md:mb-2 text-[#FF033E]">Follow us</h2>
                <ul className="list-none">
                    <li><a href="#" className="flex items-center text-white no-underline hover:underline hover:text-rosered"><FaDiscord className="mr-2" />Discord</a></li>
                    <li><a href="#" className="flex items-center text-white no-underline hover:underline hover:text-rosered"><FaGithub className="mr-2" />Github</a></li>
                </ul>
            </div>
            <div className="col-span-2 md:col-span-3 text-center mt-2 md:mt-4">
                <p className="text-xs md:text-sm">&copy; {currentYear} Your Company Name. All rights reserved.</p>
            </div>
            <div className="absolute bottom-2 right-2">
                <a href="#top" className="text-white no-underline hover:underline hover:text-rosered"><FaArrowUp /></a>
            </div>
        </footer>
    );
}
