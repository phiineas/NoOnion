"use client";
import React, { useState, useEffect } from 'react'
import { BiTrendingUp } from 'react-icons/bi'
import Image from 'next/image';
import bgImage from '../app/assets/profile.png'

export default function Trending() {
    const [course, setCourse] = useState<{ title: string, description: string } | null>(null);

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setCourse({
                title: 'Most Recently Watched Course',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu.'
            });
        }, 1000);
    }, []);

    return (
        <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                justifyContent: 'center', 
                height: 'fit-content', 
                padding: '0 0px' 
            }}>
                <h1 style={{ display: 'flex', alignItems: 'center', fontSize: '2em' }}>
                    <BiTrendingUp size={32} />
                    Trending Now
                </h1>
                {course ? (
                    <div style={{
                        position: 'relative',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        padding: '0 20px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Added boxShadow for shadow effect
                        width: '500px',
                        height: '300px', 
                        display: 'flex',
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                    }}>
                        <div className="relative flex items-center justify-center">
                                <Image src={bgImage} alt="Background" className="h-20 w-20 transition-all duration-300 ease-in-out" />
                                <div className="ml-20 transition-all duration-300 ease-in-out group hover:underline hover:text-rosered hover:scale-110"> 
                                <p>{course.description}</p>
                                </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
        </div>
    )
}