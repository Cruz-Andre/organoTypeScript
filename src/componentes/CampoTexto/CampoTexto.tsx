import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    obrigatorio: boolean
    placeholder: string
}

// Montagem da estrutura com uma const e arrow function e a desestruturação da interface CompoTextoProps
const CampoTexto = ({aoAlterado, label, obrigatorio, placeholder, valor}: CampoTextoProps) => {
    
    /*concatenação de textos e template string
    const placeholderModificada = `${props.placeholder}...`*/

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto" >
            <label>{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}/>
            {/* concatenação de textos e template string
            <input placeholder={placeholderModificada}/> */}
        </div>
    )
}

export default CampoTexto
