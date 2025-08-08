import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import AnnouncementBar from './AnnouncementBar';

const MenuIcon = FiMenu as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const CloseIcon = FiX as React.ComponentType<React.SVGProps<SVGSVGElement>>;

type HeaderProps = {
  transparent?: boolean;
  showAnnouncement?: boolean;
};

const Header: React.FC<HeaderProps> = ({ transparent = false, showAnnouncement = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar (optional) */}
      {showAnnouncement && <AnnouncementBar />}

      <div className={`fixed ${showAnnouncement ? 'top-12' : 'top-0'} left-0 right-0 z-40`}>
        {/* Primary Navigation */}
        <nav
          className={`px-20 transition-all duration-300 ${
            transparent
              ? isScrolled
                ? 'bg-neutral-700/90 backdrop-blur-sm shadow-md py-6'
                : 'bg-transparent shadow-none py-8'
              : 'bg-neutral-700 shadow-md py-8'
          }`}
        >
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className={`text-2xl font-bold no-underline ${
                transparent && !isScrolled ? 'text-white drop-shadow-lg' : 'text-amber-500'
              }`}
            >
              The Art Bistro
            </Link>
            <div className="hidden md:flex gap-8">
              <Link to="/" className={`${transparent && !isScrolled ? 'text-white' : 'text-color-white-solid'} no-underline font-medium text-xl`}>
                Home
              </Link>
              <Link to="/about" className={`${transparent && !isScrolled ? 'text-white' : 'text-color-white-solid'} no-underline font-medium text-xl`}>
                About Us
              </Link>
              <Link to="/menu" className={`${transparent && !isScrolled ? 'text-white' : 'text-color-white-solid'} no-underline font-medium text-xl`}>
                Menu
              </Link>
              <Link to="/contact" className={`${transparent && !isScrolled ? 'text-white' : 'text-color-white-solid'} no-underline font-medium text-xl`}>
                Contact
              </Link>
            </div>
            <button
              className={`md:hidden ${transparent && !isScrolled ? 'text-white' : 'text-color-white-solid'}`}
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <CloseIcon width={28} height={28} /> : <MenuIcon width={28} height={28} />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className={`md:hidden absolute left-0 right-0 ${
              transparent && !isScrolled ? 'bg-neutral-800/95' : 'bg-neutral-700'
            } text-white shadow-lg`}>
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
      {/* Spacer to offset fixed header height on solid pages (announcement bar + nav) */}
      <div className={transparent ? 'h-0' : 'h-[120px]'} />
    </>
  );
};

export default Header;


