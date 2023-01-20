import React from 'react'
import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (
        <button className="botao">
            {props.children} {/* Tudo que estiver dentro do <Botao>aqui dentro</Botao> será recebido pelo children e retornado */}
        </button>
    )
}

export default Botao
