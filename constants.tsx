
import { Language, Translation } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.AR]: {
    headerTitle: "نظرة عامة على الأصول",
    demoAccount: "حساب تجريبي",
    switchDemo: "(التبديل إلى)",
    totalValuation: "إجمالي تقييم الأصول",
    todayGains: "أرباح اليوم",
    freezeFunds: "تجميد الأموال",
    actions: {
      recharge: "فوق حتى",
      withdraw: "ينسحب",
      transfer: "تحويل",
      flash: "تبادل فلاش"
    },
    myAccount: "حسابي",
    assets: {
      currency: "محفظة العملة",
      delivery: "محفظة العقود الآجلة",
      perpetual: "محفظة العقود الدائمة"
    },
    nav: {
      home: "بيت",
      quotes: "يقتبس",
      delivery: "توصيل",
      durable: "مستمر",
      assets: "أصول"
    }
  },
  [Language.FR]: {
    headerTitle: "Aperçu des actifs",
    demoAccount: "Compte démo",
    switchDemo: "(basculer vers)",
    totalValuation: "Valorisation totale des actifs",
    todayGains: "Les gains d’aujourd’hui",
    freezeFunds: "geler les fonds",
    actions: {
      recharge: "recharger",
      withdraw: "retirer",
      transfer: "transfert",
      flash: "Flash"
    },
    myAccount: "Mon compte",
    assets: {
      currency: "Devise",
      delivery: "contrat de livraison",
      perpetual: "Contrats perpétuels"
    },
    nav: {
      home: "Fig début",
      quotes: "Citations",
      delivery: "Livraison",
      durable: "Durable",
      assets: "actifs"
    }
  }
};
