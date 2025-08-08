import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';

// Create wrapper components for footer icons only
const PhoneIcon = FiPhone as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const MailIcon = FiMail as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Contact = () => {
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

                {/* Contact Information Section */}
        <section className="py-20 px-8 bg-color-white-solid" style={{marginTop: '140px'}}>
          <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
               <h1 className="text-6xl mb-8 text-color-grey-13 font-sans">
                 Contact Us
               </h1>
               <p className="text-3xl text-gray-600 max-w-4xl mx-auto mb-10">
                 We'd love to hear from you and welcome you to our community
               </p>
               <div className="w-20 h-1 bg-amber-600 mx-auto mb-10"></div>
               <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                 Whether you have questions, want to place an order, or just want to say hello, 
                 we're here to help. Stop by for a visit or reach out to us directly.
               </p>
             </div>

                                                                                                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 {/* Top Row: Find Us (spans full width) */}
                 <div className="lg:col-span-2 bg-amber-50 p-10 rounded-lg border border-amber-200 h-[32rem] flex flex-col">
                   <h3 className="text-4xl mb-8 text-color-grey-13 font-sans">Find Us</h3>
                   <div className="flex-grow rounded-lg overflow-hidden shadow-lg">
                     <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.342280625182!2d-122.49347207491203!3d37.782017563511545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085870768cda713%3A0x4a91c17def119769!2s2960%20Clement%20St%2C%20San%20Francisco%2C%20CA%2094121%2C%20USA!5e0!3m2!1sen!2sca!4v1754286570996!5m2!1sen!2sca"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="The Art Bistro Location"
                     ></iframe>
                   </div>
                   <div className="mt-6 text-center">
                     <a 
                       href="https://www.google.com/maps/dir//2960+Clement+St,+San+Francisco,+CA+94121" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-block bg-amber-600 hover:bg-amber-700 text-color-white-solid px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                     >
                       Get Directions
                     </a>
                   </div>
                 </div>

                 {/* Second Row: Visit Us and Important Notes */}
                 <div className="bg-color-grey-95 p-10 rounded-lg h-96 flex flex-col">
                   <h3 className="text-4xl mb-8 text-color-grey-13 font-sans">Visit Us</h3>
                   <div className="space-y-6 flex-grow">
                                         <div>
                      <p className="text-xl font-semibold text-gray-800">Address</p>
                      <p className="text-lg text-gray-600">
                        2960 Clement St<br/>
                        San Francisco, CA 94121
                      </p>
                    </div>
                     
                                         <div>
                      <p className="text-xl font-semibold text-gray-800">Phone</p>
                      <a href="tel:+14153797119" className="text-lg text-amber-600 hover:text-amber-700 transition-colors">
                        (415) 379-7119
                      </a>
                    </div>
                     
                                         <div>
                      <p className="text-xl font-semibold text-gray-800">Email</p>
                      <a href="mailto:support@theartbistro.site" className="text-lg text-amber-600 hover:text-amber-700 transition-colors">
                        support@theartbistro.site
                      </a>
                    </div>
                   </div>
                 </div>

                 <div className="bg-color-grey-95 p-10 rounded-lg h-96 flex flex-col">
                   <h3 className="text-3xl mb-6 text-color-grey-13 font-sans">Important Notes</h3>
                   <ul className="space-y-3 text-lg text-gray-600 flex-grow">
                     <li>• We are a cash-only business</li>
                     <li>• Pickup orders can be made by phone call</li>
                     <li>• Free Wi-Fi available for customers</li>
                     <li>• Local art exhibitions rotate monthly</li>
                   </ul>
                 </div>

                 {/* Third Row: Why Visit Us and Hours of Operation */}
                 <div className="bg-color-grey-95 p-10 rounded-lg h-[28rem] flex flex-col">
                   <h3 className="text-4xl mb-8 text-color-grey-13 font-sans">Why Visit Us?</h3>
                   <div className="space-y-6 flex-grow">
                                         <div>
                      <h4 className="text-xl font-semibold text-gray-800">Artisanal Coffee</h4>
                      <p className="text-lg text-gray-600">Handcrafted coffee with locally sourced beans</p>
                    </div>
                                         <div>
                      <h4 className="text-xl font-semibold text-gray-800">Local Art</h4>
                      <p className="text-lg text-gray-600">Rotating exhibitions from local artists</p>
                    </div>
                                         <div>
                      <h4 className="text-xl font-semibold text-gray-800">Community</h4>
                      <p className="text-lg text-gray-600">A welcoming space for artists and coffee lovers</p>
                    </div>
                                         <div>
                      <h4 className="text-xl font-semibold text-gray-800">Fresh Sandwiches</h4>
                      <p className="text-lg text-gray-600">Fresh bagels and croissants daily</p>
                    </div>
                   </div>
                 </div>

                 <div className="bg-color-grey-95 p-10 rounded-lg h-[28rem] flex flex-col">
                   <h3 className="text-4xl mb-8 text-color-grey-13 font-sans">Hours of Operation</h3>
                   <div className="space-y-4 flex-grow">
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Monday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Tuesday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Wednesday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Thursday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Friday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Saturday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-lg text-gray-600">Sunday</span>
                       <span className="text-lg font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                     </div>
                   </div>
                 </div>
               </div>
          </div>
        </section>

                 {/* Call to Action */}
         <section className="py-20 px-8 bg-amber-50">
           <div className="max-w-4xl mx-auto text-center">
                           <h2 className="text-4xl mb-6 text-color-grey-13 font-sans">
                Come Share a Cup With Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Where every visit feels like coming home to friends, art, and the perfect cup of coffee
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="inline-block bg-amber-600 hover:bg-amber-700 text-color-white-solid px-8 py-4 rounded-lg text-lg font-medium font-sans transition-colors">
                  Back to Home
                </Link>
                <Link to="/about" className="inline-block bg-neutral-700 hover:bg-gray-900 text-color-white-solid px-8 py-4 rounded-lg text-lg font-medium font-sans transition-colors">
                  Learn Our Story
                </Link>
              </div>
           </div>
         </section>

        {/* Footer */}
        <footer className="bg-neutral-700 text-color-white-solid py-12 px-8" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
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

export default Contact; 