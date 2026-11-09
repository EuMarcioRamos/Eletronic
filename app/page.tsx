"use client"
import Pagina from "./components/shared/pagina.component";
import { ListingDestaque } from "./components/destaques/listing-destaques";
import { Products } from "./data/itens-products-list";

export default function Home() {
  return (
    <Pagina titulo="Destaques" subtitulo="Os preferidos da internet">
        <ListingDestaque products={Products}/>
    </Pagina>
  );
}
