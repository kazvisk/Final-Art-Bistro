import React from 'react';
import './App.css';

function App() {
  return (
    <div className="relative bg-neutral-700">
      <div className="w-full min-h-screen bg-color-white-solid">
        {/* Navigation */}
        <div className="w-full bg-color-grey-13" style={{height: '120px'}}>
          <div className="px-20 h-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>The Art Bistro</div>
            </div>
            <div className="flex gap-8">
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">About Us</div>
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">Menu</div>
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">Gallery</div>
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
              <div className="btn btn-white px-12 py-4">
                <div className="text-color-black-solid text-xl font-normal font-Quicksand">Explore Menu</div>
              </div>
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
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="bg-gradient-amber-light rounded-lg p-8" style={{minHeight: '300px'}}>
              <div className="text-center">
                <div className="text-6xl mb-4" style={{color: '#92400e'}}>"</div>
                <div className="text-xl font-normal font-Quicksand mb-6" style={{color: '#92400e'}}>
                  "The Art Bistro is my favorite place to work and relax. The coffee is exceptional, and the artistic atmosphere is truly inspiring. I love how they showcase local artists!"
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <span style={{color: '#D2691E'}}>★★★★★</span>
                </div>
                <div className="text-lg font-medium font-Ovo" style={{color: '#92400e'}}>
                  - Sarah M., Local Artist
                </div>
              </div>
            </div>
            
            {/* Reviews Carousel Navigation */}
            <div className="flex justify-center mt-6 gap-4">
              <button className="bg-color-grey-13 text-color-white-solid px-6 py-2 rounded-lg font-Quicksand hover:bg-opacity-80 transition-all">
                ← Previous
              </button>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-color-grey-13 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <button className="bg-color-grey-13 text-color-white-solid px-6 py-2 rounded-lg font-Quicksand hover:bg-opacity-80 transition-all">
                Next →
              </button>
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
                  <div className="text-color-white-solid text-xl font-normal font-Quicksand border-b border-white pb-2 leading-relaxed">Our Story</div>
                  <div className="text-color-white-solid text-xl font-normal font-Quicksand border-b border-white pb-2 leading-relaxed">Our Menu</div>
                  <div className="text-color-white-solid text-xl font-normal font-Quicksand border-b border-white pb-2 leading-relaxed">Gallery</div>
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
}

export default App;
