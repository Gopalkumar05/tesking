export default function Stats() {
  const stats = [
    { value: '3000+', label: 'Sessions' },
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-700 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}