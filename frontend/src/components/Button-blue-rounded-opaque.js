import React from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ButtonBlueRoundedOpaque = ({ text, url }) => {
  return (
    <Link 
      to={url}
      className="group relative inline-flex items-center justify-start w-[158px] h-[40px] 
                 bg-[#006BE51A] rounded-[35px] pl-[25px] pr-[45px]
                 transition-all duration-300 hover:bg-[#006BE533]"
    >
      <span className="text-[#006BE5] text-[14px] font-normal font-['Inter']">
        {text}
      </span>
      
      <div className="absolute right-[5px] flex items-center justify-center 
                    w-[30px] h-[30px] rounded-full bg-[#006BE526]
                    group-hover:bg-[#006BE540]">
        <IconArrowNarrowRight 
          size={24} 
          className="text-[#006BE5] transition-transform 
                     group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};

export default ButtonBlueRoundedOpaque;
