import React from 'react';
import './App.css';

function App() {
  return (
    <div className="relative bg-neutral-700">
      <div className="w-full min-h-screen bg-color-white-solid">
        {/* Navigation */}
        <div className="w-full bg-color-white-solid" style={{height: '120px'}}>
          <div className="px-20 h-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-color-black-solid text-2xl font-bold font-Ovo">The Art Bistro</div>
            </div>
            <div className="flex gap-8">
              <div className="text-color-black-solid text-xl font-medium font-Quicksand">About Us</div>
              <div className="text-color-black-solid text-xl font-medium font-Quicksand">Menu</div>
              <div className="text-color-black-solid text-xl font-medium font-Quicksand">Gallery</div>
              <div className="text-color-black-solid text-xl font-medium font-Quicksand">Contact</div>
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
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <div className="relative z-10 w-full h-full flex justify-center items-center px-20">
            <div className="text-center">
              <div className="text-color-white-solid text-7xl font-normal font-Ovo" style={{marginBottom: '2.5rem', textShadow: '3px 3px 6px rgba(0,0,0,1), 1px 1px 3px rgba(0,0,0,1)'}}>
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

        {/* Location & Hours */}
        <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg mb-20 flex">
          <div className="flex-1 bg-gradient-amber-light flex items-center justify-center" style={{height: '640px'}}>
            <div className="text-4xl font-Ovo" style={{color: '#92400e'}}>Art Bistro Interior</div>
          </div>
          <div className="flex-1 px-20 py-20">
            <div className="text-center mb-8">
              <div className="text-color-grey-13 text-lg font-medium font-Quicksand mb-2">ART BISTRO</div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand">1234 MISSION STREET, SAN FRANCISCO, CA 94103</div>
            </div>
            <div className="text-center mb-8">
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand leading-relaxed">
                We welcome walk-ins and take reservations for groups of 6 or more.<br/>
                Come experience the artistic vibe of San Francisco's favorite coffee spot.
              </div>
            </div>
            <div className="text-center mb-8">
              <div className="text-color-grey-13 text-lg font-medium font-Quicksand mb-4">OPENING HOURS</div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand mb-4">
                Monday - Friday<br/>7:00am - 8:00pm
              </div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand mb-4">
                Saturday<br/>8:00am - 9:00pm
              </div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand mb-4">
                Sunday<br/>8:00am - 7:00pm
              </div>
            </div>
            <div className="text-center">
              <div className="btn btn-dark px-9 py-3">
                <div className="text-color-white-solid text-lg font-normal font-Quicksand">Get Directions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="max-w-1360 mx-auto px-10 py-20">
          <div className="text-center mb-10">
            <div className="text-color-grey-13 text-3xl font-normal font-Ovo mb-4">Art Bistro Collections</div>
            <div className="text-color-grey-13 text-lg font-normal font-Quicksand">We will have your order ready for you.</div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1 card">
              <div className="card-image bg-gradient-amber-cards">Coffee & Drinks</div>
              <div className="px-12 py-12">
                <div className="text-center text-color-white-solid text-5xl font-normal font-Ovo mb-4">Coffee Shop</div>
                <div className="text-center text-color-white-solid text-base font-normal font-Quicksand mb-4">
                  Click and collect from our menu for now or the future. Enjoy coffee,<br/>
                  cakes, eggs, salads, toasties, granola and juices to go.
                </div>
                <div className="text-center">
                  <div className="btn btn-white px-9 py-3">
                    <div className="text-color-black-solid text-lg font-normal font-Quicksand">Order from Art Bistro</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 card">
              <div className="card-image bg-gradient-amber-cards-2">Art Gallery</div>
              <div className="px-12 py-12">
                <div className="text-center text-color-white-solid text-5xl font-normal font-Ovo mb-4">Art Gallery</div>
                <div className="text-center text-color-white-solid text-base font-normal font-Quicksand mb-4">
                  Experience local art while enjoying your coffee. Our rotating gallery<br/>
                  features San Francisco's emerging artists and creative community.
                </div>
                <div className="text-center">
                  <div className="btn btn-white px-9 py-3">
                    <div className="text-color-black-solid text-lg font-normal font-Quicksand">View Gallery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-color-grey-13 py-20 mt-20">
          <div className="max-w-1280 mx-auto flex gap-16">
            <div className="flex-1">
              <div className="bg-gradient-amber-light flex items-center justify-center rounded-lg" style={{height: '320px'}}>
                <div className="text-2xl font-Ovo" style={{color: '#92400e'}}>Art Bistro Logo</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-color-white-solid text-2xl font-normal font-Ovo mb-4">Location & Hours</div>
              <div className="mb-4">
                <div className="text-color-white-solid text-base font-medium font-Quicksand">Visit Us</div>
                <div className="text-color-white-solid text-base font-normal font-Quicksand">
                  1234 Mission Street, San Francisco, CA 94103<br/>(415) 555-0123
                </div>
              </div>
              <div>
                <div className="text-color-white-solid text-base font-medium font-Quicksand">Store Hours</div>
                <div className="text-color-white-solid text-base font-normal font-Quicksand">
                  Mon - Fri: 7:00 AM - 8:00 PM<br/>
                  Sat: 8:00 AM - 9:00 PM<br/>
                  Sun: 8:00 AM - 7:00 PM
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-color-white-solid text-2xl font-normal font-Ovo mb-4">More Information</div>
              <div className="space-y-2">
                <div className="text-color-white-solid text-base font-normal font-Quicksand border-b border-white pb-1">Our Menu</div>
                <div className="text-color-white-solid text-base font-normal font-Quicksand border-b border-white pb-1">Our Story</div>
                <div className="text-color-white-solid text-base font-normal font-Quicksand border-b border-white pb-1">Gallery</div>
                <div className="text-color-white-solid text-base font-normal font-Quicksand border-b border-white pb-1">Contact</div>
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
