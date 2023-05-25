import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon: Icon }) => {
  return (
    <div className="h-[60px] w-[60px] bg-[#162A41] rounded-full grid">
      {Icon && <Icon size={24} className="text-white place-self-center" />}
    </div>
  );
};

export default Icon;
