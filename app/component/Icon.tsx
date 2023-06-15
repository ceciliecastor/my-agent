import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  bgColor?: boolean;
  textColor?: boolean;
  shape?: boolean;
  big?: boolean;
}

const Icon: React.FC<IconProps> = ({
  icon: Icon,
  bgColor,
  textColor,
  shape,
  big,
}) => {
  return (
    <div
      className={`
    grid
    ${bgColor ? "bg-[#EEF7FF]" : "bg-[#162A41]"}
    ${shape ? "rounded-md" : " rounded-full"}
    ${textColor ? "text-[#162A41]" : "text-white"}
    ${big ? "h-[70px] w-[70px]" : "h-[60px] w-[60px]"}
    `}
    >
      {Icon && <Icon size={30} className="place-self-center" />}
    </div>
  );
};

export default Icon;
