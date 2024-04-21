"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../app/assets/ahemahem.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaCaretDown, FaMoon, FaSun } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import bgImage from "../app/assets/profile.png";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDown = () => setIsDropdownOpen(!isDropdownOpen);
    const [theme, setTheme] = useState('dark');
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

        return (
            <nav className="fixed top-0 w-full bg-gray-800 dark:bg-gray-900 dark:border-gray-900">
            <div className="max-w-screen-xl flex items-center mx-auto p-4 justify-center">
                <div className="flex items-center space-x-5">
                    <a href="#" className="flex items-center space-x-5 p-2">
                            <div className="bg-gray-800 rounded-full transform transition duration-500 ease-in-out hover:scale-110">
                                <Image src={logo} alt='voldemort' className="w-10 h-10 mr-2 rounded-full" />
                            </div>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white transform transition duration-500 ease-in-out hover:scale-110">No Onion</span>
                        </a>
                        <Link href="/" className="text-white hover:text-rosered hover:underline p-2">
                            Home
                        </Link>
                        <div className="relative p-2">
                            <button onClick={toggleDown} className="text-white hover:text-rosered flex items-center p-2 pr-10">
                                Categories <FaCaretDown />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        Category 1
                                    </Link>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        Category 2
                                    </Link>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        Category 3
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center flex-grow">
                    <div className="relative w-full">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="absolute inset-y-0 left-0 flex items-center justify-center text-black hover:text-rosered focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-3">
                            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search for anything</span>
                        </button>
                        <input type="text" id="search-navbar" className="block w-full p-3 pl-16 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rosered focus:border-rosered dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rosered dark:focus:border-rosered" placeholder="Search for Anything" />
                    </div>
                </div>
                <div className="text-red-500 text-2xl mx-8">
                    <Link href="/mycourses" className="text-white hover:text-rosered">
                        <MdOutlineVideoCameraFront className="position:relative" />
                    </Link>
                </div>
                <div className="relative p-2 text-white">
                    <button onClick={toggleTheme}>
                        {theme === 'light' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <div className="flex p-4 ml-6">
                    {isLoggedIn ? (
                        <div className="relative">
                            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-3">
                                <Image src={bgImage} alt="User profile" className="w-8 h-8 rounded-full" />
                                <p className="text-sm font-medium text-slate-200">testId</p>
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                                    <div className="px-4 py-3">
                                        <p className="text-sm">Signed in as</p>
                                        <p className="text-sm font-medium text-gray-900">testId</p>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="text-xs">test@gmail.com</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                        <Button variant={"outline"} className="px-4 py-1 mx-1 hover:bg-rosered"> 
                            <Link href="/sign-in" className="text-bg-gray-700 hover:text-bg-rosered">
                            Sign In
                            </Link>
                        </Button>
                        <Button variant={"outline"} className="px-4 py-1 mx-1 hover:bg-rosered"> 
                            <Link href="/sign-up" className="text-bg-gray-700 hover:text-bg-rosered">
                            Sign Up
                            </Link>
                        </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}