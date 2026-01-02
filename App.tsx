
import React, { useState, useMemo } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Header from './components/Header';
import BalanceSection from './components/BalanceSection';
import ActionButtons from './components/ActionButtons';
import AccountTabs from './components/AccountTabs';
import AssetList from './components/AssetList';
import BottomNav from './components/BottomNav';
import MultiStepModal from './components/MultiStepModal';
import './index.css';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.AR);
  // جعل المربع يظهر من البداية (true)
  const [isModalOpen] = useState(true);
  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === Language.AR ? Language.FR : Language.AR);
  };

  return (
    <div 
      className={`min-h-screen bg-[#0b0e11] text-white flex flex-col max-w-[430px] mx-auto overflow-hidden relative ${lang === Language.AR ? 'rtl' : 'ltr'}`}
      dir={lang === Language.AR ? 'rtl' : 'ltr'}
    >
      <button 
        onClick={toggleLanguage}
        className="fixed top-4 left-4 z-[100] bg-[#f0b90b] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg opacity-80 hover:opacity-100 transition-opacity"
      >
        {lang === Language.AR ? 'FR' : 'AR'}
      </button>

      {/* تخفيف الضبابية من blur-[6px] إلى blur-[2px] وزيادة الوضوح من opacity-30 إلى opacity-60 */}
      <div className={`flex-1 overflow-y-auto pb-24 px-4 pt-6 space-y-6 transition-all duration-300 ${isModalOpen ? 'opacity-60 blur-[2px] pointer-events-none' : 'opacity-100 blur-0'}`}>
        <Header t={t} />
        <BalanceSection t={t} />
        <ActionButtons t={t} />
        
        <div className="mt-8">
          <AccountTabs t={t} />
          <AssetList t={t} />
        </div>
      </div>

      <BottomNav t={t} activeTab="assets" />

      <MultiStepModal 
        isOpen={isModalOpen} 
        onClose={() => {}} // إزالة إمكانية الإغلاق
      />
    </div>
  );
};

export default App;
