import { FilterContainer } from "./styled";
import { FormInput } from "../FormInput";
import DateInput from "../FormDate";
import { SelectState } from "../SelectState";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataFilterContex";
import { UserContext } from "../../contexts/UserContext";

export function FilterComponent() {

	const {dataFilter, setDataFilter, reactLoading, setReactLoading} = useContext(DataContext)
	const {userData} = useContext(UserContext)

	const formSchema = yup.object().shape({
		sendcity: yup.string()
	})

	const { register, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(formSchema),
	})

	const [sendState, setSendState] = useState('')
	const [destinateState, setDestinateState] = useState('')

	const [sendCity, setSendCity] = useState('')
	const [destinateCity, setDestinateCity] = useState('')

	const filterCode = {
		cidade_envio: sendCity,
		estado_envio: sendState,
		cidade_final: destinateCity,
		estado_final: destinateState,
		data_de_envio1: '',
		data_de_envio2: ''
	}

	return (
		
		<FilterContainer>
			<h3>Obter Código</h3>
			<p>Créditos atuais: {userData.credits}</p>
			<FormInput
				label="Cidade de Envio"
				id="sendcity"
				type="text"
				register={register}
				error={errors.sendcity?.message}
				placeholder='Digite a cidade de envio'
				setFunctionInput={setSendCity}
			/>
			<SelectState state={'Envio'} currentFunction={sendState} setFunction={setSendState} />
			<FormInput
				label="Cidade de Destino"
				id="destinatecity"
				type="text"
				register={register}
				error={errors.destinatecity?.message}
				placeholder='Digite a cidade de destino'
				setFunctionInput={setDestinateCity}
			/>
			<SelectState state={'Destino'} currentFunction={destinateState} setFunction={setDestinateState} />
			<DateInput filterCode={filterCode} dataFilter={dataFilter} setDataFilter={setDataFilter} reactLoading={reactLoading} setReactLoading={setReactLoading}/>
			
		</FilterContainer>
	)
}