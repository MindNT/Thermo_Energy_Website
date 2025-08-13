import React from 'react';
import { IconStar, IconStarFilled } from '@tabler/icons-react';

const CardTestimonial = ({ imageUrl, comment, stars }) => {
  return (
    <div className="w-full md:w-[481px] min-h-[260px] bg-white shadow-[0px_0px_15px_2px_rgba(0,0,0,0.01)] 
                    rounded-[30px] p-4 md:p-8 relative">
      {/* Stars Row */}
      <div className="flex gap-1 justify-center md:justify-end">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]">
            {index < stars ? (
              <IconStarFilled className="text-[#FFAE23] w-full h-full" />
            ) : (
              <IconStar className="text-[#FFAE23] w-full h-full" />
            )}
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden bg-[#D9D9D9]">
          <img 
            src={imageUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Comment */}
      <div className="mt-4">
        <p className="text-[14px] md:text-[16px] font-medium text-[#989898] font-inter leading-[19px] text-center md:text-left">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
