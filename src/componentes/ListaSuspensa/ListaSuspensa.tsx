import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    valor: string
    aoAlterado: (valor: string) => void
    obrigatorio: boolean
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    //console.log(props);
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio} 
            >
                <option value=""></option>
                {/* para cada item recebido retorna uma option */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option> //como só há uma linha no return não precisa de ()
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa
