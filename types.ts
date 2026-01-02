
export enum Language {
  AR = 'AR',
  FR = 'FR'
}

export interface Translation {
  headerTitle: string;
  demoAccount: string;
  switchDemo: string;
  totalValuation: string;
  todayGains: string;
  freezeFunds: string;
  actions: {
    recharge: string;
    withdraw: string;
    transfer: string;
    flash: string;
  };
  myAccount: string;
  assets: {
    currency: string;
    delivery: string;
    perpetual: string;
  };
  nav: {
    home: string;
    quotes: string;
    delivery: string;
    durable: string;
    assets: string;
  };
}
