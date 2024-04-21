"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from "../assets/ahemahem.png";
import bgImage from "../assets/background.png";
import Link from "next/link";
import { useRouter }  from "next/navigation";
import axios from "axios";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleSignIn = async () => {
    if (!emailRegex.test(email)) {
      console.log('Invalid email');
      alert('Invalid email. Please enter a valid email address.');
      return;
    }
  
    if (!passwordRegex.test(password)) {
      console.log('Invalid password');
      alert('Invalid password. Your password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.');
      return;
    }
  
    try {
      const response = await axios.post('/api/login/', { email, password });
      if (response.status === 200) {
        router.push('/recommendation');
      } else {
        console.log('Error signing in');
        alert('Error signing in. Please try again.');
      }
    } catch (error) {
      console.log('Error signing in', error);
      alert('Error signing in. Please check your network connection and try again.');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="absolute inset-0">
        <Image src={bgImage} alt="Background" layout="fill" objectFit="cover" />
      </div>
      <div className="relative bg-gray-800 p-8 rounded shadow-md w-80 flex flex-col items-center justify-center">
        <Image src={logo} alt="Logo" className="w-16 h-16 mx-auto mb-4 rounded-full" />
        <h2 className="mb-4 text-xl font-bold text-center text-white">SignIn Today 👇</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 w-64 rounded border border-gray-600 text-white bg-transparent focus:outline-none focus:border-blue-500"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 w-64 rounded border border-gray-600 text-white bg-transparent focus:outline-none focus:border-blue-500"
          />
          <button 
            onClick={() => setShowPassword(!showPassword)} 
            className={`absolute right-0 top-0 mt-2.5 mr-2 ${showPassword ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-900`}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="flex space-x-4 mb-4 justify-center">
          <Button className="w-32 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow">
            <FaGithub className="inline-block" /> Github
          </Button>
          <Button className="w-32 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow">
            <FcGoogle className="inline-block" /> Google
          </Button>
        </div>
        <div>
          <Button onClick={handleSignIn} className="w-64 text-white font-bold py-2 px-4 rounded shadow">
            Sign In
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg text-white">
            New here? <Link href="/sign-up" className="underline text-blue-400 hover:text-blue-700">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
