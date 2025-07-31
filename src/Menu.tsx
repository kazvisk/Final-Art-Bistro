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
    uncoffees: [
      { name: "Golden Turmeric Latte", price: "$5.50", description: "Creamy turmeric blend with coconut milk and warming spices" },
      { name: "Matcha Zen", price: "$5.25", description: "Premium ceremonial grade matcha with steamed milk" },
      { name: "Chocolate Dreams", price: "$4.75", description: "Rich hot chocolate made with Belgian cocoa" },
      { name: "Vanilla Chai", price: "$4.95", description: "Aromatic chai spices with steamed milk and vanilla" },
      { name: "London Fog", price: "$4.85", description: "Earl Grey tea with steamed milk and vanilla syrup" }
    ],
    frappes: [
      { name: "Caramel Canvas", price: "$6.50", description: "Blended coffee with caramel and whipped cream" },
      { name: "Mocha Marble", price: "$6.75", description: "Chocolate and coffee blend with ice and cream" },
      { name: "Vanilla Sketch", price: "$6.25", description: "Smooth vanilla coffee frappe with artistic swirls" },
      { name: "Berry Brushstroke", price: "$6.95", description: "Mixed berry and cream frappe with a coffee twist" },
      { name: "Mint Masterpiece", price: "$6.45", description: "Refreshing mint chocolate chip coffee blend" }
    ],
    extras: [
      { name: "Extra Shot", price: "$0.75", description: "Add an extra shot of espresso to any drink" },
      { name: "Alternative Milk", price: "$0.65", description: "Oat, almond, soy, or coconut milk" },
      { name: "Flavor Syrup", price: "$0.50", description: "Vanilla, caramel, hazelnut, or seasonal flavors" },
      { name: "Whipped Cream", price: "$0.50", description: "House-made whipped cream topping" },
      { name: "Extra Hot/Iced", price: "$0.00", description: "Temperature customization at no charge" }
    ],
    teas: [
      { name: "Chamomile Dreams", price: "$3.75", description: "Soothing chamomile flowers for relaxation" },
      { name: "Peppermint Fresh", price: "$3.75", description: "Invigorating peppermint leaves" },
      { name: "Lavender Calm", price: "$4.25", description: "Aromatic lavender buds with honey notes" },
      { name: "Ginger Zing", price: "$3.95", description: "Spicy ginger root with lemon hints" },
      { name: "Hibiscus Bloom", price: "$4.15", description: "Tart hibiscus flowers with natural fruit flavors" }
    ],
    bagels: [
      { name: "Everything Bagel", price: "$3.25", description: "Classic everything bagel with cream cheese" },
      { name: "Sesame Seed Bagel", price: "$3.00", description: "Toasted sesame bagel with butter" },
      { name: "Plain Bagel", price: "$2.75", description: "Simple toasted bagel with butter" },
      { name: "Avocado Bagel", price: "$7.50", description: "Everything bagel with smashed avocado and seasonings" }
    ],
    croissants: [
      { name: "Plain Croissant", price: "$3.75", description: "Buttery, flaky French croissant" },
      { name: "Almond Croissant", price: "$4.50", description: "Croissant filled with sweet almond paste" },
      { name: "Chocolate Croissant", price: "$4.25", description: "Pain au chocolat with Belgian chocolate" },
      { name: "Ham & Cheese Croissant", price: "$5.75", description: "Savory croissant with ham and Swiss cheese" }
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
              <Link to="/" className="text-color-white-solid text-xl font-medium font-Quicksand hover:opacity-70 transition-opacity">Home</Link>
              <Link to="/" className="text-color-white-solid text-xl font-medium font-Quicksand hover:opacity-70 transition-opacity">About Us</Link>
              <Link to="/menu" className="text-color-white-solid text-xl font-medium font-Quicksand" style={{color: '#D2691E'}}>Menu</Link>
              <div className="text-color-white-solid text-xl font-medium font-Quicksand">Contact</div>
            </div>
          </div>
        </div>

        {/* Menu Hero Section */}
        <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg my-20 px-20 py-20">
          <div className="text-center" style={{marginBottom: '5rem'}}>
            <div className="text-color-grey-13 font-normal font-Ovo mb-6" style={{fontSize: '4.5rem'}}>Our Menu</div>
            <div className="text-color-grey-13 text-2xl font-normal font-Quicksand max-w-2xl mx-auto">
              Discover our carefully crafted selection of artisanal coffee, fresh food, and delicious pastries. 
              Every item is made with love and the finest ingredients.
            </div>
          </div>

          {/* Coffee Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>☕ Espresso Bar</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">All drinks available iced, decaf, or any way you like</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Uncoffees Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>🍵 The Uncoffees</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Warm, comforting beverages without the caffeine</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.uncoffees.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blended Frappes Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>🥤 Blended Frappes</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Cool, creamy blended drinks perfect for any season</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.frappes.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Extras Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>✨ Creative Extras</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Customize your perfect drink with our add-ons</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.extras.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Herb Teas Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>🌿 Herb Teas</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Soothing herbal blends for relaxation and wellness</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.teas.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bagels Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>🥯 Bagels</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Fresh bagels toasted to perfection</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.bagels.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Croissants Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>🥐 Croissants</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Buttery, flaky French pastries baked daily</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems.croissants.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                  <div className="menu-item-container">
                    <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                  </div>
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