"use client"
import { BoxListing } from "../../components/box/box-listing";
import Pagina from "../../components/shared/pagina.component";
import { Products } from "../../data/itens-products-list";

export default function Celular(){
    return(

            <Pagina titulo="Notebook" subtitulo="Os melhores da atualidade">
                <BoxListing products={Products} categoria="Notebook" />
            </Pagina>
                
           
        
    )
}