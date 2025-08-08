import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';

// Create wrapper components for footer icons only
const PhoneIcon = FiPhone as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const MailIcon = FiMail as React.ComponentType<React.SVGProps<SVGSVGElement>>;

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
      { name: "Espresso Shots", price: "$0.50", description: "Add an extra shot of espresso to any drink" },
      { name: "Chocolate", price: "$0.50", description: "Rich chocolate syrup for your favorite drinks" },
      { name: "White Chocolate", price: "$0.50", description: "Creamy white chocolate syrup" },
      { name: "Whipped Cream", price: "$0.50", description: "House-made whipped cream topping" },
      { name: "Torani Flavors", price: "$0.50", description: "Vanilla, caramel, hazelnut, or seasonal flavors" },
      { name: "Soy Milk", price: "$0.50", description: "Alternative milk option for your drinks" }
    ],
    teas: [
      { name: "Green-Honey Ginseng", price: "$2.00", description: "Refreshing green tea with honey and ginseng" },
      { name: "Peppermint", price: "$2.00", description: "Invigorating peppermint leaves for a fresh taste" },
      { name: "Chamomile", price: "$2.00", description: "Soothing chamomile flowers for relaxation" },
      { name: "Ginseng Peppermint", price: "$2.00", description: "Energizing blend of ginseng and peppermint" },
      { name: "Orange Gingermint", price: "$2.00", description: "Zesty orange with ginger and mint notes" },
      { name: "Wintergreen", price: "$2.00", description: "Cool and refreshing wintergreen flavor" },
      { name: "Lemon Chamomile", price: "$2.00", description: "Calming chamomile with bright lemon essence" }
    ],
    bagels: [
      { name: "Untoasted, nothing on it", price: "$1.50", description: "Plain bagel, no toppings" },
      { name: "Toasted, nothing on it", price: "$2.00", description: "Toasted bagel, no toppings" },
      { name: "With Butter or Jam", price: "$3.00", description: "Bagel with your choice of butter or jam" },
      { name: "With Butter and Jam", price: "$3.50", description: "Bagel with both butter and jam" },
      { name: "With Cream Cheese", price: "$3.50", description: "Bagel with cream cheese" },
      { name: "With Cream Cheese and Tomato", price: "$4.00", description: "Bagel with cream cheese and fresh tomato" },
      { name: "With Peanut Butter or Jelly", price: "$3.00", description: "Bagel with your choice of peanut butter or jelly" },
      { name: "With Peanut Butter and Jelly", price: "$3.50", description: "Bagel with both peanut butter and jelly" },
      { name: "With Nutella", price: "$3.50", description: "Bagel with Nutella spread" },
      { name: "With Cream Cheese and Garden Vegetables", price: "$5.00", description: "Bagel with cream cheese and fresh garden vegetables" },
      { name: "With Lox, Cream Cheese, Onion and Capers", price: "$9.50", description: "Classic lox bagel with cream cheese, onion and capers" },
      { name: "With Ham, Egg and Cheese", price: "$4.95", description: "Bagel with ham, egg and cheese" },
      { name: "With Sausage, Egg and Cheese", price: "$4.95", description: "Bagel with sausage, egg and cheese" },
      { name: "With Turkey, Egg and Cheese", price: "$4.95", description: "Bagel with turkey, egg and cheese" },
      { name: "With Bacon, Egg and Cheese", price: "$5.25", description: "Bagel with bacon, egg and cheese" },
      { name: "With Tuna and Hard Boiled Egg", price: "$4.95", description: "Bagel with tuna and hard boiled egg" },
      { name: "With Cream Cheese and Bacon", price: "$5.00", description: "Bagel with cream cheese and bacon" },
      { name: "With Egg and Cheese", price: "$4.00", description: "Bagel with egg and cheese" },
      { name: "BLT (Bacon, Lettuce and Tomato)", price: "$5.50", description: "Classic BLT on a bagel" }
    ],
         croissants: [
       { name: "Toasted with Sausage, Egg and Cheese", price: "$5.50", description: "Toasted croissant with sausage, egg and cheese" },
       { name: "Toasted with Ham, Egg and Cheese", price: "$5.50", description: "Toasted croissant with ham, egg and cheese" },
       { name: "Toasted with Turkey, Egg and Cheese", price: "$5.50", description: "Toasted croissant with turkey, egg and cheese" },
       { name: "Toasted with Bacon, Egg and Cheese", price: "$5.95", description: "Toasted croissant with bacon, egg and cheese" },
       { name: "Toasted with Tuna and Hard Boiled Egg", price: "$5.50", description: "Toasted croissant with tuna and hard boiled egg" },
       { name: "Toasted with Egg and Cheese", price: "$4.50", description: "Toasted croissant with egg and cheese" },
       { name: "BLT (Bacon, Lettuce and Tomato)", price: "$6.25", description: "Classic BLT on a toasted croissant" }
     ],
     foodExtras: [
       { name: "Add Egg", price: "$1.25", description: "Add a fresh egg to any bagel or croissant" },
       { name: "Add Cheese", price: "$1.25", description: "Add cheese to any bagel or croissant" },
       { name: "Add Bacon (1 strip)", price: "$0.95", description: "Add a crispy bacon strip to any item" },
       { name: "Add Ham, Turkey or Tuna", price: "$1.75", description: "Add your choice of ham, turkey, or tuna" }
     ]
  };

    return (
        <div className="relative bg-neutral-700 font-sans">
      <div className="w-full min-h-screen bg-color-white-solid">
                                    {/* Announcement Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-color-white-solid border-b border-gray-200">
          <div className="px-20 py-2 text-center">
            <p className="text-sm text-color-black-solid font-medium">
              Pickup orders can be made by phone call at <a href="tel:+14153797119" className="text-amber-600 hover:text-amber-700 transition-colors">(415) 379-7119</a> • We are a cash-only business
            </p>
          </div>
        </div>

                                                                         {/* Navigation */}
            <nav className="bg-neutral-700 px-20 py-8 shadow-md fixed top-0 left-0 right-0 z-50 font-sans" style={{marginTop: '32px'}}>
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-amber-500 no-underline">
                The Art Bistro
              </Link>
              <div className="flex gap-8">
                <Link to="/" className="text-color-white-solid no-underline font-bold text-xl">Home</Link>
                <Link to="/about" className="text-color-white-solid no-underline font-bold text-xl">About Us</Link>
                <Link to="/menu" className="text-color-white-solid no-underline font-bold text-xl">Menu</Link>
                <Link to="/contact" className="text-color-white-solid no-underline font-bold text-xl">Contact</Link>
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

          {/* Menu Navigation */}
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <a href="#espresso" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Espresso Bar</a>
              <span className="text-gray-400">•</span>
              <a href="#uncoffees" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">The Uncoffees</a>
              <span className="text-gray-400">•</span>
              <a href="#frappes" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Blended Frappes</a>
              <span className="text-gray-400">•</span>
              <a href="#extras" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Creative Extras</a>
              <span className="text-gray-400">•</span>
              <a href="#teas" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Herb Teas</a>
              <span className="text-gray-400">•</span>
              <a href="#bagels" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Bagels</a>
              <span className="text-gray-400">•</span>
              <a href="#croissants" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Croissants</a>
              <span className="text-gray-400">•</span>
              <a href="#addons" className="text-lg text-amber-600 hover:text-amber-700 transition-colors font-medium">Add-Ons</a>
            </div>
          </div>

          {/* Coffee Section */}
          <div style={{marginBottom: '2.5rem'}}>
            <div id="espresso" className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                Espresso Bar
              </div>
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
            <div id="uncoffees" className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                The Uncoffees
              </div>
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
            <div id="frappes" className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                Blended Frappes
              </div>
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
            <div id="extras" className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                Creative Extras
              </div>
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
            <div id="teas" className="text-center mb-12">
              <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                Herb Teas
              </div>
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
             <div id="bagels" className="text-center mb-12">
               <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                 Bagels
               </div>
                               <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Served on freshly made Asiago, All Seeded, Sesame, Plain, Cinnamon Raisin, or Whole Wheat bagels</div>
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
             <div id="croissants" className="text-center mb-12">
               <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                 Croissants
               </div>
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

                       {/* Food Extras Section */}
            <div style={{marginBottom: '0.5rem'}}>
             <div id="addons" className="text-center mb-12">
                               <div className="text-color-grey-13 font-normal font-Ovo mb-4 text-center" style={{color: '#A0522D', fontSize: '3rem'}}>
                 Custom Add-Ons
               </div>
               <div className="text-color-grey-13 text-2xl font-normal font-Quicksand">Customize your bagel or croissant with these delicious add-ons</div>
             </div>
             <div className="space-y-4">
               {menuItems.foodExtras.map((item, index) => (
                 <div key={index} className="menu-item-container">
                   <span className="menu-item-name text-color-grey-13 text-xl font-bold font-Ovo">{item.name}</span>
                   <div className="menu-item-dots"></div>
                   <span className="menu-item-price text-2xl font-bold font-Ovo" style={{color: '#D2691E'}}>{item.price}</span>
                 </div>
               ))}
             </div>
           </div>

        </div>

                 {/* Call to Action Section - Full Width */}
         <section className="py-20 px-8 bg-color-grey-95">
           <div className="max-w-4xl mx-auto text-center">
             <div className="text-color-grey-13 text-4xl font-normal font-Ovo mb-6">Ready to Taste the Difference?</div>
                                                     <div className="text-color-grey-13 text-xl font-normal font-Quicksand mb-8 max-w-2xl mx-auto">
                 Come visit us and experience our carefully crafted coffee, soothing teas, and fresh bagels in our cozy, artistic atmosphere.
               </div>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/" className="inline-block bg-amber-600 hover:bg-amber-700 text-color-white-solid px-8 py-4 rounded-lg text-xl font-medium font-Quicksand transition-colors">
                 Back to Home
               </Link>
                             <Link to="/about" className="inline-block bg-neutral-700 hover:bg-gray-900 text-color-white-solid px-8 py-4 rounded-lg text-xl font-medium font-Quicksand transition-colors">
                Learn Our Story
              </Link>
             </div>
          </div>
        </section>

                                                     {/* Footer */}
          <footer className="bg-neutral-700 text-color-white-solid py-12 px-8" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Location & Hours */}
                <div className="text-center">
                  <h3 className="text-xl mb-4">Location & Hours</h3>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Visit Us</h4>
                    <p className="text-gray-300 leading-relaxed">
                      2960 Clement St, San Francisco CA 94121
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Store Hours</h4>
                    <p className="text-gray-300">
                      Monday-Sunday 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="text-center">
                  <h3 className="text-xl mb-4">Contact Us</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <PhoneIcon className="text-amber-500" />
                      <a href="tel:+14153797119" className="text-gray-300 no-underline hover:text-color-white-solid transition-colors">
                        (415) 379-7119
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MailIcon className="text-amber-500" />
                      <a href="mailto:support@theartbistro.site" className="text-gray-300 no-underline hover:text-color-white-solid transition-colors">
                        support@theartbistro.site
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* More Information */}
                <div className="text-center">
                  <h3 className="text-xl mb-4">More Information</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/about" className="text-gray-300 no-underline hover:text-color-white-solid transition-colors">Our Story</Link>
                    <Link to="/menu" className="text-gray-300 no-underline hover:text-color-white-solid transition-colors">Our Menu</Link>
                    <Link to="/contact" className="text-gray-300 no-underline hover:text-color-white-solid transition-colors">Contact</Link>
                  </div>
                </div>
              </div>
              
                          <div className="border-t border-gray-600 pt-8 text-center">
              <p className="text-gray-300">
                Copyright © 2025 <span>The Art Bistro</span>.
              </p>
            </div>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default Menu; 