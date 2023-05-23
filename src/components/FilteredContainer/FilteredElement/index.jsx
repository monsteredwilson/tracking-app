import React, { useContext, useState } from 'react';
import './style.css';
import { DataContext } from '../../../contexts/DataFilterContex';

export function FilteredElement({ responseCodes, selectedIds, setSelectedIds }) {
	// const {selectedIds, setSelectedIds} = useContext(DataContext);

	const handleSelect = (id) => {
		setSelectedIds((prevSelectedIds) => {
			if (prevSelectedIds.includes(id)) {
				return prevSelectedIds.filter((selectedId) => selectedId !== id);
			} else {
				return [...prevSelectedIds, id];
			}
		});
	};

	const isSelected = (id) => selectedIds.includes(id);

	return (
		<div className='FilteredElementContainer'>
			<ul className="CodesToBuyList">
				{responseCodes ? (
					responseCodes.map((element) => {
						const isElementSelected = isSelected(element.id);
						const buttonText = isElementSelected ? 'Cancelar' : 'Selecionar';

						return (
							<li key={element.id} className="CardCodeToBuy">
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

								<button
									className={isElementSelected ? 'Selected' : 'ToSelect'}
									onClick={() => handleSelect(element.id)}
								>
									{buttonText}
								</button>
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
