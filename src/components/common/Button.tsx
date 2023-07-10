import React from "react";

interface ButtonProps {
  label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="text-lg uppercase font-medium bg-slate-500 m-2 px-4 py-1">
      {label}
    </button>
  );
};

export default Button;
