'use client';

import React from 'react';

interface TagProps {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  label,
  color = 'primary',
  size = 'medium',
  className = '',
}) => {
  const colorClasses = {
    primary: 'bg-[#99b81a] text-white',
    secondary: 'bg-white text-black',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-2',
  };

  return (
    <span
      className={`inline-block rounded-[13px] ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
    >
      {label}
    </span>
  );
};

export default Tag;