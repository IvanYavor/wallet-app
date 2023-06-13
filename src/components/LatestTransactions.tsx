import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Transaction = {
  id: number;
  type: string;
  company: string;
  amount: number;
  description: string;
  sender: string;
  date: string;
  percent: number;
  status: string;
  authorizedUser?: string;
};

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const formatDate = (date: Date) => {
    const currentDate = new Date();
    const currentWeekStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay()
    );
    const currentWeekEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + (6 - currentDate.getDay())
    );

    if (date >= currentWeekStart && date <= currentWeekEnd) {
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      if (date.toDateString() === currentDate.toDateString()) {
        return "Today";
      } else if (
        date.toDateString() ===
        new Date(currentDate.setDate(currentDate.getDate() - 1)).toDateString()
      ) {
        return "Yesterday";
      } else {
        return weekdays[date.getDay()];
      }
    } else {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
  };

  return (
    <div>
      <h1 className="text-lg font-bold">Latest Transactions</h1>
      <div className="overflow-hidden rounded-md">
        {transactions.map((transaction) => (
          <Link key={transaction.id} href={`/transaction/${transaction.id}`}>
            <div className="flex items-center p-4 bg-white border-b border-gray-200">
              <div className="flex items-center flex-grow">
                <div className="w-12 h-12 mr-4 bg-black text-white flex items-center justify-center rounded-md">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-sm font-bold">{transaction.company}</div>
                  <div className="text-xs text-gray-500">
                    {transaction.status === "Pending" ? (
                      <span className="font-bold text-gray-500">
                        Pending -{" "}
                      </span>
                    ) : null}
                    {transaction.description}
                  </div>
                  <div className="text-xs text-gray-500">
                    {transaction.authorizedUser
                      ? `${transaction.authorizedUser} - `
                      : ""}
                    {formatDate(new Date(transaction.date))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sm font-bold mr-2">
                  {transaction.type === "Payment" ? "+" : ""}$
                  {transaction.amount}
                </div>
                <div className="bg-gray-100 text-xs rounded-md px-2 py-1">
                  {transaction.percent}%
                </div>
              </div>
              <div className="ml-3 -mt-5 text-gray-300">
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
