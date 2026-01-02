
import React from 'react';
import { Translation } from '../types';

interface HeaderProps {
  t: Translation;
}

const Header: React.FC<HeaderProps> = ({ t }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-[18px] font-bold tracking-tight">{t.headerTitle}</h1>
      
      <div className="flex items-center gap-2 text-right">
        <div className="flex flex-col items-end">
          <span className="text-[#848e9c] text-[13px] font-medium leading-tight">{t.demoAccount}</span>
          <span className="text-[#848e9c] text-[11px] leading-tight">{t.switchDemo}</span>
        </div>
        <div className="flex items-center justify-center bg-[#2b2f36] p-1.5 rounded-full">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
