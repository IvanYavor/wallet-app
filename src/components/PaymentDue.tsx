import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PaymentDue: React.FC = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className="bg-white p-5 rounded-lg flex flex-col">
      <div className="text-sm text-left">No Payment Due</div>
      <div className="text-xs text-gray-500 text-left">
        You have paid your {currentMonth} balance.
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-end items-end">
        <div>
          <FontAwesomeIcon icon={faCircleCheck} className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default PaymentDue;
