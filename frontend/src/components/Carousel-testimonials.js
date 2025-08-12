import React, { useState, useEffect } from 'react';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import CardTestimonial from './Card-testimonial';

const CarouselTestimonials = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    // Create circular array for infinite loop
    const duplicatedItems = [...items, ...items, ...items];
    setDisplayItems(duplicatedItems);
  }, [items]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 1;
      if (next >= items.length) {
        setTimeout(() => setCurrentIndex(0), 500);
        return items.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 1;
      if (prev < 0) {
        setTimeout(() => setCurrentIndex(items.length - 1), 500);
        return -1;
      }
      return prev;
    });
  };

  const getSlideOffset = () => {
    if (window.innerWidth < 768) {
      return window.innerWidth - 48; // Considerando padding de 24px en cada lado
    }
    return 505; // Ancho original en desktop
  };

  return (
    <div className="relative w-full overflow-hidden px-4 md:px-0">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
          style={{
            transform: `translateX(-${currentIndex * getSlideOffset()}px)`,
          }}
        >
          {displayItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-[481px]">
              <CardTestimonial
                imageUrl={item.imageUrl}
                comment={item.comment}
                stars={item.stars}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 md:gap-[97px] mt-6 md:mt-8">
        <button
          onClick={prevSlide}
          className="relative w-[110px] md:w-[150px] h-[40px] md:h-[50px] bg-white 
                    border border-[#383838] rounded-[30px]"
        >
          <div className="absolute left-[8px] top-[5px] md:top-[10px] 
                       w-[30px] h-[30px] bg-[#D9D9D9] rounded-full 
                       flex items-center justify-center">
            <IconArrowNarrowLeft size={20} className="text-black" />
          </div>
          <span className="absolute left-[45px] md:left-[57px] top-[12px] md:top-[16px]
                        text-[12px] md:text-[14px] font-normal font-inter leading-[17px] text-black">
            Anterior
          </span>
        </button>

        <button
          onClick={nextSlide}
          className="relative w-[110px] md:w-[150px] h-[40px] md:h-[50px] bg-[#2C9B8B] rounded-[30px]"
        >
          <span className="absolute left-[20px] md:left-[31px] top-[12px] md:top-[16px]
                        text-[12px] md:text-[14px] font-normal font-inter leading-[17px] text-white">
            Siguiente
          </span>
          <div className="absolute right-[8px] top-[5px] md:top-[10px] 
                       w-[30px] h-[30px] bg-white/10 rounded-full 
                       flex items-center justify-center">
            <IconArrowNarrowRight size={20} className="text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarouselTestimonials;
