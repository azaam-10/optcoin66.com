
import React, { useState, useMemo, useEffect } from 'react';
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
  // Set initial state to true so it appears immediately without delay
  const [isModalOpen, setIsModalOpen] = useState(true);
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

      {/* Increased blur to 12px and opacity to 15% for a deep obscure effect */}
      <div className={`flex-1 overflow-y-auto pb-24 px-4 pt-6 space-y-6 transition-all duration-1000 ${isModalOpen ? 'opacity-15 blur-[12px] pointer-events-none scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}>
        <Header t={t} />
        <BalanceSection t={t} />
        <ActionButtons t={t} />
        
        <div className="mt-8">
          <AccountTabs t={t} />
          <AssetList t={t} />
        </div>
      </div>

      <BottomNav t={t} activeTab="assets" />

      {/* Modal is open by default and cannot be closed */}
      <MultiStepModal isOpen={isModalOpen} />
    </div>
  );
};

export default App;
