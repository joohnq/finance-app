import React from "react";
import './style.css'

export function Form(){
    return(
        <form>
            <div className="input__text">
                <label htmlFor="description">
                    Descrição
                </label>
                <input type="text" id="description" name="description"/>

                <label htmlFor="value">
                    Valor
                </label>
                <input type="text" id="value" name="value"/>
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

            <button>Adicionar</button>
        </form>
    )
}