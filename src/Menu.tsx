import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const menuItems = {
    coffee: [
      { name: "House Coffee", prices: { small: "$2.00", medium: "$2.25", large: "$2.50" }, description: "Our signature house blend coffee" },
      { name: "Cafe au Lait", prices: { small: "$2.25", medium: "$2.50", large: "$2.75" }, description: "Coffee with steamed milk, French style" },
      { name: "Espresso", prices: { small: "$2.00", medium: "$2.50", large: null }, description: "Pure espresso shot, rich and bold" },
      { name: "Espresso Con Panna", prices: { small: "$2.50", medium: "$3.00", large: null }, description: "Espresso topped with whipped cream" },
      { name: "Macchiato", prices: { small: "$2.50", medium: "$2.75", large: null }, description: "Espresso with a dollop of steamed milk foam" },
      { name: "Cappuccino", prices: { small: "$3.50", medium: "$3.75", large: "$4.00" }, description: "Equal parts espresso, steamed milk, and foam" },
      { name: "Cafe Latte", prices: { small: "$3.25", medium: "$3.75", large: "$4.00" }, description: "Espresso with steamed milk and light foam" },
      { name: "Vanilla Latte", prices: { small: "$3.50", medium: "$4.00", large: "$4.25" }, description: "Cafe latte with vanilla syrup" },
      { name: "Caramel Macchiato", prices: { small: "$3.50", medium: "$4.00", large: "$4.25" }, description: "Vanilla latte with caramel drizzle" },
      { name: "Cafe Mocha", prices: { small: "$3.50", medium: "$4.00", large: "$4.25" }, description: "Espresso with chocolate and steamed milk" },
      { name: "White Chocolate Mocha", prices: { small: "$3.50", medium: "$4.00", large: "$4.25" }, description: "Mocha made with white chocolate" },
      { name: "Americano", prices: { small: "$2.50", medium: "$2.75", large: "$3.00" }, description: "Espresso with hot water" },
      { name: "Depth Charge", prices: { small: "$3.00", medium: "$3.25", large: "$3.50" }, description: "Coffee with an extra shot of espresso" }
    ],
    uncoffees: [
      { name: "Hot Chocolate Fantasia", prices: { small: "$3.25", medium: "$3.50", large: "$3.75" }, description: "Rich hot chocolate with whipped cream and chocolate shavings" },
      { name: "Steamed Hot Chocolate", prices: { small: "$3.25", medium: "$3.50", large: "$3.75" }, description: "Classic hot chocolate made with steamed milk" },
      { name: "Hot Spiced Milk", prices: { small: "$2.75", medium: "$3.00", large: "$3.25" }, description: "Warm milk with aromatic spices" },
      { name: "Steamed Milk (plain)", prices: { small: "$2.50", medium: "$2.75", large: "$3.00" }, description: "Simple steamed milk, perfect for soothing" },
      { name: "Hot Spiced Cider", prices: { small: null, medium: "$2.50", large: null }, description: "Warm apple cider with seasonal spices" },
      { name: "Chai Latte", prices: { small: "$3.50", medium: "$3.75", large: "$4.00" }, description: "Spiced tea blend with steamed milk" },
      { name: "Milk", prices: { small: "$2.00", medium: "$2.25", large: "$2.50" }, description: "Fresh cold milk" }
    ],
    frappes: [
      { name: "Coffee", prices: { small: "$4.00", medium: "$4.50", large: null }, description: "Classic blended coffee frappe with ice" },
      { name: "Mocha", prices: { small: "$4.00", medium: "$4.50", large: null }, description: "Chocolate and coffee blended with ice and cream" },
      { name: "Vanilla Latte", prices: { small: "$4.00", medium: "$4.50", large: null }, description: "Vanilla-flavored coffee frappe" },
      { name: "Caramel Latte", prices: { small: "$4.25", medium: "$4.75", large: null }, description: "Caramel-flavored coffee frappe with whipped cream" }
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
         <nav className="bg-white px-20 py-8 shadow-md fixed top-0 left-0 right-0 z-50">
           <div className="flex justify-between items-center">
             <Link to="/" className="text-2xl font-bold text-orange-600 no-underline">
               The Art Bistro
             </Link>
             <div className="flex gap-8">
               <Link to="/" className="text-gray-800 no-underline font-bold text-xl">Home</Link>
               <Link to="/" className="text-gray-800 no-underline font-bold text-xl">About Us</Link>
               <Link to="/menu" className="text-gray-800 no-underline font-bold text-xl">Menu</Link>
               <span className="text-gray-800 font-bold text-xl cursor-pointer">Contact</span>
             </div>
           </div>
         </nav>

                 {/* Menu Hero Section */}
         <div className="max-w-1280 mx-auto bg-color-white-solid rounded-lg my-20 px-20 py-20" style={{marginTop: '140px'}}>
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
            <div className="space-y-4">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <div className="menu-item-price text-lg font-bold font-Ovo" style={{color: '#D2691E'}}>
                    <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">S</span> {item.prices.small} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">M</span> {item.prices.medium}{item.prices.large && <><span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">L</span> {item.prices.large}</>}
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
            <div className="space-y-4">
              {menuItems.uncoffees.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <div className="menu-item-price text-lg font-bold font-Ovo" style={{color: '#D2691E'}}>
                    {item.prices.small && item.prices.large ? (
                      // Full S|M|L display
                      <><span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">S</span> {item.prices.small} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">M</span> {item.prices.medium} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">L</span> {item.prices.large}</>
                    ) : item.prices.small ? (
                      // S|M display (no large)
                      <><span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">S</span> {item.prices.small} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">M</span> {item.prices.medium}</>
                    ) : (
                      // Single size (medium only)
                      <>{item.prices.medium}</>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blended Frappes Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4" style={{color: '#D2691E', fontSize: '3rem'}}>🥤 Blended Frappes</div>
              <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Cool, creamy blended drinks perfect for any season, available regular or decaf</div>
            </div>
            <div className="space-y-4">
              {menuItems.frappes.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <div className="menu-item-price text-lg font-bold font-Ovo" style={{color: '#D2691E'}}>
                    {item.prices.small && item.prices.large ? (
                      // Full S|M|L display
                      <><span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">S</span> {item.prices.small} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">M</span> {item.prices.medium} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">L</span> {item.prices.large}</>
                    ) : item.prices.small ? (
                      // S|M display (no large)
                      <><span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">S</span> {item.prices.small} <span className="mx-2">|</span> <span className="text-lg font-bold bg-orange-100 px-2 py-1 rounded mr-1">M</span> {item.prices.medium}</>
                    ) : (
                      // Single size (medium only)
                      <>{item.prices.medium}</>
                    )}
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
            <div className="space-y-4">
              {menuItems.extras.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
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
            <div className="space-y-4">
              {menuItems.teas.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
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
            <div className="space-y-4">
              {menuItems.bagels.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
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
            <div className="space-y-4">
              {menuItems.croissants.map((item, index) => (
                <div key={index} className="menu-item-container">
                  <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                  <div className="menu-item-dots"></div>
                  <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
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
      </div>
    </div>
  );
};

export default Menu; 