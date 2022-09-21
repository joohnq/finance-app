import React, { useState } from "react";
import { Info } from "../../components/Info";
import "./style.css";

export const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <div>
      <form action="" method="GET">
        <div className="input__text">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            value={desc}
            id="description"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
          />

          <label htmlFor="value">Valor</label>
          <input
            type="number"
            id="value"
            name="value"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="input__radio">
          <label htmlFor="entrie">Entrada</label>
          <input
            type="radio"
            name="radio__option"
            id="entrie"
            defaultChecked
            value="entrie"
            onChange={() => setExpense(!isExpense)}
          />

          <label htmlFor="exit">Saída</label>
          <input
            type="radio"
            name="radio__option"
            id="exit"
            value="exit"
            onChange={() => setExpense(!isExpense)}
          />
        </div>

        <button onClick={handleSave}>Adicionar</button>
      </form>
      <Info itens={transactionsList} setItens={setTransactionsList} />
    </div>
  );
};
