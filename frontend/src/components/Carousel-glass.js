import React, { useState } from 'react';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const CardGlass = ({ image, title, description, url }) => {
  return (
    <div className="relative w-[280px] md:w-[450px] h-[250px] md:h-[350px] group mx-auto">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover rounded-[20px] md:rounded-[30px]"
      />
      
      {/* Overlay con descripción */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm 
                    rounded-[20px] md:rounded-[30px] opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 
                    flex items-center justify-center p-4 md:p-6">
        <p className="text-white text-center font-inter text-[13px] md:text-base max-h-[200px] overflow-y-auto">
          {description}
        </p>
      </div>

      {/* Círculo con flecha */}
      <Link to={url} className="absolute top-[10px] right-[10px] w-[35px] h-[35px] md:w-[50px] md:h-[50px] 
                               bg-white/30 hover:bg-white rounded-full 
                               flex items-center justify-center z-10
                               transition-all duration-300
                               group/button">
        <IconArrowNarrowRight className="w-4 h-4 md:w-6 md:h-6 transform rotate-[-39deg] text-white 
                                      group-hover/button:text-black" />
      </Link>

      {/* Etiqueta de título */}
      <div className="absolute bottom-[15px] left-[15px] px-3 py-2 md:px-6 md:py-3
                    bg-[rgba(239,239,239,0.15)] backdrop-blur-[27.5px] 
                    rounded-[15px] md:rounded-[30px] z-10
                    opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-white text-[12px] md:text-[14px] font-normal font-inter">
          {title}
        </span>
      </div>
    </div>
  );
};

const NavigationButton = ({ direction, onClick, isNext }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-[120px] md:w-[150px] h-[40px] md:h-[50px] rounded-[30px] 
                 ${isNext ? 'bg-[#2C9B8B]' : 'bg-white border border-[#383838]'}`}
    >
      {/* Circle with Icon */}
      <div className={`absolute ${isNext ? 'right-[8px]' : 'left-[8px]'} top-[5px] md:top-[10px]
                    w-[30px] h-[30px] rounded-full 
                    ${isNext ? 'bg-white/10' : 'bg-[#D9D9D9]'}
                    flex items-center justify-center`}>
        {direction === 'prev' ? 
          <IconArrowNarrowLeft size={20} className={isNext ? 'text-white' : 'text-black'} /> : 
          <IconArrowNarrowRight size={20} className={isNext ? 'text-white' : 'text-black'} />}
      </div>

      {/* Text */}
      <span className={`absolute ${isNext ? 'left-[20px] md:left-[31px]' : 'left-[40px] md:left-[48px]'} 
                     top-[12px] md:top-[16px]
                     text-[12px] md:text-[14px] font-normal font-inter leading-[17px]
                     ${isNext ? 'text-white' : 'text-black'}`}>
        {direction === 'prev' ? 'Anterior' : 'Siguiente'}
      </span>
    </button>
  );
};

const CarouselGlass = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicar los items para crear el efecto infinito
  const duplicatedItems = [...items, ...items, ...items];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full overflow-hidden px-4 md:px-0">
      <div className="overflow-x-auto scrollbar-hide">
        <div 
          className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 284 : 474)}px)`,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <CardGlass {...item} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-3 md:gap-6 mt-6 md:mt-8">
        <NavigationButton direction="prev" onClick={prevSlide} isNext={false} />
        <NavigationButton direction="next" onClick={nextSlide} isNext={true} />
      </div>
    </div>
  );
};

export default CarouselGlass;
