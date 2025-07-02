import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 sm:mb-0">
            © {currentYear} Archita Palkar. All rights reserved.
          </div>
          
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;