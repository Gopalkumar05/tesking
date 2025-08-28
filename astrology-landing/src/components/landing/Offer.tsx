'use client';

import { useState, useEffect } from 'react';

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-purple-600 dark:bg-purple-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Special Offer Ending Soon!
        </h2>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
          Book your first session now and get 20% off. This offer expires in:
        </p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-white rounded-lg p-4 w-20">
            <div className="text-2xl font-bold text-purple-600">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
          <div className="bg-white rounded-lg p-4 w-20">
            <div className="text-2xl font-bold text-purple-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
          <div className="bg-white rounded-lg p-4 w-20">
            <div className="text-2xl font-bold text-purple-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-sm text-gray-600">Seconds</div>
          </div>
        </div>
        
        <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">
          Claim Offer Now
        </button>
      </div>
    </section>
  );
}