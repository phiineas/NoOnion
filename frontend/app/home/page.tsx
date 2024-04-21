import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Something from '@/components/Something';
import Review from '@/components/Review';
import VideoCarousel from '../watchlist/page';
import Trending from '@/components/Trending';

export default function Page() {
  const dummyReviews = [
    { username: 'User1', date: '2024-01-11', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu', rating: 5 },
    { username: 'User2', date: '2024-04-12', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu', rating: 4 },
    { username: 'User3', date: '2024-05-03', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu', rating: 3 },
    { username: 'User4', date: '2023-01-07', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu', rating: 3 },
  ];

  return (
    <div className='min-h-screen h-max overflow-auto pt-28'>
      <div style={{ position: 'fixed', zIndex: 1000 }}>
        <Navbar />
      </div>
      <div className='h-max overflow-auto p-4'>
        <div className='p-4'>
            <Something />
        </div>
        <div className='p-4'>
            <Review reviews={dummyReviews} />
        </div>
        <div className='text-center p-2'> 
            <div className='p-2 mb-0'> 
            <h2 className='text-2xl font-bold mt-2'>All the skills you need in one place</h2>    
            </div>
            <div className='m-0'>
            <VideoCarousel />
            </div>
        </div>
        <div className='mb-10'> 
            <Trending />
        </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  );
}
