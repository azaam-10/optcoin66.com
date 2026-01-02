
import React from 'react';
import { Translation } from '../types';

interface BalanceSectionProps {
  t: Translation;
}

const BalanceSection: React.FC<BalanceSectionProps> = ({ t }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-[#848e9c] text-[13px]">{t.totalValuation}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#848e9c]">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-[32px] font-bold leading-none">7625.33</span>
            <div className="flex items-center gap-1 text-[#848e9c] text-[14px]">
              <span>USDT</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
          <div className="text-[#0ecb81] text-[13px] font-medium mt-1">
            $5.71 (0.222%) {t.todayGains}
          </div>
        </div>

        <div className="text-right flex flex-col items-end">
          <span className="text-[#848e9c] text-[12px]">{t.freezeFunds}</span>
          <span className="text-[14px] font-medium">$0</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
