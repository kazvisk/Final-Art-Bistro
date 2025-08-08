import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const MenuIcon = FiMenu as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const CloseIcon = FiX as React.ComponentType<React.SVGProps<SVGSVGElement>>;

type HeaderProps = {
  transparent?: boolean;
};

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Bar */}
        <div className={`${transparent ? 'border-transparent' : 'border-b border-gray-200'} bg-color-white-solid`}>
          <div className="px-20 py-2 text-center">
            <p className="text-sm text-color-black-solid font-medium">
              Pickup orders can be made by phone call at{' '}
              <a
                href="tel:+14153797119"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                (415) 379-7119
              </a>{' '}
              • We are a cash-only business
            </p>
          </div>
        </div>

        {/* Primary Navigation */}
        <nav className={`${transparent ? 'bg-transparent shadow-none' : 'bg-neutral-700 shadow-md'} px-20 py-8`}>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className={`text-2xl font-bold no-underline ${transparent ? 'text-white drop-shadow-lg' : 'text-amber-500'}`}
            >
              The Art Bistro
            </Link>
            <div className="hidden md:flex gap-8">
              <Link to="/" className={`${transparent ? 'text-white' : 'text-color-white-solid'} no-underline font-bold text-xl`}>
                Home
              </Link>
              <Link to="/about" className={`${transparent ? 'text-white' : 'text-color-white-solid'} no-underline font-bold text-xl`}>
                About Us
              </Link>
              <Link to="/menu" className={`${transparent ? 'text-white' : 'text-color-white-solid'} no-underline font-bold text-xl`}>
                Menu
              </Link>
              <Link to="/contact" className={`${transparent ? 'text-white' : 'text-color-white-solid'} no-underline font-bold text-xl`}>
                Contact
              </Link>
            </div>
            <button
              className={`md:hidden ${transparent ? 'text-white' : 'text-color-white-solid'}`}
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <CloseIcon width={28} height={28} /> : <MenuIcon width={28} height={28} />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className={`md:hidden absolute left-0 right-0 ${transparent ? 'bg-neutral-800/95' : 'bg-neutral-700'} text-white shadow-lg`}>
              <div className="px-6 py-4 flex flex-col gap-4">
                <Link to="/" className="no-underline text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="no-underline text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/menu" className="no-underline text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Menu
                </Link>
                <Link to="/contact" className="no-underline text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
      {/* Spacer to offset fixed header height on solid pages */}
      <div className={transparent ? 'h-0' : 'h-[120px]'} />
    </>
  );
};

export default Header;


