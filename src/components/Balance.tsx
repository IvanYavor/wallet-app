import React from "react";

type BalanceProps = {
  maxLimit: number;
  balance: number;
};

const Balance: React.FC<BalanceProps> = ({ maxLimit, balance }) => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="text-sm text-left">Card Balance</div>
      <div className="text-xl font-bold text-left">${balance.toFixed(2)}</div>
      <div className="text-xs text-gray-500 text-left">
        ${(maxLimit - balance).toFixed(2)} Available
      </div>
    </div>
  );
};

export default Balance;
