import React from "react";
import './style.css'

export function Painel(){
    return (
        <div className="painel">
            <section className="painel__box entries">
                <div>
                    <h2>Entradas</h2>
                    <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="m16 12-4-4-4 4"></path>
                        <path d="M12 16V8"></path>
                    </svg>
                </div>
                <p className="entries__value">R$ 32,00</p>
            </section>
            <section className="painel__box exits">
                <div>
                    <h2>Saídas</h2>
                    <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="m8 12 4 4 4-4"></path>
                    <path d="M12 8v8"></path>
                    </svg>
                </div>
                <p className="exits__value">R$ 32,00</p>
            </section>
            <section className="painel__box total">
                <div>
                    <h2>Total</h2>
                    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M23.6 21.8c-4.54-1.18-6-2.39-6-4.29 0-2.18 2.01-3.71 5.4-3.71 3.56 0 4.88 1.7 5 4.2h4.42c-.13-3.45-2.24-6.59-6.42-7.62v-4.38h-6v4.32c-3.88.85-7 3.35-7 7.22 0 4.62 3.83 6.92 9.4 8.26 5.01 1.2 6 2.95 6 4.83 0 1.37-.97 3.57-5.4 3.57-4.12 0-5.75-1.85-5.96-4.2h-4.41c.25 4.38 3.52 6.83 7.37 7.66v4.34h6v-4.3c3.89-.75 7-3 7-7.11 0-5.66-4.86-7.6-9.4-8.79z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                </div>
                <p className="total__value">R$ 32,00</p>
            </section>
        </div>
    )
}