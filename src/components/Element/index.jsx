import React from "react";

export function Element(){
    return (
        <tr>
		    <td>props.description</td>
		    <td>props.value</td>
		    <td>
                <img src="/icon-arrow-down-red.svg" alt="Icon Despesa" /> 
                <img src="/trash.svg" alt="Lixeira" />
            </td>
	    </tr>
    )
}