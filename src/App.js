import { useState } from "react";
import "./App.css";
import { AddTransaction } from "./component/AddTransaction";
import { Balance } from "./component/Balance";
import { Header } from "./component/Header";
import { IncomeExpenses } from "./component/IncomeExpenses";
import { TransactionLists } from "./component/TransactionLists";

function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState(TRANSACTIONS);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  function onSubmit(e) {
    e.preventDefault();

    if (text.trim() === "" || amount.trim() === "") {
      alert("fill in the form to submit");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }

  function deleteTransactions(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionLists
          transactions={transactions}
          deleteTransactions={deleteTransactions}
        />
        <AddTransaction
          addTransaction={addTransaction}
          text={text}
          setText={setText}
          amount={amount}
          setAmount={setAmount}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

const TRANSACTIONS = [];

export default App;
