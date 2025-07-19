
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Car, Train, Plane, Building } from 'lucide-react';

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const locationHighlights = [
    {
      icon: Building,
      title: 'City Center',
      distance: '5 km',
      time: '15 min',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Train,
      title: 'Metro Station',
      distance: '2 km',
      time: '5 min',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Plane,
      title: 'Airport',
      distance: '25 km',
      time: '45 min',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Car,
      title: 'Highway',
      distance: '1 km',
      time: '3 min',
      color: 'from-red-400 to-red-600'
    },
  ];

  // const nearbyPlaces = [
  //   { name: 'Shopping Mall', distance: '800m', type: 'Shopping' },
  //   { name: 'International School', distance: '1.2km', type: 'Education' },
  //   { name: 'Multi-specialty Hospital', distance: '1.5km', type: 'Healthcare' },
  //   { name: 'Tech Park', distance: '3km', type: 'Business' },
  //   { name: 'Entertainment Hub', distance: '2km', type: 'Recreation' },
  //   { name: 'Golf Course', distance: '4km', type: 'Sports' },
  // ];

// Retail / Mall
const shoppingPlaces = [
  { name: 'Dorabjees Mall', distance: '10 mins' },
  { name: 'D- Mart (Dorabjees)', distance: '10 mins' },
  { name: '93 Avenue', distance: '15 mins' },
  { name: 'Clover Hills Plaza', distance: '15 mins' },
  { name: 'Amanora Mall', distance: '25 mins' },
  { name: 'Seasons Mall', distance: '25 mins' },
];

// Banks / ATMs
const banks = [
  { name: 'SBI', distance: '02 mins' },
  { name: 'HDFC Bank', distance: '05 mins' },
  { name: 'ICICI Bank', distance: '10 mins' },
];

// IT Parks
const itParks = [
  { name: 'Magarpatta City', distance: '25 mins' },
  { name: 'EON IT Park', distance: '35 mins' },
  { name: 'Hadapsar MIDC', distance: '15 mins' },
  { name: 'Cerebrum IT Park', distance: '30 mins' },
];

// Restaurants / Hotels
const restaurants = [
  { name: 'South Samrat', distance: '05 mins' },
  { name: 'Dine n Dine', distance: '05 mins' },
  { name: 'Salt', distance: '05 mins' },
  { name: 'Corinthians Club', distance: '10 mins' },
  { name: 'ABC Farms Café', distance: '10 mins' },
];

// Key Places
const keyPlaces = [
  { name: 'Salukhe Vihar', distance: '05 mins' },
  { name: 'Kondhwa', distance: '10 mins' },
  { name: 'NIBM', distance: '10 mins' },
  { name: 'Fatima Nagar', distance: '10 mins' },
  { name: 'Camp', distance: '20 mins' },
  { name: 'Pune Station', distance: '25 mins' },
  { name: 'Hadapsar', distance: '25 mins' },
  { name: 'Kharadi', distance: '30 mins' },
  { name: 'Marketyard', distance: '30 mins' },
  { name: 'Swargate', distance: '30 mins' },
];

// Hospitals
const hospitals = [
  { name: 'Ruby Hall Clinic', distance: '05 mins' },
  { name: 'Healing Hands Clinic', distance: '05 mins' },
  { name: 'Prime Multispecialty Hospital', distance: '10 mins' },
  { name: 'Sahaydri Hospital', distance: '20 mins' },
];

