import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  const baseStyles = "bg-outerSpace/20 backdrop-blur-sm border-2 border-white p-5 shadow-retro-lg";
  const hoverStyles = hoverEffect ? "transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-retro-xl" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};