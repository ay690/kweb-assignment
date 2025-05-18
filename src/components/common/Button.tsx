'use client';
import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-[22px] font-normal transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-[#99b81a] text-white hover:bg-[#8aa718]',
    secondary: 'bg-white text-[#000000] hover:bg-gray-100',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:text-[#000000]',
  };
  
  const sizeClasses = {
    small: 'text-[13px] px-4 py-2',
    medium: 'text-[13px] px-[31px] py-[15px]',
    large: 'text-[15px] px-8 py-4',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;