import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      viewBox="0 0 40 40" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle with gradient */}
      <circle 
        cx="20" 
        cy="20" 
        r="18" 
        fill="url(#gradient1)" 
        stroke="url(#gradient2)" 
        strokeWidth="2"
      />
      
      {/* Inner Y shape */}
      <path 
        d="M12 14 L20 22 L28 14" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M20 22 L20 30" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      
      {/* AI dots */}
      <circle cx="15" cy="28" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="25" cy="28" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="20" cy="32" r="1.5" fill="rgba(255,255,255,0.8)" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
};