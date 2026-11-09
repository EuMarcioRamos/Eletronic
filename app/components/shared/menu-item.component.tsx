import { MenuItemProps } from "@/app/types/menu-item.type";
import Link from "next/link";

export function MenuItem(props: MenuItemProps){
    
    const Icon = props.icon

    return(
            <Link href={props.link}
                  onClick={props.click}
                  className= {props.selected ? 
                    "bg-blue-100 flex gap-2 pl-2 text-block text-blue-900 rounded-2xl font-semibold": 
                    "text-gray-600 flex gap-2 pl-2 hover:bg-gray-200 hover:rounded-2xl"}
                  >
                  <Icon size={20}/>
                  <li>{props.text}</li>
            </Link>
           
    ) 
    

    
}