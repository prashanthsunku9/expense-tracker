import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);



  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // console.log(total);

  return (
    <>
      <h4>Your Balance</h4>
     
      {total>=0?<h1>₹{numberWithCommas(total)}</h1>:<h1 className='hello'>InSufficent Funds</h1>}
    
    </>
  )
}
