import React, { useContext } from "react";

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign = transaction.amount < 0 ? '-' : '+';

    function moneyFormatter(num) {
        let p = num.toFixed(2).split('.');
        return (
          '$ ' +
          p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
              return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
          '.' +
          p[1]
        );
      }

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>  
    )
}