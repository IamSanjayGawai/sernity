
import React, { useEffect, useRef, useState } from 'react';
import { Shield, Wifi, Car, Droplets, Wind, Sun,   Landmark,
  Expand,
  Shuffle,
  Snowflake,
  Building2, } from 'lucide-react';
  import building from '/Building1.png'
  import building2 from '/Building2.png'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // const features = [
  //   {
  //     icon: Shield,
  //     title: '24/7 Security',
  //     description: 'Advanced security systems with round-the-clock monitoring',
  //     color: 'from-red-400 to-pink-500'
  //   },
  //   {
  //     icon: Wifi,
  //     title: 'High-Speed Internet',
  //     description: 'Fiber optic connectivity throughout the building',
  //     color: 'from-blue-400 to-cyan-500'
  //   },
  //   {
  //     icon: Car,
  //     title: 'Premium Parking',
  //     description: 'Covered parking spaces with EV charging stations',
  //     color: 'from-green-400 to-teal-500'
  //   },
  //   {
  //     icon: Droplets,
  //     title: 'Water Features',
  //     description: 'Beautiful water gardens and fountain areas',
  //     color: 'from-blue-500 to-indigo-600'
  //   },
  //   {
  //     icon: Wind,
  //     title: 'Climate Control',
  //     description: 'Advanced HVAC systems for optimal comfort',
  //     color: 'from-gray-400 to-gray-600'
  //   },
  //   {
  //     icon: Sun,
  //     title: 'Solar Power',
  //     description: 'Eco-friendly solar energy integration',
  //     color: 'from-yellow-400 to-orange-500'
  //   },
  // ];


  const features = [
  {
    icon: Landmark, // Vaastu
    title: 'Vaastu Compliant',
    description: 'Designed as per Vaastu principles for positive energy flow',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Expand, // Spacious 3 BHK
    title: 'Spacious 3 BHK',
    description: 'Large, thoughtfully designed 3-bedroom homes',
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: Shuffle, // Cross Ventilation
    title: 'Cross Ventilation',
    description: 'Homes designed for maximum natural airflow',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Car, // Covered Parking
    title: 'Covered Parking',
    description: 'Safe, secure covered parking for residents',
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Snowflake, // AC Provision
    title: 'AC Provision',
    description: 'AC points provided for comfortable living',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    icon: Building2, // Roof-Top Amenities
    title: 'Roof-Top Amenities',
    description: 'Exclusive rooftop leisure & recreation spaces',
    color: 'from-pink-400 to-red-500',
  },
];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50/30 to-blue-50/20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Project <span className="text-teal-600">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional features that make Serenity stand out from the rest
          </p>
        </div>

        <div className='flex flex-col w-full gap-6'>
          <div className='w-full'>

            <img src={building} className='w-full rounded-3xl' />
          </div>

               <div className='w-full'>

            <img src={building2} className='w-full rounded-3xl' />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
              <div className="relative bg-white rounded-3xl p-8 m-1">
                {/* Icon */}
                <div className={`mb-6 p-4 bg-gradient-to-r ${feature.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '0.8s' }}>
          <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
            Discover More Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