// Schools
const schools = [
  { name: 'Mount Caramel School', distance: '07 mins' },
  { name: 'VIBGYOR School', distance: '10 mins' },
  { name: 'Bishop’s School', distance: '10 mins' },
  { name: 'Sanskriti International School', distance: '10 mins' },
  { name: 'Euro Kids School', distance: '20 mins' },
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
    <section id="location" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-teal-100/100 to-blue-100/80 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-green-100/100 to-teal-100/40 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Prime <span className="text-teal-600">Location</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located with excellent connectivity to all major destinations
          </p>
        </div> */}

        {/* Location Highlights */}
        {/* <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '0.3s' }}>
          {locationHighlights.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-300 border-2 border-x-2 border-b-teal-600  group"
            >
              <div className={`mb-6 p-4 bg-gradient-to-r ${location.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 border-2 border-x-2 border-b-teal-600`}>
                <location.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{location.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-teal-500" size={16} />
                  <span className="text-gray-600">{location.distance}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-blue-500" size={16} />
                  <span className="text-gray-600">{location.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Map and Details */}
        <div className={`grid grid-cols-1 lg:grid-cols-1 transform transition-all duration-1000 
        }`} style={{ animationDelay: '0.6s' }}>
          {/* Interactive Map Placeholder */}
          {/* <div className="relative">
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Key Highlights</h3>
              
          
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <div className="relative h-64 flex items-center justify-center">
          
                  <div className="absolute z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Building className="text-teal-600" size={32} />
                  </div>
                  
         
                  <div className="absolute top-4 left-8 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-6 left-12 w-10 h-10 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-8 right-8 w-8 h-8 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  
    
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full">
                      <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Excellent public transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Walking distance to essential services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Prime commercial and business hub</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Nearby Places */}
   <div className=" px-8 ">
   <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
            Key <span className="text-teal-600">Distance</span>
          </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8'>

  {/* Shopping Places */}
  <div className=''>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">Retail / Mall</h4>
  </div>
  <div className="flex flex-col gap-2 mb-8">
    {shoppingPlaces.map((place, index) => (
      <div
        key={`shopping-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
           
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Banks */}
  <div className=''>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">Banks / ATMs</h4>
  </div>
    <div className="flex flex-col gap-2 mb-8">
    {banks.map((place, index) => (
      <div
        key={`bank-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* IT Parks */}
  <div className=''>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">IT Parks</h4>
  </div>
    <div className="flex flex-col gap-2 mb-8">
    {itParks.map((place, index) => (
      <div
        key={`itpark-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Restaurants */}
  <div>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">Restaurants / Hotels</h4>
  </div>
    <div className="flex flex-col gap-2 mb-8">
    {restaurants.map((place, index) => (
      <div
        key={`restaurant-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Key Places */}
  <div>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">Key Places</h4>
  </div>
    <div className="flex flex-col gap-2 mb-8">
    {keyPlaces.map((place, index) => (
      <div
        key={`keyplace-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Hospitals */}
  <div>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">Hospitals</h4>
  </div>
    <div className="flex flex-col gap-2 mb-8">
    {hospitals.map((place, index) => (
      <div
        key={`hospital-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Schools */}
  <div>
  <h4 className="text-xl font-bold text-white rounded mb-2 bg-teal-600 py-4 px-2">Schools</h4>
  </div>
    <div className="flex flex-col gap-2 mb-8">
    {schools.map((place, index) => (
      <div
        key={`school-${index}`}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 border-2 border-x-2 border-b-teal-600 "
      >
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-semibold text-gray-800">{place.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-teal-600">{place.distance}</div>
        </div>
      </div>
    ))}
  </div>

  {/* CTA Block - same */}


</div>
<div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white text-center">
  <h4 className="text-2xl font-bold mb-4">View Location Map</h4>
  <div className="w-full h-full mb-6 rounded-2xl overflow-hidden border-4 border-white">
    <iframe
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d473.00685591571084!2d73.90030301094069!3d18.481174653729955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI4JzUxLjkiTiA3M8KwNTQnMDIuMSJF!5e0!3m2!1sen!2sin!4v1752939951092!5m2!1sen!2sin" width="600" height="450"   loading="lazy"
      allowFullScreen
    ></iframe>
  </div>
</div>

</div>
        </div>
      </div>
    </section>
  );
};

export default Location;
