import React from "react";

import Balance from "@/components/Balance";
import DailyPoints from "@/components/DailyPoints";
import PaymentDue from "@/components/PaymentDue";
import LatestTransactions from "@/components/LatestTransactions";

const TransactionsListPage = () => {
  return (
    <div className="m-5 flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col w-72">
          <div className="mb-4">
            <Balance />
          </div>
          <DailyPoints />
        </div>
        <div className="ml-4 flex">
          <PaymentDue />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="max-w-72">
          <LatestTransactions
            transactions={[
              {
                id: 1,
                company: "Apple",
                amount: 100,
                description: "From JP Mongan Bank National",
                sender: "Ivan",
                percent: 3,
              },
              {
                id: 2,
                company: "Apple",
                amount: 100,
                description: "From JP Mongan Bank National",
                sender: "Ivan",
                percent: 3,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionsListPage;
