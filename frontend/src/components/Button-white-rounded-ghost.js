import React from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ButtonWhiteGhost = ({ text, url }) => {
  return (
    <Link 
      to={url}
      className="group relative inline-flex items-center justify-start w-[158px] h-[40px] 
                 bg-white/10 rounded-[35px] pl-[25px] pr-[45px]
                 transition-all duration-300 hover:bg-white/20"
    >
      <span className="text-white text-[14px] font-normal font-['Inter']">
        {text}
      </span>
      
      <div className="absolute right-[5px] flex items-center justify-center 
                    w-[30px] h-[30px] rounded-full bg-white/15">
        <IconArrowNarrowRight 
          size={24} 
          className="text-white transition-transform 
                     group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};

export default ButtonWhiteGhost;
