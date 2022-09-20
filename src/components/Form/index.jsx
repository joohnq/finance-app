import React from "react";
import { Info } from "../Info";
import './style.css'

export function Form(){

    function addElement(e){
        const form = e.target
        const description = form.firstElementChild.children[1].value
        const value = form.firstElementChild.children[3].value
        let optionRadio = ''
        e.preventDefault()


        if(form.children[1].children[1].checked){
            optionRadio = 'entrie'
        }else{
            optionRadio = 'exit'
        }

        <Info description={description} value={value} optionRadio={optionRadio}/>
    }

    return(
        <form onSubmit={addElement} action="" method="GET">
            <div className="input__text">
                <label htmlFor="description">
                    Descrição
                </label>
                <input type="text" id="description" name="description"/>

                <label htmlFor="value">
                    Valor
                </label>
                <input type="number" id="value" name="value"/>
            </div>

            <div className="input__radio">
                <label htmlFor="entrie">
                    Entrada
                </label>
                <input type="radio" name="radio__option" id="entrie" value="entrie" />
                
                <label htmlFor="exit">
                    Saída
                </label>
                <input type="radio" name="radio__option" id="exit" value="exit" />
            </div>

            <button type="submit">Adicionar</button>
        </form>
    )
}