import React from "react";
import { Painel } from "../../components/Painel";
import { Form } from "../../components/Form";
import './style.css'

export function Home(){
    return (
        <div>
            <h1>Controle Financeiro</h1>
            <Painel />
            <Form />
        </div>
    )
}