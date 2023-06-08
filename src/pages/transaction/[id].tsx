import React from "react";
import "../../app/globals.css";

// type Transaction = {
//   id: number;
//   company: string;
//   amount: number;
//   description: string;
//   sender: string;
//   percent: number;
// };

// type TransactionDetailProps = {
//   transactions: Transaction;
// };

const TransactionDetail: React.FC = () => {
  // TODO use useEffect?
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center">
        <h1 className="text-[50px] font-bold">$7.51</h1>
      </div>
      <div className="text-sm text-center">Apple</div>
      <div className="mb-5 text-sm text-center">12-04-22</div>
      <div className="flex flex-col w-72 p-4 bg-white border-b border-gray-200 rounded-md">
        <div className="text-sm font-bold">Status: Approved</div>
        <div className="text-sm text-gray-500">RBC Bank Debit Card</div>
        <div className="mt-2 pt-2 border-t border-gray-200 flex flex-row justify-between">
          <div className="text-sm font-bold">Total</div>
          <div className="text-sm font-bold">$100</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
