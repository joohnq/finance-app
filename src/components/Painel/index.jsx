import React from "react";
import './style.css'

export function Painel(){
    return (
        <div className="painel">
            <section className="painel__box entries">
                <div>
                    <h2>Entradas</h2>
                    <img src="public/icon-arrow-up.svg" alt="Icon Entradas" />
                </div>
                <p className="entries__value">R$ 32,00</p>
            </section>
            <section className="painel__box exits">
                <div>
                    <h2>Saídas</h2>
                    <img src="public/icon-arrow-down.svg" alt="Icon Saídas" />
                </div>
                <p className="exits__value">R$ 32,00</p>
            </section>
            <section className="painel__box total">
                <div>
                    <h2>Total</h2>
                    <img src="public/icon-total.svg" alt="Icon Total" />
                </div>
                <p className="total__value">R$ 32,00</p>
            </section>
        </div>
    )
}