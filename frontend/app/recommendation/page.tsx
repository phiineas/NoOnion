"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../../components/Footer';

export default function RecommendationPage() {
  const [recommendedCourses, setRecommendedCourses] = useState<string[]>([]);

  const router = useRouter();

  const courses = [
    { id: '1', title: 'Course 1', subject: 'Subject 1', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '2', title: 'Course 2', subject: 'Subject 2', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '3', title: 'Course 3', subject: 'Subject 3', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '4', title: 'Course 4', subject: 'Subject 4', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '5', title: 'Course 5', subject: 'Subject 5', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '6', title: 'Course 6', subject: 'Subject 6', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '7', title: 'Course 7', subject: 'Subject 7', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '8', title: 'Course 8', subject: 'Subject 8', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '9', title: 'Course 9', subject: 'Subject 9', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { id: '10', title: 'Course 10', subject: 'Subject 10', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
  ];

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledCourses = shuffleArray(courses);

  function handleRecommendation(courseId: string) {
    if (!recommendedCourses.includes(courseId)) {
      const newRecommendedCourses = [...recommendedCourses, courseId];
      setRecommendedCourses(newRecommendedCourses);
      localStorage.setItem('recommendedCourses', JSON.stringify(newRecommendedCourses));
    }
    router.push('/home');
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      {shuffledCourses.slice(0, 6).map((course) => (
        <div key={course.id} className="flex flex-col bg-slate-200 rounded shadow-lg m-4 w-11/12 max-h-screen transform transition-all duration-200 ease-in-out hover:text-blue-600 hover:scale-[1.02] flex-grow border-2 border-gray-300">
          <div className="p-4">
            <h2 className="font-semibold text-xl">{course.title}</h2>
            <h3 className="text-bg-gray-500 text-sm mb-2">{course.subject}</h3>
            <p className="text-sm">{course.description}</p>
          </div>
          <div className="px-4 pb-4 mt-auto">
            <button className="bg-rosered text-white rounded px-2 py-1" onClick={() => handleRecommendation(course.id)}>Recommend</button>
          </div>
        </div>
      ))}
      <Footer /> 

      <pre>{JSON.stringify(recommendedCourses, null, 2)}</pre>
    </div>
  )
}