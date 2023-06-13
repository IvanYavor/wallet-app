"use client";
import React, { useEffect, useState } from "react";

import transactions from "../transactions.json";

import Balance from "@/components/Balance";
import DailyPoints from "@/components/DailyPoints";
import PaymentDue from "@/components/PaymentDue";
import LatestTransactions from "@/components/LatestTransactions";
import Loader from "@/components/Loader";

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

const TransactionsListPage: React.FC = () => {
  const [transactionsData, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(1);

  useEffect(() => {
    const randomBalance = Math.floor(Math.random() * 1500) + 1;
    setBalance(randomBalance);
  }, []);

  useEffect(() => {
    const fetchTransactions = () => {
      setTimeout(() => {
        const data: Transaction[] = transactions.transactions;
        setTransactions(data);
        setLoading(false);
      }, 2000);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="m-5 flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col w-72">
          <div className="mb-4">
            <Balance maxLimit={1500} balance={balance} />
          </div>
          <DailyPoints />
        </div>
        <div className="ml-4 flex">
          <PaymentDue />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="w-full">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <Loader />
              <div className="loader"></div>
            </div>
          ) : (
            <LatestTransactions transactions={transactionsData.slice(0, 10)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsListPage;
