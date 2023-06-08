"use client";
import React, { useEffect, useState } from "react";

import { transactions } from "../transactions.js";

import Balance from "@/components/Balance";
import DailyPoints from "@/components/DailyPoints";
import PaymentDue from "@/components/PaymentDue";
import LatestTransactions from "@/components/LatestTransactions";
import Loader from "@/components/Loader";

type Transaction = {
  id: number;
  type: string;
  date: string;
  company: string;
  amount: number;
  description: string;
  sender: string;
  percent: number;
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
      // Simulating an asynchronous API call
      setTimeout(() => {
        const data: Transaction[] = transactions;
        setTransactions(data);
        setLoading(false); // Set loading to false once data is fetched
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
