import React, { useEffect, useRef, useState } from "react";
import {
  Landmark,
  Expand,
  Shuffle,
  Car,
  Snowflake,
  Building2,
} from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: Landmark,
      title: "Vaastu Compliant",
      description: "Designed as per Vaastu principles for positive energy flow",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Expand,
      title: "Spacious 3 BHK",
      description: "Large, thoughtfully designed 3-bedroom homes",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: Shuffle,
      title: "Cross Ventilation",
      description: "Homes designed for maximum natural airflow",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Car,
      title: "Covered Parking",
      description: "Safe, secure covered parking for residents",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Snowflake,
      title: "AC Provision",
      description: "AC points provided for comfortable living",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Building2,
      title: "Roof-Top Amenities",
      description: "Exclusive rooftop leisure & recreation spaces",
      color: "from-pink-400 to-red-500",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50/30 to-blue-50/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Project <span className="text-teal-600">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional features that make Serenity stand out from
            the rest
          </p>
        </div>

        <div className="flex flex-col w-full gap-6">
          <img src="/Building1.png" className="w-full rounded-3xl" />
          <img src="/Building2.png" className="w-full rounded-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                ></div>
                <div className="relative bg-white rounded-3xl p-8 m-1">
                  <div
                    className={`mb-6 p-4 bg-gradient-to-r ${feature.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
