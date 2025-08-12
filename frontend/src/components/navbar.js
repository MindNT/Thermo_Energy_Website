import { useState, useEffect } from 'react';
import ButtonGreenRounded from './Button-green-rounded-solid';
import LogoThermo from '../images/LogoThermo.webp';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'solutions', 'objective', 'products', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'solutions', label: 'Soluciones' },
    { id: 'objective', label: 'Objetivo' },
    { id: 'products', label: 'Productos' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'contact', label: 'Contacto' }
  ];

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#FAFAFA] shadow-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section - Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              className="h-8 w-auto"
              src={LogoThermo}
              alt="Thermo Energy Logo"
            />
          </div>

          {/* Middle section - Navigation (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 transition-colors duration-200 relative
                    ${activeSection === item.id 
                      ? 'text-[#2C9B8B] font-medium' 
                      : 'text-gray-700 hover:text-gray-900'
                    }
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-full after:h-0.5 after:bg-[#2C9B8B]
                    after:transform after:scale-x-0 after:transition-transform after:duration-200
                    ${activeSection === item.id ? 'after:scale-x-100' : ''}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right section - Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <ButtonGreenRounded 
                text="Whatsapp" 
                url="https://wa.me/529995119234"
              />
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#FAFAFA]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${activeSection === item.id
                    ? 'text-[#2C9B8B] bg-gray-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <ButtonGreenRounded 
                text="Whatsapp" 
                url="https://wa.me/529995119234"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
