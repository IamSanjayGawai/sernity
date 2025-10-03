import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    // 1️⃣ Download brochure immediately
    const brochureUrl = "/serenity-brochure.pdf"; // Must be in public folder
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.setAttribute("download", "Serenity-Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  
    // 2️⃣ Call API (does not block download)
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
  
      toast("Thank you! We'll contact you soon.", {
        description: "Our team will reach out to you within 24 hours.",
      });
  
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to send enquiry. Brochure downloaded anyway!");
    } finally {
      setLoading(false);
    }
  };
  

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 988166 7979"],
      color: "from-green-400 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sammeddevelopers@gmail.com"],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "CTS No. 563, Plot No. 17, Salunkhe Vihar Road, Kondhwa Kh, Pune - 411 048",
      ],
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-teal-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make Serenity your new home? Contact us today for more
            information or to schedule a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${info.color} rounded-2xl`}
                  >
                    <info.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:scale-105 hover:shadow-xl"
                }`}
              >
                {loading ? (
                  <span className="animate-pulse">⏳ Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message & Download Brochure</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
