import { items } from "@/app/data/menu-item-list";
import { Menu } from "./menu.component";
import { Titulo } from "./titulo.component";

export default function Pagina(props: any){
    return(
        <div className="bg-gray-100 min-h-screen w-full ">
            <header className="topo">
                <div className="text-blue-800">Eletronic</div>
                <input className="bg-gray-200 w-1/2  p-2 rounded-xl focus:outline-none"  />
                <div  className="flex flex-row gap-3">
                    <div className="p-2">Log in</div>
                    <div className="bg-orange-400 p-2 rounded-xl text-white ">Sing up</div>
                </div>
            </header>
            <div className="flex items-start gap-3">
                <aside className="bg-white w-5/30 p-6 rounded-xl">
                    <h1 className="text-xl font-semibold mb-2">Categorias</h1>
                    <Menu items={items}/>
                </aside>
                <main className="w-35/30 p-6 rounded-xl ">
                    <Titulo
                        principal={props.titulo}
                        subtitulo={props.subtitulo}
                    />
                    {props.children}

                </main>
            </div>
        </div>
    )
}