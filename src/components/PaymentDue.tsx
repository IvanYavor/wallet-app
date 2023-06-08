import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PaymentDue: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-lg flex flex-col">
      <div className="text-sm text-left">No Payment Due</div>
      <div className="text-xs text-gray-500 text-left">
        You have paid your September balance.
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-end items-end">
        <div className="w-12 h-12">
          <FontAwesomeIcon icon={faCircleCheck} className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default PaymentDue;
