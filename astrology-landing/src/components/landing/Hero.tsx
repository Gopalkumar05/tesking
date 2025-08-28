

"use client";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Star, ThumbsUp, ShieldCheck } from 'lucide-react';
import { HeroData, Badge } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  Star,
  ThumbsUp,
  ShieldCheck
};

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch('/hero.ts');
        if (!response.ok) {
          throw new Error('Failed to fetch hero data');
        }
        const data: HeroData = await response.json();
        setHeroData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">Loading...</div>
      </section>
    );
  }

  if (error || !heroData) {
    return (
      <section className="py-12 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">Error: {error || 'Failed to load content'}</div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {heroData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              {heroData.subtitle}
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              {heroData.ctaText}
            </button>

            <div className="mt-12 flex flex-wrap gap-4">
              {heroData.badges.map((badge: Badge, index: number) => {
                const IconComponent = iconMap[badge.icon];
                return (
                  <div key={index} className="flex items-center bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 px-4">
                    {IconComponent && <IconComponent className="w-5 h-5 text-purple-600 mr-2" />}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-purple-300 dark:bg-purple-800 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-60 md:h-60 bg-purple-400 dark:bg-purple-700 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://t4.ftcdn.net/jpg/07/24/02/05/240_F_724020559_S0MbGVgvzbnyvFxqQYGFuH60hA9R7KrO.jpg"
                      alt="Astrologer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
