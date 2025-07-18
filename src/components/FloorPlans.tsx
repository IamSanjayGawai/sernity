
import React, { useEffect, useRef, useState } from 'react';
import { Maximize, Maximize2, Expand, Grid2X2 } from 'lucide-react';
import floor_plan from '/floor_plan.png'
import parking from '/parking.png'


const FloorPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFloor, setActiveFloor] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const floorPlans = [
    {
      type: "3 BHK: 101",
      carpet_area: "1038 sq ft",
      dry_balcony: "30 sq ft",
      balcony_area: "79 sq ft",
      total_area: "1147 sq ft",
      total_area_m: "106.59 sq m",
      // description: "Ideal for small families seeking comfort",
      features: ["Master Bedroom", "Guest Room", "2 Bathrooms", "Large Balcony"],
      // color: "from-teal-400 to-teal-600"
    },
    {
      type: "3 BHK: 102",
      carpet_area: "1048 sq ft",
      dry_balcony: "30 sq ft",
      balcony_area: "110 sq ft",
      total_area: "1188 sq ft",
      total_area_m: "110.39 sq m",
      // description: "Ideal for small families seeking comfort",
      features: ["Master Bedroom", "Guest Room", "2 Bathrooms", "Large Balcony"],
      // color: "from-teal-400 to-teal-600"
    },


  ];

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

  return (
    <section id="floor-plans" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-blue-100/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-100/30 to-teal-100/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Floor <span className="text-teal-600">Plans</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our thoughtfully designed floor plans that maximize space and comfort
          </p>
        </div>

        {/* Floor Plan Tabs */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '0.3s' }}>
          <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
            {floorPlans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActiveFloor(index)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFloor === index
                    ? 'bg-white text-teal-600 shadow-lg scale-105'
                    : 'text-gray-600 hover:text-teal-500'
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </div>

        {/* Active Floor Plan */}
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '0.6s' }}>
          {floorPlans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeFloor === index ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                {/* Floor Plan Image/Diagram */}


                {/* Plan Details */}
                <div className="space-y-8">
                  <div>
                    {/* <h4 className="text-3xl font-bold text-gray-800 mb-4">{plan.type} Residence</h4> */}
                    {/* <p className="text-xl text-gray-600 mb-6">{plan.description}</p> */}
                    
                    <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <Maximize2 className="mx-auto mb-2 text-teal-500" size={32} />
                        <div className="font-semibold text-gray-800">{plan.carpet_area}</div>
                        <div className="text-sm text-gray-600">Carpet Area</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <Maximize className="mx-auto mb-2 text-teal-500" size={32} />
                        <div className="font-semibold text-gray-800">{plan.dry_balcony}</div>
                        <div className="text-sm text-gray-600">Dry Balcony</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <Maximize className="mx-auto mb-2 text-teal-500" size={32} />
                        <div className="font-semibold text-gray-800">{plan.balcony_area}</div>
                        <div className="text-sm text-gray-600">Balcony Area</div>
                      </div>
                                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <Grid2X2 className="mx-auto mb-2 text-teal-500" size={32} />
                        <div className="font-semibold text-gray-800">{plan.total_area}</div>
                        <div className="text-sm text-gray-600">Tatal Area Sq. Ft.</div>
                      </div>
                                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <Expand className="mx-auto mb-2 text-teal-500" size={32} />
                        <div className="font-semibold text-gray-800">{plan.total_area_m}</div>
                        <div className="text-sm text-gray-600">Tatal Area Sq. M.</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* <h5 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h5> */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg hover:scale-105 transform transition-all duration-200"
                        >
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div> */}
                  </div>
{/* 
                  <button className={`bg-gradient-to-r  text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    View Detailed Plan
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full'>
          <img src={floor_plan} className='w-full' />
        </div>

                <div className='flex justify-center items-center flex-col' >
                  <h2 className='text-4xl font-bold mt-5 mb-5'>Parking</h2>
                <div className=' w-[70%]'>
          <img src={parking} className='w-full' />
        </div>
        </div>

        
      </div>
    </section>
  );
};

export default FloorPlans;
