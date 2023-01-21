import { IColaborador } from '../../interfaces/IColaborador.js'
import Colaborador from '../Colaborador/Colaborador'

import './Time.css'

interface TimeProps {
	corPrimaria: string
	corSecundaria: string
	nome: string
	colaboradores: IColaborador[] //Abrindo e fechando os colchetes [], teremos o indicador de que se trata de um array de fato. Se retirarmos e chamarmos .map(), a IDE dirá que não existe porque não identificamos que é uma lista, então temos que prestar atenção.
		
}

const Time = (props: TimeProps) => {
	const corDeFundo = { backgroundColor: props.corSecundaria }
	const corDaBorda = { borderColor: props.corPrimaria }
	const corDoCard = { backgroundColor: props.corPrimaria }

	return (
		(props.colaboradores.length > 0) ? <section style={corDeFundo} className='time'>
			<h3 style={corDaBorda}>{props.nome}</h3>
			<div className='colaboradores'>
				{props.colaboradores.map(colaborador =>
					<Colaborador
						key={colaborador.nome}
						nome={colaborador.nome}
						cargo={colaborador.cargo}
						imagem={colaborador.imagem}
						corDoCard={corDoCard}
					/>
				)}
			</div>
		</section>
			: <></>
	)
}

export default Time
