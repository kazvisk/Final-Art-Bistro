import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiImage, FiCoffee, FiMail } from 'react-icons/fi';
import Header from './components/Header';

// Create wrapper components to fix TypeScript issues
const PhoneIcon = FiPhone as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const ImageIcon = FiImage as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const CoffeeIcon = FiCoffee as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const MailIcon = FiMail as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const About = () => {
  return (
    <div className="relative bg-neutral-700 font-sans">
      <div className="w-full min-h-screen bg-color-white-solid">
        <Header transparent />

        {/* Hero Section with Image */}
        <section className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url(/owners.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white px-8 max-w-4xl" style={{ transform: 'translateY(-65%)' }}>
            <h1 className="text-6xl mb-4 font-bold font-sans">
              Our Story
            </h1>
            <p className="text-2xl opacity-90 font-sans">
              A journey of passion, community, and the perfect cup of coffee
            </p>
          </div>
        </section>

        {/* About Content Section */}
        <section className="py-20 px-8 bg-color-white-solid">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl mb-6 text-color-grey-13 font-Ovo">
                From Our Hearts to Yours
              </h2>
              <div className="w-15 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6 leading-relaxed">
                Dear friends and neighbors,
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                When we first opened The Art Bistro in 2018, we had a simple dream: to create a space where coffee wasn't just a drink, but a catalyst for connection, creativity, and community. What started as a small coffee shop has grown into something much more meaningful – a gathering place for artists, writers, students, families, and anyone seeking a moment of warmth in their day.
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                We believe that great coffee is about more than just beans and water. It's about the care that goes into every cup, the conversations that happen over steaming mugs, and the inspiration that flows in our cozy corner of San Francisco. That's why we source our beans from local roasters who share our passion for quality, and why we take the time to craft each drink with love and attention to detail.
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                Our walls tell stories – not just through the rotating art exhibitions we host from talented local artists, but through the memories created here every day. We've watched first dates blossom into lifelong partnerships, seen students become professionals, and witnessed countless moments of joy, reflection, and inspiration.
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                The Art Bistro is more than our business – it's our home, and we're honored to share it with you. Whether you're here for your morning ritual, a midday break, or an evening of creative inspiration, we hope you feel the same warmth and welcome that we feel every day.
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                Thank you for being part of our story. Here's to many more cups of coffee, conversations, and connections to come.
              </p>
              
              <p className="text-xl font-semibold text-orange-600">
                With gratitude and warm regards,<br/>
                The Art Bistro Family
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-8 bg-color-grey-95">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl mb-6 text-gray-800 font-Ovo">
                What We Believe In
              </h2>
              <div className="w-15 h-1 bg-orange-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-6 text-orange-600 flex justify-center">
                  <ImageIcon />
                </div>
                <h3 className="text-2xl mb-4 text-gray-800">Artistic Atmosphere</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our space is designed to inspire creativity, with rotating art exhibitions and a warm, welcoming environment.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6 text-orange-600 flex justify-center">
                  <CoffeeIcon />
                </div>
                <h3 className="text-2xl mb-4 text-gray-800">Quality Coffee</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We source the finest beans and craft each cup with care, ensuring every sip is a moment of pure enjoyment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-gray-800 font-Ovo">
              Come Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We'd love to welcome you into our community and share a cup of coffee together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="inline-block bg-amber-600 hover:bg-amber-700 text-color-white-solid px-8 py-4 rounded-lg text-xl font-medium font-Quicksand transition-colors">
                Back to Home
              </Link>
              <Link to="/menu" className="inline-block bg-neutral-700 hover:bg-gray-900 text-color-white-solid px-8 py-4 rounded-lg text-xl font-medium font-Quicksand transition-colors">
                Explore Our Menu
              </Link>
            </div>
          </div>
        </section>

                {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-8" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
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
                    <PhoneIcon className="text-orange-600" />
                    <a href="tel:+14153797119" className="text-gray-300 no-underline hover:text-white transition-colors">
                      (415) 379-7119
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MailIcon className="text-orange-600" />
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
      </div>
    </div>
  );
};

export default About; 