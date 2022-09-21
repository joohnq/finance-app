import React from "react";
import { InfoItem } from "../InfoItem";
import './style.css'

export function Info({ itens, setItens }){
	function onDelete(ID){
		const newArray = itens.filter((transaction) => transaction.id !== ID)
		setItens(newArray)
		localStorage.setItem("transactions", JSON.stringify(newArray))
	}

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
				{ 
					itens?.map((item, index) => (<InfoItem key={index} item={item} onDelete={onDelete}/>))
				}
	        </tbody>
	</table>
    )
}