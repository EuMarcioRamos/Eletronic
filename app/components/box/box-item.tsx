import { itemBox } from "@/app/types/item-box";
import Link from "next/link";
import { ButtonBuy } from "./button-buy";
import { ButtonCart } from "./button-cart";



export function Box(props:itemBox){
    return(
        <Link className="bg-white rounded-2xl p-3"
              href={""}
        >
            <li className="">
                <div className=" h-38 mb-3 ">
                    <img className="w-full h-full object-contain" src={props.img} />
                </div>
                <div className="font-semibold">{props.nome}</div>
                <div>{props.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>
                <div className="mb-3">{props.descri}</div>
                <div className="flex gap-1">
                    <ButtonBuy/>
                    <ButtonCart/>
                </div>    
            </li>
        </Link>
    )
}