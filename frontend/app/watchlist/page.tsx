"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../globals.css";

export default function Page() {
  const videos = [
    { title: 'Video 1', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing', url: 'url_to_video_1' },
    { title: 'Video 2', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing', url: 'url_to_video_2' },
    { title: 'Video 3', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing', url: 'url_to_video_3' },
    // Add more videos as needed
  ];

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen p-0 m-0">
        <Carousel showThumbs={false} className="custom-carousel">
          {videos.map((video, index) => (
            <div key={index} className="relative flex flex-col justify-center items-center">
              <video controls src={video.url} className="w-full" />
              <div className="absolute top-2 left-2 text-white text-left">
                <h2 className="text-lg font-bold">{video.title}</h2>
                <p className="text-sm">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
}