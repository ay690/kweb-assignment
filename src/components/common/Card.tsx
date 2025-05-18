import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  className?: string;
  titleClassName?: string;       
  subtitleClassName?: string;    
}

export default function Card({
  src,
  alt,
  title,
  subtitle,
  className = '',
  titleClassName = 'text-white',
  subtitleClassName = 'text-white',
}: CardProps) {
  return (
    <div className={`relative overflow-hidden rounded-[10px] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-center">
        <h3 className={`text-[28px] font-medium ${titleClassName}`}>{title}</h3>
        <p className={`text-[16px] font-light ${subtitleClassName}`}>{subtitle}</p>
      </div>
    </div>
  );
}
