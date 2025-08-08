import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiCoffee, FiImage, FiUsers, FiMail } from 'react-icons/fi';
import Header from './components/Header';

// Create wrapper components to fix TypeScript issues
const PhoneIcon = FiPhone as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const CoffeeIcon = FiCoffee as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const ImageIcon = FiImage as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const UsersIcon = FiUsers as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const MailIcon = FiMail as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Home = () => {
  // Reviews data
  const reviews = [
    {
      text: "The bagels and croissants are absolutely delicious, and the iced Thai tea is fantastic! The staff are super friendly, and best of all, the prices are unbeatable—easily the best deal in SF!",
      author: "Jevgemija M.",
      rating: "★★★★★",
      source: "Google Reviews"
    },
    {
      text: "I had the BLT sandwich with added turkey on a jalapeño and cheddar bagel. It's the best bagel sandwich I've eaten!! The gal that attended me was super friendly. Lots of people came in and out while I was there. Super affordable too. Highly recommend!",
      author: "Elizabeth F.",
      rating: "★★★★★",
      source: "Yelp"
    },
    {
      text: "A hidden gem! Recently visited this little cafe with a local regular. The breakfast sandwiches and coffee are phenomenal!\n\nThe owner is just the sweetest! She greeted everyone with the warmest smile and acknowledged regular customers by name. Even more impressive, she remembers their orders!\n\nThey have truly mastered the art of amazing customer service!",
      author: "Jeni T.",
      rating: "★★★★★",
      source: "Google Reviews"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  // Header now handles navigation consistently across pages

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="font-sans bg-color-grey-95">
      <Header transparent />

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
          <Link to="/menu" className="inline-block bg-color-white-solid text-amber-600 px-8 py-4 no-underline rounded font-bold text-lg">
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-color-white-solid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-color-grey-13">
              Our Creative Haven
            </h2>
            <div className="w-15 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Art Bistro is a vibrant coffee shop in the heart of San Francisco where creativity meets comfort. 
              We celebrate the artistic spirit of our city with handcrafted coffee, locally-sourced ingredients, 
              and a space that inspires. From our signature pour-over coffee to our artisanal pastries, 
              every detail is crafted with passion and purpose.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-color-grey-95 rounded-lg">
                        <div className="text-5xl mb-4 text-amber-600 flex justify-center">
            <CoffeeIcon />
          </div>
              <h3 className="text-2xl mb-4 text-color-grey-13">
                Fresh Daily
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our pastries and coffee are crafted fresh every morning with the finest ingredients.
              </p>
            </div>
            <div className="text-center p-8 bg-color-grey-95 rounded-lg">
                        <div className="text-5xl mb-4 text-amber-600 flex justify-center">
            <ImageIcon />
          </div>
              <h3 className="text-2xl mb-4 text-color-grey-13">
                Local Artists
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We showcase rotating exhibitions from talented local artists in our community.
              </p>
            </div>
            <div className="text-center p-8 bg-color-grey-95 rounded-lg">
                        <div className="text-5xl mb-4 text-amber-600 flex justify-center">
            <UsersIcon />
          </div>
              <h3 className="text-2xl mb-4 text-color-grey-13">
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
             <h2 className="text-5xl mb-4 text-color-grey-13">
               Our Location
             </h2>
             <div className="w-15 h-1 bg-amber-600 mx-auto mb-4"></div>
             <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               Conveniently located in San Francisco
             </p>
           </div>
           
                     {/* Google Maps Embed */}
          <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.342280625182!2d-122.49347208!3d37.78201756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085870768cda713%3A0x4a91c17def119769!2sThe%20Art%20Bistro%2C%202960%20Clement%20St%2C%20San%20Francisco%2C%20CA%2094121%2C%20USA!5e0!3m2!1sen!2sca!4v1754286570996!5m2!1sen!2sca"
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
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-color-white-solid px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  Get Directions
                </a>
              </div>
              
              {/* Visual separator */}
              <div className="flex items-center justify-center" style={{marginTop: '3rem', marginBottom: '3rem'}}>
                <div className="w-20 h-1 bg-amber-600 rounded"></div>
              </div>
              
              <h3 className="text-4xl font-bold text-color-grey-13 mb-4">
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
                 <h4 className="text-2xl font-bold text-color-grey-13 mb-3">Opening Hours</h4>
                 <div className="space-y-2 text-gray-600">
                   <p className="text-xl">Monday - Sunday: 8:00 AM - 5:00 PM</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

                   {/* Gallery Section */}
      <section className="py-16 px-8 bg-color-white-solid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-color-grey-13">
              Our Collection
            </h2>
            <div className="w-15 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our handcrafted coffee and artisanal treats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg">
              <img src="/artonwall.jpg" alt="Art on wall" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg">
              <img src="/infocuscoffee.jpg" alt="In focus coffee" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg">
              <img src="/sandosanddrinkmaybeport.jpg" alt="Sandwiches and drink" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg">
              <img src="/drinkandflowersontable.jpg" alt="Drink and flowers on table" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg">
              <img src="/burgersandbobaontable.jpg" alt="Burgers and boba on table" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-color-white-solid rounded-lg overflow-hidden shadow-lg">
              <img src="/bussinsaladandsando.jpg" alt="Salad and sandwich" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

             {/* Reviews Section */}
       <section className="py-16 px-8 bg-color-grey-95">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-color-grey-13">
              What Our Customers Say
            </h2>
            <div className="w-15 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from our community of coffee lovers and artists
            </p>
          </div>
          
          <div className="bg-color-white-solid rounded-2xl p-12 text-center shadow-lg border border-gray-200">
            <p className="text-xl text-color-grey-13 mb-8 leading-relaxed italic">
              "{reviews[currentReview].text}"
            </p>
            <div className="text-2xl text-amber-600 mb-4">
              {reviews[currentReview].rating}
            </div>
            <p className="text-lg font-bold text-color-grey-13">
              - {reviews[currentReview].author}
            </p>
            {reviews[currentReview].source && (
              <p className="text-sm text-gray-500 mt-2 font-medium">
                via {reviews[currentReview].source}
              </p>
            )}
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevReview}
                className="w-10 h-10 bg-amber-600 text-color-white-solid border-none rounded-full cursor-pointer text-xl hover:bg-amber-700 transition-colors"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors ${
                      index === currentReview ? 'bg-amber-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextReview}
                className="w-10 h-10 bg-amber-600 text-color-white-solid border-none rounded-full cursor-pointer text-xl hover:bg-amber-700 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
        
        {/* Review Links Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-color-grey-13 mb-4">
            Want to see more? Read what our community is saying!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of happy customers sharing their Art Bistro experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?sca_esv=50347784169c3c85&sxsrf=AE3TifMkBhqDBD1uRnh17EvUHu2aqUavVA:1754531830361&q=the+art+bistro+san+francisco&si=AMgyJEsVtO7Zu9YEyquic0WJtZiamUti8WlVIiHVse8gMEYClePBp8zpgXevFYu6UYZ7r4OY8Bw2su2l0GO_RkqadsWifDyWbei_8aZsr77xksIY4kBFtnf9GnqYvqJQHDGimTMF_ufq&sa=X&sqi=2&ved=2ahUKEwjfv_uzzPeOAxXPFjQIHSRjC4gQrrQLegQIHxAA&biw=1536&bih=695&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-color-white-solid px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Read Google Reviews
            </a>
            <a
              href="https://www.yelp.com/biz/the-art-bistro-san-francisco?osq=art+bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-color-white-solid px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Read Yelp Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-700 text-color-white-solid py-12 px-8">
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
  );
};

export default Home; 