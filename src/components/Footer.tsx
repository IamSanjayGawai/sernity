
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '/serenity-logo.png'

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Floor Plans', href: '#floor-plans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-500 to-gray-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-900/20 to-blue-900/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-600/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-600/10 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
    <img src={logo} className='h-[75px] w-[200px]' />
            <p className="text-gray-300 leading-relaxed">
              Where modern living meets tranquil serenity. Experience the perfect blend of luxury, 
              comfort, and peace in the heart of the city.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-teal-400 mt-1" size={20} />
                <div className="text-gray-300">
                  <p>CTS No. 563, Plot No. 17,</p>
                  <p>Salunkhe Vihar Road, Kondhwa Kh, </p>
                  <p>Pune - 411 048</p>

                 
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-teal-400" size={20} />
                <div className="text-gray-300">
                  <p>+91 988166 7979</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-teal-400" size={20} />
                <div className="text-gray-300">
                  <p> sammeddevelopers@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Stay Updated</h4>
            {/* <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p> */}
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-l-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 rounded-r-xl hover:scale-105 transform transition-all duration-300">
                  <Mail size={20} />
                </button>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Latest project updates</p>
                <p>✓ Exclusive early bird offers</p>
                <p>✓ Investment opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Serenity Residences. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-4 right-4 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
          🦋
        </div>
      </div>
    </footer>
  );
};

export default Footer;
