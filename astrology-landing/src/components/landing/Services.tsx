

"use client";

import { Star, Calendar, Video, MessageCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Star,
      title: 'Birth Chart Analysis',
      description: 'Understand your personality, strengths, and challenges through your natal chart.'
    },
    {
      icon: Calendar,
      title: 'Future Predictions',
      description: 'Get insights into your future with accurate astrological predictions.'
    },
    {
      icon: Video,
      title: 'Live Sessions',
      description: 'One-on-one consultations with expert astrologers via video call.'
    },
    {
      icon: MessageCircle,
      title: 'Quick Questions',
      description: 'Get answers to your specific questions through chat or short calls.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}