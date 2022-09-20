import React from "react";
import './style.css'

export function Info(){
    return (
        <table className="info">
	        <thead>
	            <tr>
		            <th>Descrição</th>
		            <th>Valor</th>
		            <th>Tipo</th>
	            </tr>
				<tr className="underLine"></tr>
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
	        </tbody>
	</table>
    )
}