"use client";

interface MenuItemProps {
  onclick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onclick, label }) => {
  return <div onClick={onclick}>{label}</div>;
};

export default MenuItem;
