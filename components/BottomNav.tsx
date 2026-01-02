
import React from 'react';
import { Translation } from '../types';

interface BottomNavProps {
  t: Translation;
  activeTab: 'home' | 'quotes' | 'delivery' | 'durable' | 'assets';
}

const BottomNav: React.FC<BottomNavProps> = ({ t, activeTab }) => {
  const items = [
    { id: 'home', label: t.nav.home, icon: <HomeIcon /> },
    { id: 'quotes', label: t.nav.quotes, icon: <QuotesIcon /> },
    { id: 'delivery', label: t.nav.delivery, icon: <DeliveryIcon /> },
    { id: 'durable', label: t.nav.durable, icon: <DurableIcon /> },
    { id: 'assets', label: t.nav.assets, icon: <AssetsIcon /> },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#1e2329] border-t border-[#2b2f36] px-2 py-2 pb-6 flex justify-around items-end z-50">
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <div key={item.id} className="flex flex-col items-center gap-1 min-w-[60px] cursor-pointer">
            {isActive ? (
               <div className="relative flex flex-col items-center">
                  <div className="bg-[#f0b90b] p-3 rounded-full -mt-8 shadow-lg shadow-[#f0b90b]/20">
                    <div className="text-black">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-[#f0b90b] text-[10px] mt-1 font-medium">{item.label}</span>
               </div>
            ) : (
              <>
                <div className="text-[#848e9c]">
                  {item.icon}
                </div>
                <span className="text-[#848e9c] text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const QuotesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const DeliveryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const DurableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <line x1="12" y1="22" x2="12" y2="12" />
  </svg>
);

const AssetsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
     <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
  </svg>
);

export default BottomNav;
