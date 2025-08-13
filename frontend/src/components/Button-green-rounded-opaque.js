import React from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ButtonTipo1 = ({ text, url }) => {
  return (
    <Link 
      to={url}
      className="group relative inline-flex items-center justify-start w-[158px] h-[40px] 
                 bg-[#2C9B8B1A] rounded-[35px] pl-[25px] pr-[45px]
                 transition-all duration-300 hover:bg-[#2C9B8B33]"
    >
      <span className="text-[#2C9B8B] text-[14px] font-normal font-['Inter']">
        {text}
      </span>
      
      <div className="absolute right-[5px] flex items-center justify-center 
                    w-[30px] h-[30px] rounded-full bg-[#2C9B8B26]
                    group-hover:bg-[#2C9B8B40]">
        <IconArrowNarrowRight 
          size={24} 
          className="text-[#2C9B8B] transition-transform 
                     group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};

export default ButtonTipo1;