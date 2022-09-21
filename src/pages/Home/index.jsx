import React, { useState, useEffect} from "react";
import { Painel } from "../../components/Painel";
import { Form } from "../../components/Form";
import './style.css'

export function Home(){
    const data = localStorage.getItem("transactions")
    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : [])
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount))

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount))

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0)

        const total = Math.abs(income - expense)

        setIncome(`R$ ${income}`)
        setExpense(`R$ ${expense}`)
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

    },[transactionsList])

    function handleAdd(transaction){
        const newArrayTransactions = [...transactionsList, transaction]

        setTransactionsList(newArrayTransactions)

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
    }

    return (
        <div>
            <h1>Controle Financeiro</h1>
            <Painel income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd}/>
        </div>
    )
}