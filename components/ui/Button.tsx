import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase transition-all duration-100 ease-in-out border-2 sharp-corners active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";
  
  const variants = {
    primary: "bg-shark border-slateGray text-bone shadow-retro hover:bg-cosmic hover:border-bone hover:shadow-retro-xl",
    secondary: "bg-outerSpace border-bone text-retroYellow shadow-retro hover:bg-shark hover:border-retroYellow",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className} px-6 py-3`}
      {...props}
    >
      {children}
    </button>
  );
};