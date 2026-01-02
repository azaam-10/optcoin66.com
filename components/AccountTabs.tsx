
import React from 'react';
import { Translation } from '../types';

interface AccountTabsProps {
  t: Translation;
}

const AccountTabs: React.FC<AccountTabsProps> = ({ t }) => {
  return (
    <div className="flex border-b border-[#2b2f36] mb-4">
      <div className="relative pb-2 px-1">
        <span className="text-[#f0b90b] text-[15px] font-bold">{t.myAccount}</span>
        <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#f0b90b] rounded-full"></div>
      </div>
    </div>
  );
};

export default AccountTabs;
