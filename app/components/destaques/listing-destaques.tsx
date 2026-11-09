import { Box } from "../box/box-item";


export function ListingDestaque(props: any ,){
    
    return(
        <ul className="grid grid-cols-6 gap-6">
            {
                props.products
                .filter((item:any) => item.destaque)
                .map((item:any) =>
                <Box
                    key={item.nome}
                    img={item.img}
                    nome={item.nome}
                    valor={item.valor}
                    descri={item.descri}
                    categoria={""}
                />)
                    
                
            }
        </ul>
    )
}