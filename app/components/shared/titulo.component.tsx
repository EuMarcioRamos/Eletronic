export function Titulo(props: any){
    return (
        <div>
            <h1 className="text-3xl font-bold">{props.principal ?? "Sem Título"}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}