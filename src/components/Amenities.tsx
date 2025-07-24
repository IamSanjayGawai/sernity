import React, { useEffect, useRef, useState } from "react";
import {
  // Waves,
  // Dumbbell,
  // TreePine,
  // Car,
  // Shield,
  // Wifi,
  // Baby,
  // GamepadIcon
  TreePine,
  Building2,
  Layers,
  Car,
  Trees,
  Mail,
  CloudRain,
  ParkingCircle,
  DoorOpen,
  SlidersHorizontal,
  Bath,
  LayoutGrid,
  Shield,
  UtensilsCrossed,
  Zap,
  DoorClosed,
  Paintbrush,
  Grid2X2,
  Circle,
} from "lucide-react";
import structure1 from "/structure1.png";

const Amenities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const amenities = [
    {
      icon: TreePine,
      title: "Landscaping on Top Terrace",
      description: "Beautiful green terrace spaces for relaxation",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Building2,
      title: "Lift (KONE brand) / Equivalent",
      description: "Modern lift systems with reliable performance",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Layers,
      title: "Interlocking Pavers",
      description: "Stylish interlocking pavers for surroundings",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Car,
      title: "Individual Car Charging",
      description: "Dedicated EV charging points in parking",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Trees,
      title: "Landscape Surroundings",
      description: "Green surroundings adjoining the compound wall",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Mail,
      title: "Letter Box",
      description: "Individual letter boxes for every unit",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: CloudRain,
      title: "Rainwater Harvesting",
      description: "Sustainable water harvesting system",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: ParkingCircle,
      title: "Ground Floor Parking",
      description: "Ample parking space at ground level",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: DoorOpen,
      title: "Main Gate",
      description: "Well-designed secure main entrance gate",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: SlidersHorizontal,
      title: "Auto Level Controller for UGWT",
      description: "Automatic level control for underground water tank",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const structureSpecs = [
    {
      icon: Building2,
      title: "Earthquake resistant RCC structure",
    },
    {
      icon: Building2,
      title: "AAC Blocks Masonry",
    },
  ];

  // 2️⃣ Plaster
  const plasterSpecs = [
    {
      icon: Layers,
      title: "Ext – Double coat cement plaster",
    },
    {
      icon: Layers,
      title: "Int – Rough Plaster with smooth gypsum finish",
    },
  ];

  // 3️⃣ Bathrooms
  const bathroomSpecs = [
    {
      icon: Bath,
      title: "Glazed tiles up to ceiling height in bathroom",
    },
    {
      icon: Bath,
      title: "Plumbing provision for solar water in common bathroom",
    },
    {
      icon: Bath,
      title: "Jaquar or equivalent brand sanitary ware",
    },
    {
      icon: Bath,
      title: "Jaquar CP Fittings",
    },
    {
      icon: Bath,
      title: "Solar water Connection in Common Bathroom",
    },
  ];

  // 4️⃣ Flooring
  const flooringSpecs = [
    {
      icon: LayoutGrid,
      title: "2’ x 4’ Vitrified Tiles flooring in all rooms",
    },
    {
      icon: LayoutGrid,
      title:
        "12” x 12” anti-skid ceramic tiles for all bathrooms and balconies",
    },
  ];

  // 5️⃣ Security
  const securitySpecs = [
    {
      icon: Shield,
      title: "CCTV at parking level",
    },
    {
      icon: Shield,
      title: "Security access control in lobby area",
    },
    {
      icon: Shield,
      title: "Video Door Phone at main door",
    },
  ];

  // 6️⃣ Kitchen
  const kitchenSpecs = [
    {
      icon: UtensilsCrossed,
      title: "Granite Kitchen Platform with stainless steel sink",
    },
    {
      icon: UtensilsCrossed,
      title: "Decorative glazed tiles dado up to lintel level",
    },
  ];

  // 7️⃣ Electrical
  const electricalSpecs = [
    {
      icon: Zap,
      title: "Adequate electrical points with modular switches",
    },
    {
      icon: Zap,
      title: "Concealed copper wiring with circuit breakers",
    },
    {
      icon: Zap,
      title: "TV and wifi point in living room & bedroom",
    },
    {
      icon: Zap,
      title: "Provision for water purifier and kitchen exhaust point",
    },
  ];

  // 8️⃣ Doors
  const doorsSpecs = [
    {
      icon: DoorClosed,
      title: "Laminated main door with Mortise lock",
    },
    {
      icon: DoorClosed,
      title: "Internal – Flush doors with wooden door frames and mortise locks",
    },
  ];

  // 9️⃣ Windows
  const windowsSpecs = [
    {
      icon: Grid2X2,
      title: "3 track powder coated aluminium windows with mosquito net",
    },
    {
      icon: Grid2X2,
      title: "Granite frames for all windows",
    },
    {
      icon: Grid2X2,
      title: "MS safety grills for all windows",
    },
  ];

  // 🔟 Painting
  const paintingSpecs = [
    {
      icon: Paintbrush,
      title: "Internal – OBD",
    },
    {
      icon: Paintbrush,
      title: "External – Apex / Equivalent Paint",
    },
  ];

  const floorPlanSections = [
    { icon: "A", name: "Entry" },
    { icon: "B", name: "Living" },
    { icon: "C", name: "Attached Balcony" },
    { icon: "D", name: "Kitchen" },
    { icon: "E", name: "Dry Balcony" },
    { icon: "F", name: "Common Bathroom" },
    { icon: "G", name: "Bedroom 1" },
    { icon: "H", name: "Bedroom 2" },
    { icon: "I", name: "Attached Bathroom" },
    { icon: "J", name: "Attached Balcony" },
    { icon: "K", name: "Bedroom 3" },
    { icon: "L", name: "Attached Bathroom" },
    { icon: "M", name: "Walk-in Wardrobe" },
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
    <>
      {" "}
      <section
        id="amenities"
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/30 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-teal-200/40 rounded-full animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full animate-spin"
            style={{ animationDuration: "25s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 `}
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Common <span className="text-teal-600">Amenities & Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury living with our comprehensive range of
              world-class amenities
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${amenity.color} opacity-10 rounded-bl-3xl group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`mb-6 p-4 bg-gradient-to-r ${amenity.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <amenity.icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>

                  {/* Hover Animation Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${amenity.color} w-0 group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Lifestyle Section */}
          <div
            className={`bg-white rounded-3xl p-12 shadow-2xl`}
       
            style={{ animationDelay: "0.8s" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 ">
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  Project <span className="text-teal-600">Specifications</span>
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Every amenity at Serenity has been carefully selected to
                  enhance your lifestyle and create memorable experiences for
                  you and your loved ones. From recreational facilities to
                  essential services, we've thought of everything.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-3xl font-bold text-teal-700">Structure</h2>
                    {structureSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Plaster</h2>
                    {plasterSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Flooring</h2>
                    {flooringSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Kitchen</h2>
                    {kitchenSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Bathrooms</h2>
                    {bathroomSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Electrical</h2>
                    {electricalSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Windows</h2>
                    {windowsSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Security</h2>
                    {securitySpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Painting</h2>
                    {paintingSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold  text-teal-700">Doors</h2>
                    {doorsSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <div className="w-full flex justify-center items-center mb-5">
        <img src={structure1} className="lg:w-[80%] lg:h-full h-[400px] " />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {floorPlanSections.map((section, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">
                  {section.icon}
                </div>
                <span className="text-gray-800 font-medium">
                  {section.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
