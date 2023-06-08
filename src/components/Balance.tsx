import React from "react";

const Balance: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="text-sm text-left">Card Balance</div>
      <div className="text-xl font-bold text-left">$17.30</div>
      <div className="text-xs text-gray-500 text-left">$1343 Available</div>
    </div>
  );
};

export default Balance;
