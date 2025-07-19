
import React, { useEffect, useRef, useState } from 'react';
import { Building, Users, Award, Timer, Search, Sparkles } from 'lucide-react';
import sammedBuilding from '/2dbuilding_samm-removebg-preview.png'
import sammedDevelopers from '/sammed-dev-removebg-preview.png'



const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    // { icon: Building, number: '34', label: '34 Years of Experince' },
    // { icon: Users, label: 'Happy Families', number: '500+' },
    // { icon: Award, number: '15+', label: 'Years Experience' },
    // { icon: Sparkles, number: '99%', label: 'Satisfaction Rate' },
    //  { icon: Award, number: '15+', label: 'Years Experience' },
    // { icon: Sparkles, number: '99%', label: 'Satisfaction Rate' },

    { icon: Building, label: '34 Years of Experince' },
    { icon: Users, label: 'Built on Trust & Belief',},
    { icon: Award,  label: 'Quality Driven' },
    { icon: Timer, label: 'Timely Delivery' },
    { icon: Sparkles,  label: 'Customer Satisfication' },
    { icon: Search , label: 'Utmost Transparency' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-100/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-100/40 rounded-full animate-bounce" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 `}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
        OUR

            <span className="text-teal-600 ml-2">USP's</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Serenity - where modern architecture meets tranquil living. 
            Our thoughtfully designed residences offer the perfect blend of luxury, 
            comfort, and serenity in the heart of the city.
          </p> */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-white border-2 border-b-4 border-b-red-950 rounded-2xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-[#4c0519] to-[#4c0519] rounded-full">
                  <stat.icon className="text-white" size={32} />
                </div>
              </div>
              {/* <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div> */}
              <div className="text-gray-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className={`bg-gradient-to-r from-teal-500 to-blue-600  rounded-3xl p-12 text-white transform transition-all duration-1000 `} style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">
                  <img src={sammedBuilding} />
                </div>
                {/* <h4 className="text-2xl font-semibold mb-4">Modern Architecture</h4>
                <p className="opacity-90">
                  Contemporary design meets functional elegance in every corner of Serenity.
                </p> */}
              </div>
            </div>
                   <div>
                    <div className='w-full flex justify-center items-center flex-col'>
                          <img src={sammedDevelopers} className='lg:h-50 lg:w-50' />
                              <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Truly Inspired by Legacy</h3>
                          </div>
          
              <p className=" text-sm md:text-xl mb-8 opacity-90">
 With over 34 years of industry experience, have successfully delivered numerous projects, earning a reputation built on strong values, ethics, and transparency. Committed to customer satisfaction, we prioritize quality craftsmanship and timely delivery, ensuring every home we build becomes a trusted sanctuary for our buyers. Our dedication to excellence and integrity sets us apart in creating lasting relationships and exceptional living spaces.
              </p>
              <div className="space-y-4">
                {/* <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Premium architectural design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sustainable living solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Smart home integration</span>
                </div> */}
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

            // <div className="mb-4 flex justify-center">
            //     {/* <div className="p-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full"> */}
            //       {/* <stat.icon className="text-white" size={32} /> */}
            //       {typeof stat.icon === 'string' ? (
            //         <img src={stat.icon} />
            //       ) : (
            //         React.createElement(stat.icon, { className: "text-white", size: 32 })
            //       )}
            //     {/* </div> */}
            //   </div>