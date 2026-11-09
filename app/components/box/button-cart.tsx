"use client"

import { Check, ShoppingCartPlus } from "lucide-react";
import { useState } from "react";

export function ButtonCart(){
    const[add, setAdd] = useState(false)

    function changeAdd(){
        setAdd(!add)
    }

    return(
        <button onClick={changeAdd} className="buttonCart">
            {add? <Check size={20} color="white"/> : <ShoppingCartPlus size={20} color="white"/>}
        </button>
    )
}