import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the viewport (hero section)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-neutral-700">
      <div className="w-full min-h-screen bg-color-white-solid">
        {/* Announcement Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="px-20 py-2 text-center">
            <p className="text-sm text-black font-medium">
              📞 Pickup orders can be made by phone call • 💵 We are a cash-only business
            </p>
          </div>
        </div>

        {/* Simple Text Navigation - Always visible */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-8 flex justify-between items-center font-sans" style={{marginTop: '32px'}}>
          <Link to="/" className="text-2xl font-bold text-white no-underline drop-shadow-lg">
            The Art Bistro
          </Link>
          <div className="flex gap-8 items-center">
            <Link to="/" className="text-white no-underline font-medium text-xl drop-shadow-md">Home</Link>
            <Link to="/about" className="text-white no-underline font-medium text-xl drop-shadow-md">About Us</Link>
            <Link to="/menu" className="text-white no-underline font-medium text-xl drop-shadow-md">Menu</Link>
            <Link to="/contact" className="text-white no-underline font-medium text-xl drop-shadow-md">Contact</Link>
          </div>
        </nav>

        {/* Scrolled Navigation - Only visible when scrolled */}
        {isScrolled && (
          <nav className="bg-gray-800 px-20 py-8 shadow-md fixed top-0 left-0 right-0 z-50 animate-slideDown font-sans" style={{marginTop: '32px'}}>
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-orange-600 no-underline">
                The Art Bistro
              </Link>
              <div className="flex gap-8">
                <Link to="/" className="text-white no-underline font-bold text-xl">Home</Link>
                <Link to="/about" className="text-white no-underline font-bold text-xl">About Us</Link>
                <Link to="/menu" className="text-white no-underline font-bold text-xl">Menu</Link>
                <Link to="/contact" className="text-white no-underline font-bold text-xl">Contact</Link>
              </div>
            </div>
          </nav>
        )}

        {/* Hero Section */}
        <section className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url(/coffee-hero.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 text-center text-white px-8 max-w-4xl">
            <h1 className="text-6xl mb-4 font-bold font-sans">
              Contact Us
            </h1>
            <p className="text-2xl opacity-90 font-sans">
              We'd love to hear from you and welcome you to our community
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl mb-6 text-gray-800 font-sans">
                Get In Touch
              </h2>
              <div className="w-15 h-1 bg-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you have questions, want to place an order, or just want to say hello, 
                we're here to help. Stop by for a visit or reach out to us directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-3xl mb-6 text-gray-800 font-sans">Visit Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📍</div>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Address</p>
                        <p className="text-gray-600">
                          2960 Clement St<br/>
                          San Francisco, CA 94121
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Phone</p>
                        <a href="tel:+14153797119" className="text-orange-600 hover:text-orange-700 transition-colors">
                          (415) 379-7119
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">✉️</div>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">Email</p>
                        <a href="mailto:support@theartbistro.site" className="text-orange-600 hover:text-orange-700 transition-colors">
                          support@theartbistro.site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-3xl mb-6 text-gray-800 font-sans">Hours of Operation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tuesday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Wednesday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Thursday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Friday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                  <h3 className="text-2xl mb-4 text-gray-800 font-sans">Important Notes</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• We are a cash-only business</li>
                    <li>• Pickup orders can be made by phone call</li>
                    <li>• Free Wi-Fi available for customers</li>
                    <li>• Local art exhibitions rotate monthly</li>
                  </ul>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-3xl mb-6 text-gray-800 font-sans">Find Us</h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5!2d-122.5!3d37.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQyJzAwLjAiTiAxMjLCsDMwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Art Bistro Location"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Click the map to get directions to our location
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-3xl mb-6 text-gray-800 font-sans">Why Visit Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">☕</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Artisanal Coffee</h4>
                        <p className="text-gray-600">Handcrafted coffee made with locally sourced beans</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🎨</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Local Art</h4>
                        <p className="text-gray-600">Rotating exhibitions from talented local artists</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">👥</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Community</h4>
                        <p className="text-gray-600">A welcoming space for artists, writers, and coffee lovers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🍰</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Fresh Pastries</h4>
                        <p className="text-gray-600">Daily baked goods made with the finest ingredients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8 bg-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-gray-800 font-sans">
              Ready to Visit?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We can't wait to welcome you to The Art Bistro family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-xl font-medium font-sans transition-colors">
                Explore Our Menu
              </Link>
              <Link to="/about" className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-xl font-medium font-sans transition-colors">
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Location & Hours */}
              <div className="text-center">
                <h3 className="text-xl mb-4">Location & Hours</h3>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Visit Us</h4>
                  <p className="text-gray-300 leading-relaxed">
                    2960 Clement St, San Francisco CA 94121<br/>
                    (415) 379-7119
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Store Hours</h4>
                  <p className="text-gray-300">
                    Monday-Sunday 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              {/* More Information */}
              <div className="text-center">
                <h3 className="text-xl mb-4">More Information</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="text-gray-300 no-underline hover:text-white transition-colors">Our Story</Link>
                  <Link to="/menu" className="text-gray-300 no-underline hover:text-white transition-colors">Our Menu</Link>
                  <Link to="/contact" className="text-gray-300 no-underline hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-600 pt-8 text-center">
              <p className="text-gray-300">
                Copyright © 2025 <span className="text-orange-600">Art Bistro</span>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact; 