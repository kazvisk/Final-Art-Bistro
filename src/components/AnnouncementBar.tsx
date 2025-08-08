import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-color-white-solid h-12 flex items-center border-b border-gray-200">
      <div className="px-20 w-full">
        <p className="text-center text-color-black-solid text-sm font-medium">
          Pickup orders can be made by phone call at{' '}
          <a href="tel:+14153797119" className="text-amber-600 hover:text-amber-700 transition-colors">
            (415) 379-7119
          </a>{' '}
          • We are a cash-only business
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;


