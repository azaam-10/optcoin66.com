
import React from 'react';
import { Translation } from '../types';

interface ActionButtonsProps {
  t: Translation;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ t }) => {
  const actions = [
    { 
      label: t.actions.recharge, 
      icon: (
        <div className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0b90b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0b90b"><path d="M12 2l-1.41 1.41L16.17 9H4v2h12.17l-5.58 5.59L12 18l8-8z"/></svg>
          </div>
        </div>
      )
    },
    { 
      label: t.actions.withdraw, 
      icon: (
        <div className="relative">
          <div className="w-8 h-8 rounded-full border-2 border-[#848e9c] flex items-center justify-center">
             <span className="text-[10px] font-bold text-[#848e9c]">₮</span>
          </div>
          <div className="absolute -right-1 bottom-0">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="#f0b90b"><path d="M12 2l-1.41 1.41L16.17 9H4v2h12.17l-5.58 5.59L12 18l8-8z"/></svg>
          </div>
        </div>
      )
    },
    { 
      label: t.actions.transfer, 
      icon: (
        <div className="w-8 h-8 flex items-center justify-center text-[#f0b90b]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        </div>
      )
    },
    { 
      label: t.actions.flash, 
      icon: (
        <div className="w-8 h-8 flex items-center justify-center text-[#848e9c] border border-dashed border-[#848e9c] rounded-md relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m13 2-2 10h3L11 22l2-10h-3l2-10Z" />
          </svg>
          <div className="absolute -top-1 -right-1 bg-[#1e2329] p-0.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0b90b"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm-8 8c0 1.57.46 3.03 1.24 4.26L6.7 15.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8z"/></svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((action, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="w-full aspect-square bg-[#1e2329] rounded-[12px] flex items-center justify-center shadow-sm">
            {action.icon}
          </div>
          <span className="text-[12px] text-center font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full px-1">{action.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ActionButtons;
