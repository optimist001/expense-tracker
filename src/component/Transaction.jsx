import React from 'react'

export const Transaction = ({transaction, deleteTransactions}) => {
    const {amount, text, id} = transaction
    const sign = amount<0? "-" : "+"
  return (
    <div>
        <li key={id} className={amount<0? "minus" : "plus"}> 
            {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn" onClick={() => deleteTransactions(transaction.id)}>x</button>
        </li>
    </div>
  )
}
