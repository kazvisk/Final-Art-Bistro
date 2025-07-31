import React, { useState } from 'react';
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

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative bg-neutral-700">
      <div className="w-full min-h-screen bg-color-white-solid">
        {/* Navigation */}
        <div className="w-full bg-color-grey-13" style={{height: '120px'}}>
          <div className="px-20 h-full flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>
                The Art Bistro
              </Link>
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-color-white-solid text-xl font-medium font-Quicksand hover:opacity-70 transition-opacity" style={{color: '#D2691E'}}>Home</Link>
              <Link to="/" className="text-color-white-solid text-xl font-medium font-Quicksand hover:opacity-70 transition-opacity">About Us</Link>
              <Link to="/menu" className="text-color-white-solid text-xl font-medium font-Quicksand hover:opacity-70 transition-opacity">Menu</Link>
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">Contact</div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" style={{
          height: '100vh',
          backgroundColor: '#2D1810',
          backgroundImage: 'url(/coffee-hero.jpg)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-85"></div>
          <div className="relative z-10 w-full h-full flex justify-center items-center px-20">
            <div className="text-center">
              <div className="text-color-white-solid text-7xl font-normal font-Ovo" style={{marginBottom: '2.5rem', textShadow: '4px 4px 8px rgba(0,0,0,1), 2px 2px 4px rgba(0,0,0,1), 0px 0px 8px rgba(0,0,0,0.8)'}}>
                Welcome to The Art Bistro
              </div>
              <Link to="/menu" className="btn btn-white px-12 py-4 inline-block">
                <div className="text-color-black-solid text-xl font-normal font-Quicksand">Explore Menu</div>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg my-20 px-20 py-20">
          <div className="text-center">
            <div className="text-color-grey-13 text-5xl font-normal font-Ovo mb-4">Our Creative Haven</div>
            <div className="text-color-grey-13 text-lg font-normal font-Quicksand leading-relaxed max-w-4xl mx-auto">
              Art Bistro is a vibrant coffee shop in the heart of San Francisco where creativity meets comfort. 
              We celebrate the artistic spirit of our city with handcrafted coffee, locally-sourced ingredients, 
              and a space that inspires. From our signature pour-over coffee to our artisanal pastries, 
              every detail is crafted with passion and purpose. Join our community of artists, writers, 
              and coffee enthusiasts in this cozy corner of creativity.
            </div>
          </div>
        </div>

        {/* Our Collection Section */}
        <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg mb-20 px-20 py-20">
          <div className="text-center mb-10">
            <div className="text-color-grey-13 text-5xl font-normal font-Ovo mb-4">Our Collection</div>
            <div className="text-color-grey-13 text-lg font-normal font-Quicksand">Discover our handcrafted coffee and artisanal treats</div>
          </div>
          
          {/* Image Grid Container */}
          <div className="max-w-full mx-auto px-4" style={{marginTop: '3rem'}}>
            {/* Row 1 */}
            <div className="flex gap-8" style={{marginBottom: '4rem'}}>
              <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden" style={{width: '100%', height: '400px'}}>
                <img src="/artonwall.jpg" alt="Art on wall" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden" style={{width: '100%', height: '400px'}}>
                <img src="/infocuscoffee.jpg" alt="In focus coffee" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden" style={{width: '100%', height: '400px'}}>
                <img src="/sandosanddrinkmaybeport.jpg" alt="Sandwiches and drink" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex gap-8">
              <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden" style={{width: '100%', height: '400px'}}>
                <img src="/drinkandflowersontable.jpg" alt="Drink and flowers on table" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden" style={{width: '100%', height: '400px'}}>
                <img src="/burgersandbobaontable.jpg" alt="Burgers and boba on table" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden" style={{width: '100%', height: '400px'}}>
                <img src="/bussinsaladandsando.jpg" alt="Salad and sandwich" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Carousel Section */}
        <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg mb-20 px-20 py-20">
          <div className="text-center mb-10">
            <div className="text-color-grey-13 text-5xl font-normal font-Ovo mb-4">What Our Customers Say</div>
            <div className="text-color-grey-13 text-lg font-normal font-Quicksand">Hear from our community of coffee lovers and artists</div>
          </div>
          
          {/* Reviews Carousel Container */}
          <div className="relative w-full max-w-4xl mx-auto" style={{marginTop: '2rem'}}>
            <div className="bg-white rounded-lg p-8" style={{minHeight: '300px', border: '2px solid black', position: 'relative', paddingBottom: '60px'}}>
              <div className="text-center">
                <div className="text-6xl mb-4 text-black">"</div>
                <div className="text-xl font-normal font-Quicksand mb-6 text-black">
                  "{reviews[currentReview].text}"
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <span className="text-black">{reviews[currentReview].rating}</span>
                </div>
                <div className="text-lg font-medium font-Ovo text-black">
                  - {reviews[currentReview].author}
                </div>
              </div>
              
              {/* Bottom navigation container - absolutely positioned at bottom */}
              <div className="flex items-center justify-center gap-8" style={{position: 'absolute', bottom: '16px', left: '0', right: '0'}}>
                {/* Left Arrow */}
                <button 
                  onClick={prevReview}
                  className="transition-all hover:opacity-70" 
                  style={{background: 'none', border: 'none', padding: '0', cursor: 'pointer'}}
                >
                  <span className="text-black" style={{fontSize: '24px', fontWeight: 'bold'}}>‹</span>
                </button>
                
                {/* Dot indicators */}
                <div className="flex justify-center items-center gap-4">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className="rounded-full transition-all hover:opacity-70"
                      style={{
                        width: index === currentReview ? '12px' : '7px', 
                        height: index === currentReview ? '12px' : '7px', 
                        backgroundColor: 'black',
                        border: 'none',
                        padding: '0',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
                
                {/* Right Arrow */}
                <button 
                  onClick={nextReview}
                  className="transition-all hover:opacity-70" 
                  style={{background: 'none', border: 'none', padding: '0', cursor: 'pointer'}}
                >
                  <span className="text-black" style={{fontSize: '24px', fontWeight: 'bold'}}>›</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-color-grey-13 py-20 mt-20">
          <div className="max-w-1280 mx-auto flex gap-16 items-start">
            {/* Square Logo */}
            <div>
              <div className="bg-gradient-amber-light flex items-center justify-center rounded-lg" style={{width: '320px', height: '320px'}}>
                <div className="text-2xl font-Ovo" style={{color: '#92400e'}}>Art Bistro Logo</div>
              </div>
            </div>
            
            {/* All Text Content on Right Side */}
            <div className="flex-1 flex gap-16">
              <div className="flex-1">
                <div className="text-color-white-solid text-3xl font-normal font-Ovo mb-6 leading-relaxed">Location & Hours</div>
                <div className="text-color-white-solid text-xl font-bold font-Quicksand mb-2 leading-relaxed">Visit Us</div>
                <div className="text-color-white-solid text-xl font-normal font-Quicksand mb-6 leading-relaxed">
                  2960 Clement St, San Francisco CA 94121<br/>
                  (415) 379-7119
                </div>
                <div className="text-color-white-solid text-xl font-bold font-Quicksand mb-2 leading-relaxed">Store Hours</div>
                <div className="text-color-white-solid text-xl font-normal font-Quicksand leading-relaxed">
                  Monday-Sunday 8:00 AM - 5:00 PM
                </div>
              </div>
              <div className="flex-1">
                <div className="text-color-white-solid text-3xl font-normal font-Ovo mb-6 leading-relaxed">More Information</div>
                <div className="space-y-4">
                  <Link to="/" className="block text-color-white-solid text-xl font-normal font-Quicksand border-b border-white pb-2 leading-relaxed hover:opacity-70 transition-opacity">Our Story</Link>
                  <Link to="/menu" className="block text-color-white-solid text-xl font-normal font-Quicksand border-b border-white pb-2 leading-relaxed hover:opacity-70 transition-opacity">Our Menu</Link>
                  <div className="text-color-white-solid text-xl font-normal font-Quicksand border-b border-white pb-2 leading-relaxed">Contact</div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-1360 mx-auto px-10 py-6 mt-20 border-t border-white opacity-40">
            <div className="text-color-white-solid text-base font-normal font-Quicksand">
              Copyright © 2025 <span className="border-b border-white">Art Bistro</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 