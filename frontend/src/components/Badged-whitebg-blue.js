import React from 'react';

const BadgeWhiteBgBlue = ({ text }) => {
  return (
    <div className="inline-flex items-center justify-center
                    w-[150px] h-[40px]
                    bg-white border border-[#006BE5] rounded-[30px]">
      <span className="text-[#006BE5] text-[14px] font-light font-inter text-center">
        {text}
      </span>
    </div>
  );
};

export default BadgeWhiteBgBlue;
