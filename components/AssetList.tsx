
import React from 'react';
import { Translation } from '../types';

interface AssetListProps {
  t: Translation;
}

const AssetList: React.FC<AssetListProps> = ({ t }) => {
  const assets = [
    { name: t.assets.currency, amount: "5000.70", percentage: "65.58" },
    { name: t.assets.delivery, amount: "2624.63", percentage: "34.42" },
    { name: t.assets.perpetual, amount: "0.00", percentage: "0.00" }
  ];

  return (
    <div className="space-y-3">
      {assets.map((asset, i) => (
        <div key={i} className="bg-[#1e2329] p-4 rounded-[12px] flex items-center justify-between border border-[#2b2f36]/30">
          <span className="text-[14px] font-bold text-white">{asset.name}</span>
          <div className="text-right">
            <div className="text-[15px] font-bold">${asset.amount}</div>
            <div className="text-[#0ecb81] text-[12px] font-medium">{asset.percentage}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetList;
