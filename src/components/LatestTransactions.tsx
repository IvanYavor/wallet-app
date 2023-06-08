import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Transaction = {
  id: number;
  company: string;
  amount: number;
  description: string;
  sender: string;
  percent: number;
};

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      <h1 className="text-lg font-bold">Latest Transactions</h1>
      {/* TODO lastest 10 transactions */}
      <div className="overflow-hidden rounded-md">
        {transactions.map((transaction) => (
          <Link key={transaction.id} href={`/transaction/${transaction.id}`}>
            <div className="flex justify-content p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-500 text-white">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div className="flex flex-col mr-2">
                <div className="text-sm font-bold">{transaction.company}</div>
                <div className="text-xs text-gray-500">
                  {transaction.description}
                </div>
                <div className="flex items-center">
                  <div className="text-xs text-gray-500">
                    {transaction.sender}
                  </div>
                </div>
              </div>
              <div>
                {/* TODO use localization for amount */}
                <div className="text-sm font-bold mb-2">
                  ${transaction.amount}
                </div>
                <div className="flex justify-center bg-gray-100 text-xs rounded-md">
                  {transaction.percent}%
                </div>
              </div>
              <div className="ml-3">
                <FontAwesomeIcon className="w-4 h-4" icon={faChevronRight} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
