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
       // Get the height of the viewport (hero section)
       const heroHeight = window.innerHeight;
       setIsScrolled(window.scrollY > heroHeight);
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
             {/* Announcement Bar */}
       <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
         <div className="px-20 py-2 text-center">
           <p className="text-sm text-black font-medium">
             📞 Pickup orders can be made by phone call at <a href="tel:+14153797119" className="text-orange-600 hover:text-orange-700 transition-colors">(415) 379-7119</a> • 💵 We are a cash-only business
           </p>
         </div>
       </div>

                           {/* Simple Text Navigation - Always visible */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-8 flex justify-between items-center" style={{marginTop: '32px'}}>
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
         <nav className="bg-gray-800 px-20 py-8 shadow-md fixed top-0 left-0 right-0 z-50 animate-slideDown" style={{marginTop: '32px'}}>
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
          <h1 className="text-6xl mb-4 font-bold">
            Welcome to The Art Bistro
          </h1>
          <p className="text-4xl mb-8 opacity-90">
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
            <h2 className="text-5xl mb-4 text-gray-800">
              Our Creative Haven
            </h2>
            <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Art Bistro is a vibrant coffee shop in the heart of San Francisco where creativity meets comfort. 
              We celebrate the artistic spirit of our city with handcrafted coffee, locally-sourced ingredients, 
              and a space that inspires. From our signature pour-over coffee to our artisanal pastries, 
              every detail is crafted with passion and purpose.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-2xl mb-4 text-gray-800">
                Fresh Daily
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our pastries and coffee are crafted fresh every morning with the finest ingredients.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl mb-4 text-gray-800">
                Local Artists
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We showcase rotating exhibitions from talented local artists in our community.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl mb-4 text-gray-800">
                Community
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join our community of artists, writers, and coffee enthusiasts in this cozy corner of creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

             {/* Info Section */}
       <section className="py-16 px-8 bg-color-grey-95">
         <div className="max-w-6xl mx-auto">
           {/* Heading and Subtext */}
           <div className="text-center mb-12">
             <h2 className="text-5xl mb-4 text-gray-800">
               Our Location
             </h2>
             <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
             <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               Conveniently located in San Francisco
             </p>
           </div>
           
           {/* Google Maps Embed */}
           <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-12">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.342280625182!2d-122.49347207491203!3d37.782017563511545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085870768cda713%3A0x4a91c17def119769!2s2960%20Clement%20St%2C%20San%20Francisco%2C%20CA%2094121%2C%20USA!5e0!3m2!1sen!2sca!4v1754286570996!5m2!1sen!2sca"
               width="100%"
               height="450"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="The Art Bistro Location"
             ></iframe>
           </div>
           
                       {/* Text Information - Centered */}
            <div className="text-center space-y-6">
              <div className="mb-6">
                <a 
                  href="https://www.google.com/maps/dir//2960+Clement+St,+San+Francisco,+CA+94121" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  Get Directions
                </a>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                The Art Bistro
              </h3>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-600">
                  2960 Clement St, San Francisco CA 94121
                </p>
               
               <div className="space-y-3">
                 <p className="text-xl text-gray-600">
                   Pickup orders can be made by phone call.
                 </p>
                 <p className="text-xl text-gray-600">
                   We are a cash-only business.
                 </p>
               </div>
               
               <div>
                 <h4 className="text-2xl font-bold text-gray-800 mb-3">Opening Hours</h4>
                 <div className="space-y-2 text-gray-600">
                   <p className="text-xl">Monday - Sunday: 8:00 AM - 5:00 PM</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

             {/* Gallery Section */}
       <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-gray-800">
              Our Collection
            </h2>
            <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
       <section className="py-16 px-8 bg-color-grey-95">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-gray-800">
              What Our Customers Say
            </h2>
            <div className="w-15 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                  <span className="text-orange-600">📞</span>
                  <a href="tel:+14153797119" className="text-gray-300 no-underline hover:text-white transition-colors">
                    (415) 379-7119
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-orange-600">✉️</span>
                  <a href="mailto:support@theartbistro.site" className="text-gray-300 no-underline hover:text-white transition-colors">
                    support@theartbistro.site
                  </a>
                </div>
              </div>
            </div>
            
            {/* More Information */}
            <div className="text-center">
              <h3 className="text-xl mb-4">More Information</h3>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-gray-300 no-underline hover:text-white transition-colors">Our Story</Link>
                <Link to="/menu" className="text-gray-300 no-underline hover:text-white transition-colors">Our Menu</Link>
                <Link to="/contact" className="text-gray-300 no-underline hover:text-white transition-colors">Contact</Link>
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