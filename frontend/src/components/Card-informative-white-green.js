import React from 'react';

const CardInformativeWhiteGreen = ({ title, description, Icon }) => {
  return (
    <div className="w-full md:w-[430px] min-h-[153px] bg-white border border-[#F2F2F2] rounded-[30px] p-4 md:p-6 relative flex flex-col md:flex-row">
      {/* Icon Circle */}
      <div className="w-[50px] h-[50px] bg-[#2C9B8B] rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
        {Icon && <Icon size={24} color="white" />}
      </div>

      {/* Text Content */}
      <div className="md:ml-5 flex flex-col text-center md:text-left">
        <h3 className="text-[20px] md:text-[24px] font-bold text-[#2C9B8B] font-inter mb-3">
          {title}
        </h3>
        <p className="text-[14px] md:text-[16px] font-normal text-[#C1C1C1] font-inter leading-[19px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardInformativeWhiteGreen;
