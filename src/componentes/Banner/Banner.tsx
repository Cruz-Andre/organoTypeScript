import React from 'react'
import './Banner.css'

interface BannerProps {
    urlImagem: string
    textoAlt?: string
}

const Banner = ({ urlImagem, textoAlt }: BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo" /> */}
            <img src={urlImagem} alt={textoAlt} />
        </header>
    )
}

export default Banner