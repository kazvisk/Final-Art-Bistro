import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const menuItems = {
    coffee: [
      { name: "Art House Blend", price: "$4.50", description: "Our signature medium roast with notes of chocolate and caramel" },
      { name: "Creative Cappuccino", price: "$5.25", description: "Classic cappuccino with beautiful latte art" },
      { name: "Inspiration Latte", price: "$5.75", description: "Rich espresso with steamed milk and your choice of syrup" },
      { name: "Gallery Cold Brew", price: "$4.75", description: "Smooth cold brew coffee, perfect for contemplation" },
      { name: "Palette Pour Over", price: "$6.00", description: "Single origin coffee brewed to perfection" },
      { name: "Mocha Masterpiece", price: "$6.25", description: "Espresso, steamed milk, and rich chocolate" }
    ],
    food: [
      { name: "Artist's Avocado Toast", price: "$8.50", description: "Sourdough with smashed avocado, cherry tomatoes, and everything seasoning" },
      { name: "Creative Croissant", price: "$3.75", description: "Buttery, flaky croissant baked fresh daily" },
      { name: "Brushstroke Bagel", price: "$5.25", description: "Everything bagel with cream cheese and fresh herbs" },
      { name: "Palette Panini", price: "$9.75", description: "Grilled sandwich with turkey, brie, and fig jam" },
      { name: "Muse Muffin", price: "$3.50", description: "Blueberry muffin with a hint of lemon zest" },
      { name: "Studio Salad", price: "$11.25", description: "Mixed greens, goat cheese, walnuts, and balsamic vinaigrette" }
    ],
    pastries: [
      { name: "Canvas Cinnamon Roll", price: "$4.25", description: "Warm cinnamon roll with cream cheese glaze" },
      { name: "Sketch Scone", price: "$3.75", description: "Buttery scone with seasonal fruit" },
      { name: "Easel Éclair", price: "$4.50", description: "Classic French éclair filled with vanilla cream" },
      { name: "Artisan Almond Croissant", price: "$4.75", description: "Flaky croissant filled with almond cream" }
    ]
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
              <Link to="/" className="text-color-white-solid text-xl font-medium font-Quicksand hover:opacity-70 transition-opacity">About Us</Link>
              <Link to="/menu" className="text-color-white-solid text-xl font-medium font-Quicksand" style={{color: '#D2691E'}}>Menu</Link>
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">Gallery</div>
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">Contact</div>
            </div>
          </div>
        </div>

        {/* Menu Hero Section */}
        <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg my-20 px-20 py-20">
          <div className="text-center mb-16">
            <div className="text-color-grey-13 text-6xl font-normal font-Ovo mb-6">Our Menu</div>
            <div className="text-color-grey-13 text-xl font-normal font-Quicksand max-w-2xl mx-auto">
              Discover our carefully crafted selection of artisanal coffee, fresh food, and delicious pastries. 
              Every item is made with love and the finest ingredients.
            </div>
          </div>

          {/* Coffee Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-color-grey-13 text-4xl font-normal font-Ovo mb-4" style={{color: '#D2691E'}}>☕ Coffee & Espresso</div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand">Handcrafted with passion, served with artistry</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</h3>
                    <span className="text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                  <p className="text-color-grey-13 text-base font-normal font-Quicksand leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-color-grey-13 text-4xl font-normal font-Ovo mb-4" style={{color: '#D2691E'}}>🥪 Fresh Food</div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand">Nourishing meals made with locally sourced ingredients</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.food.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</h3>
                    <span className="text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                  <p className="text-color-grey-13 text-base font-normal font-Quicksand leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pastries Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-color-grey-13 text-4xl font-normal font-Ovo mb-4" style={{color: '#D2691E'}}>🥐 Pastries & Sweets</div>
              <div className="text-color-grey-13 text-lg font-normal font-Quicksand">Freshly baked daily to complement your coffee</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.pastries.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</h3>
                    <span className="text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                  <p className="text-color-grey-13 text-base font-normal font-Quicksand leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 p-12 rounded-lg">
            <div className="text-color-grey-13 text-3xl font-normal font-Ovo mb-4">Ready to Visit?</div>
            <div className="text-color-grey-13 text-lg font-normal font-Quicksand mb-6 max-w-xl mx-auto">
              Come experience our cozy atmosphere, meet fellow creatives, and enjoy the best coffee in San Francisco.
            </div>
            <Link to="/" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-xl font-medium font-Quicksand transition-colors">
              Back to Home
            </Link>
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
};

export default Menu; 