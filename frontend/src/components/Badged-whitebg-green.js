import React from 'react';

const BadgeWhiteBgGreen = ({ text }) => {
  return (
    <div className="inline-flex items-center justify-center
                    w-[150px] h-[40px]
                    bg-white border border-[#2C9B8B] rounded-[30px]">
      <span className="text-[#2C9B8B] text-[14px] font-light font-inter text-center">
        {text}
      </span>
    </div>
  );
};

export default BadgeWhiteBgGreen;
