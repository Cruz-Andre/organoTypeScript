import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { IColaborador } from '../../interfaces/IColaborador'

interface FormularioProps {
	aoColaboradorCadastrado: (colaborador: IColaborador) => void
	times: string[]
}

const Formulario = (props: FormularioProps) => {

	//hooks
	const [nome, setNome] = useState('')
	const [cargo, setCargo] = useState('')
	const [imagem, setImagem] = useState('')
	const [time, setTime] = useState('')

	const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		props.aoColaboradorCadastrado({
			nome,
			cargo,
			imagem,
			time //Então teremos que ir à interface IColaborador em "src > compartilhado > interfaces > IColaborador.ts" e adicionar um time: Mas deveremos tomar cuidado, pois se no outro momento não tínhamos o time, isso quer dizer que pode ser opcional com a adição de uma interrogação, além de ser uma string.
		})
		setNome('')
		setCargo('')
		setImagem('')
		setTime('')
	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoTexto
					obrigatorio={true}
					label="Nome"
					placeholder="Digite seu nome"
					valor={nome}
					aoAlterado={valor => setNome(valor)}
				/>
				<CampoTexto
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite seu cargo"
					valor={cargo}
					aoAlterado={valor => setCargo(valor)}
				/>
				<CampoTexto
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					valor={imagem}
					aoAlterado={valor => setImagem(valor)}
				/>
				<ListaSuspensa
					obrigatorio={true}
					label="Time"
					itens={props.times}
					valor={time}
					aoAlterado={valor => setTime(valor)}
				/> {/*itens é uma propriedade da ListaSuspensa.js, lá ela recebe o tratamento para retornar um item por vez*/}
				
				<Botao>
					Criar Card {/* Tudo que estiver dentro do <Botao>aqui dentro</Botao> será recebido pelo children e retornado */}
				</Botao>
			</form>
		</section>
	)
}
export default Formulario;
