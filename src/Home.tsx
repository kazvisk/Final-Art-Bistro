import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Reviews data
  const reviews = [
    {
      text: "The Art Bistro is my favorite place to work and relax. The coffee is exceptional, and the artistic atmosphere is truly inspiring. I love how they showcase local artists!",
      author: "Sarah M., Local Artist",
      rating: "★★★★★"
    },
    {
      text: "Amazing coffee and such a creative environment! The baristas are knowledgeable and the pastries are freshly made daily. It's become my go-to spot for meetings.",
      author: "Michael R., Entrepreneur",
      rating: "★★★★★"
    },
    {
      text: "What a gem! The atmosphere is perfect for studying, and their specialty drinks are incredible. The rotating art exhibitions keep it fresh and interesting every visit.",
      author: "Emma L., Graduate Student",
      rating: "★★★★★"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="font-sans bg-color-grey-95">
      {/* Simple Text Navigation - Always visible */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white no-underline drop-shadow-lg">
          The Art Bistro
        </Link>
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-white no-underline font-medium drop-shadow-md">Home</Link>
          <Link to="/" className="text-white no-underline font-medium drop-shadow-md">About Us</Link>
          <Link to="/menu" className="text-white no-underline font-medium drop-shadow-md">Menu</Link>
          <span className="text-white font-medium cursor-pointer drop-shadow-md">Contact</span>
          <Link to="/menu" className="bg-white text-orange-600 px-4 py-2 no-underline rounded font-bold text-sm">
            Explore Menu
          </Link>
        </div>
      </nav>

      {/* Scrolled Navigation - Only visible when scrolled */}
      {isScrolled && (
        <nav className="bg-white px-4 py-4 shadow-md fixed top-0 left-0 right-0 z-50 animate-slideDown">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 no-underline">
              The Art Bistro
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="text-gray-800 no-underline font-medium">Home</Link>
              <Link to="/" className="text-gray-800 no-underline font-medium">About Us</Link>
              <Link to="/menu" className="text-gray-800 no-underline font-medium">Menu</Link>
              <span className="text-gray-800 font-medium cursor-pointer">Contact</span>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url(/coffee-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-8 max-w-4xl">
          <h1 className="text-5xl mb-4 font-bold">
            Welcome to The Art Bistro
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Where creativity meets comfort in the heart of San Francisco
          </p>
          <Link to="/menu" className="inline-block bg-white text-orange-600 px-8 py-4 no-underline rounded font-bold text-lg">
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Our Creative Haven
            </h2>
            <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Art Bistro is a vibrant coffee shop in the heart of San Francisco where creativity meets comfort. 
              We celebrate the artistic spirit of our city with handcrafted coffee, locally-sourced ingredients, 
              and a space that inspires. From our signature pour-over coffee to our artisanal pastries, 
              every detail is crafted with passion and purpose.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl mb-4 text-gray-800">
                Fresh Daily
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our pastries and coffee are crafted fresh every morning with the finest ingredients.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl mb-4 text-gray-800">
                Local Artists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We showcase rotating exhibitions from talented local artists in our community.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl mb-4 text-gray-800">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join our community of artists, writers, and coffee enthusiasts in this cozy corner of creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-8 bg-color-grey-95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Our Collection
            </h2>
            <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Discover our handcrafted coffee and artisanal treats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/artonwall.jpg" alt="Art on wall" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/infocuscoffee.jpg" alt="In focus coffee" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/sandosanddrinkmaybeport.jpg" alt="Sandwiches and drink" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/drinkandflowersontable.jpg" alt="Drink and flowers on table" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/burgersandbobaontable.jpg" alt="Burgers and boba on table" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/bussinsaladandsando.jpg" alt="Salad and sandwich" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              What Our Customers Say
            </h2>
            <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Hear from our community of coffee lovers and artists
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <div className="text-5xl text-orange-600 mb-4">"</div>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed italic">
              "{reviews[currentReview].text}"
            </p>
            <div className="text-2xl text-orange-600 mb-4">
              {reviews[currentReview].rating}
            </div>
            <p className="text-lg font-bold text-gray-800">
              - {reviews[currentReview].author}
            </p>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevReview}
                className="w-10 h-10 bg-orange-600 text-white border-none rounded-full cursor-pointer text-xl hover:bg-orange-700 transition-colors"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors ${
                      index === currentReview ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextReview}
                className="w-10 h-10 bg-orange-600 text-white border-none rounded-full cursor-pointer text-xl hover:bg-orange-700 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo */}
            <div className="text-center">
              <div className="bg-orange-600 w-50 h-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-lg font-bold">Art Bistro Logo</div>
              </div>
            </div>
            
            {/* Location & Hours */}
            <div>
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
            <div>
              <h3 className="text-xl mb-4">More Information</h3>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-gray-300 no-underline hover:text-white transition-colors">Our Story</Link>
                <Link to="/menu" className="text-gray-300 no-underline hover:text-white transition-colors">Our Menu</Link>
                <span className="text-gray-300 cursor-pointer">Contact</span>
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

      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home; 