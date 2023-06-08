"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import "../../app/globals.css";
import transactions from "../../transactions.json";
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

const TransactionDetail: React.FC = () => {
  const router = useRouter();
  const { id: currentTransactionId = "" } = router.query;

  const [currentTransaction, setCurrentTransaction] = useState<Transaction>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransaction = () => {
      setTimeout(() => {
        const data: Transaction[] = transactions.transactions;
        setCurrentTransaction(
          data.find((transaction) => transaction.id === +currentTransactionId)
        );
        setLoading(false);
      }, 2000);
    };

    fetchTransaction();
  }, [currentTransactionId]);

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader />
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center">
        <h1 className="text-[50px] font-bold">
          ${currentTransaction?.amount.toFixed(2)}
        </h1>
      </div>
      <div className="text-sm text-center">{currentTransaction?.company}</div>
      <div className="mb-5 text-sm text-center">
        {currentTransaction && formatDate(new Date(currentTransaction.date))}
      </div>
      <div className="flex flex-col w-72 p-4 bg-white border-b border-gray-200 rounded-md">
        <div className="text-sm font-bold">
          Status: {currentTransaction?.status}
        </div>
        <div className="text-sm text-gray-500">
          {currentTransaction?.description}
        </div>
        <div className="mt-2 pt-2 border-t border-gray-200 flex flex-row justify-between">
          <div className="text-sm font-bold">Total</div>
          <div className="text-sm font-bold">
            ${currentTransaction?.amount.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
