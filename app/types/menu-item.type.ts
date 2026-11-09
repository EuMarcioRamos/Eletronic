import { LucideIcon } from "lucide-react"

export type MenuItemProps = {
    link: string,
    text: string,
    icon: LucideIcon,
    selected: boolean,
    click: () => void 
    //icon: LucideIcon
}

