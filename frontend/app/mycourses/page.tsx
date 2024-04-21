// Page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Video from '@/components/Videos'
import React from 'react'
import thumbnailImage from '../assets/thumbnail.png'
import { FiPlay } from 'react-icons/fi'

export default function Page() {      
  return (
    <div className='min-h-screen h-max overflow-auto pt-32'>
      <div style={{ position: 'fixed', zIndex: 1000 }}>
        <Navbar />
      </div>
      <div className="flex flex-wrap justify-center pb-12">
        <Video 
          title={'lorem ipsum'} 
          thumbnail={thumbnailImage}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu'} 
          videoUrl={'https://youtube.com/shorts/WkEQhUMs77Y?si=YOCcajwOPkMSHfWO'}
          playIcon={<FiPlay />}
        />
        <Video 
          title={'lorem ipsum'} 
          thumbnail={thumbnailImage}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu'} 
          videoUrl={'https://example.com/video2.mp4'}
          playIcon={<FiPlay />}
        />
        <Video 
          title={'lorem ipsum'} 
          thumbnail={thumbnailImage}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu'} 
          videoUrl={'https://example.com/video3.mp4'}
          playIcon={<FiPlay />}
        />
        <Video 
          title={'lorem ipsum'} 
          thumbnail={thumbnailImage}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu'} 
          videoUrl={'https://example.com/video3.mp4'}
          playIcon={<FiPlay />}
        />
        <Video 
          title={'lorem ipsum'} 
          thumbnail={thumbnailImage}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu'} 
          videoUrl={'https://example.com/video3.mp4'}
          playIcon={<FiPlay />}
        /><Video 
        title={'lorem ipsum'} 
        thumbnail={thumbnailImage}
        description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu'} 
        videoUrl={'https://example.com/video3.mp4'}
        playIcon={<FiPlay />}
      />
      </div>
      <div className='inset-x-0 bottom-0'>
        <Footer />
      </div>
    </div>
  );
}