import React from "react";

export function InfoItem({ item, onDelete }){
    return (
        <tr>
		    <td>{item.desc}</td>
		    <td>{item.amount}</td>
		    <td>
                {
                    item.expense ? ( 
                        <img src="/icon-arrow-down-red.svg" alt="Icon Despesa" /> 
                    ) : ( 
                        <img src="/icon-arrow-up-green.svg" alt="Icon Despesa" />
                    ) 
                }
                <img src="/trash.svg" alt="Lixeira" onClick={() => onDelete(item.id)}/>
            </td>
	    </tr>
    )
}