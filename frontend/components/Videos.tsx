"use client";
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import React from 'react';

interface VideoProps {
  title: string;
  thumbnail: StaticImageData | string;
  description: string;
  videoUrl: string;
  playIcon?: React.ReactNode; 
}

const Video: React.FC<VideoProps> = ({ title, thumbnail, description, videoUrl, playIcon }) => {
  const handleClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-2">
      <div className="bg-white rounded-xl shadow-md overflow-hidden m-3 transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer" onClick={handleClick}>
        <div className="relative">
          <Image className="object-cover" src={thumbnail} alt={title} layout="responsive" width={500} height={300} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className='text-indigo-500 text-3xl'>{playIcon}</span> {/* Adjust the size here */}
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-rosered font-semibold">{title}</div>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
