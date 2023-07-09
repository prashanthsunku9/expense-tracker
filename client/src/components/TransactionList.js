import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

import { AiOutlineHistory } from "react-icons/ai";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  
  }, []);

  return (
    <>
      <h3><AiOutlineHistory/>History</h3>
      <ul className="list">
        {transactions.length==0 && <p className='hi'>*no entris</p>}
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
