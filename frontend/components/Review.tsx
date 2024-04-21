"use client";
import React from 'react';
import Image from 'next/image';
import logo from '../app/assets/profile.png';

const ReviewCard = ({ review }: { review: any }) => {
  
    const handleClick = () => {
      // Handle click event here
      console.log(`You clicked on ${review.username}'s review`);
    };
    
    return (
      <div 
          className="max-w-xs bg-white text-gray-700 shadow-md overflow-hidden m-3 cursor-pointer bg-gradient-to-br from-red-100 to-red-200 rounded-lg" 
          onClick={handleClick}
          style={{ width: '320px', padding: '1.5rem' }} 
        >
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <Image src={logo} alt='profile' className="h-12 w-12 object-cover rounded-full" />
            </div>
            <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-rosered font-semibold">{review.username}</div>
                <p className="mt-2 text-gray-500">{review.content}</p>
                <div className="mt-2 text-gray-500">
                    {Array(review.rating).fill(undefined, 0, review.rating).map((_, i) => (
                        <span key={i} className="text-rosered">★</span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
};

const Review = ({ reviews }: { reviews: any[] }) => {
  return (
    <div>
      <div className="relative text-left text-bg-gray-700 font-bold text-xl mb-4 pt-4 font-sans">
        See what others are achieving through learning
      </div>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
