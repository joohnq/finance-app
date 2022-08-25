import React from "react";
import './style.css'

export function Info(){
    return (
        <table class="info">
	        <thead>
	            <tr>
		            <th>Descrição</th>
		            <th>Valor</th>
		            <th>Tipo</th>
	            </tr>
                <div className="underLine"></div>
	        </thead>
	         <tbody>
	            <tr>
		            <td>Academia</td>
		            <td>R$70,00</td>
		            <td>
                        <img src="/icon-arrow-down-red.svg" alt="Icon Despesa" /> 
                        <img src="/trash.svg" alt="Lixeira" />
                    </td>
	            </tr>
                <tr>
		            <td>Cartão Bolsa Presença</td>
		            <td>R$150,00</td>
		            <td>
                        <img src="/icon-arrow-up-green.svg" alt="Icon Receita" /> 
                        <img src="/trash.svg" alt="Lixeira" />
                    </td>
	            </tr>
	        </tbody>
</table>
    )
}