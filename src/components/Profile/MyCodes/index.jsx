import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import './style.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../contexts/UserContext'

export function MyCodes(){

	const {myCodes} = useContext(UserContext)

	const responseCodes = myCodes

	return (
		<div className='FilElementContainer'>
			<ul className="CodesToBuyList">
				{responseCodes ? (
					responseCodes.map((element) => {
						
						return (
							<li key={element.id} className="CardCodeToBuy">
								<div>
									<h3>Código de Rastreio: </h3>
									<p>{element.codigo}</p>
								</div>

								<div>
									<h3>ID: </h3>
									<p>{element.id}</p>
								</div>

								<div>
									<h3>Data de postagem: </h3>
									<p>{element.data_de_postagem.substring(10,'')}</p>
								</div>

								<div>
									<h3>Descrição inicial: </h3>
									<p>{element.descricao_inicial}</p>
								</div>

								<div>
									<h3>Endereço de envio: </h3>
									<p>{element.endereco_envio}</p>
								</div>

								<div>
									<h3>Data Review: </h3>
									<p>{element.data_last_review.substring(10,'')}</p>
								</div>

								<div>
									<h3>Última descrição: </h3>
									<p>{element.ultima_descricao}</p>
								</div>

								<div>
									<h3>Endereço final: </h3>
									<p>{element.endereco_final}</p>
								</div>
							</li>
						);
					})
				) : (
					<p>Não encontrado</p>
				)}
			</ul>
		</div>
	);
}

	

	


