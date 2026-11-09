import { useState } from "react";
import { MenuItem } from "./menu-item.component";

export function Menu(props: any){

    const pagina = ""

    const[selecionado, setSelecionado] = useState("")
    return(
        <ul className="flex flex-col gap-2">
            {
                props.items.map((item: any) => (
                    <MenuItem
                        key={item.link}
                        link={item.link}
                        text={item.text}
                        icon={item.icon}
                        selected = {item.link === selecionado}
                        click = {() => setSelecionado(item.link)}
                        
                    />
                ))
                
            }
        </ul>  
    )
}