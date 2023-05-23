
import React, { useState, useEffect, useContext } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "./style.css"

registerLocale('pt-br', ptBR)

import "react-datepicker/dist/react-datepicker.css";
import { func } from 'prop-types';
import { api } from '../../services/api';
import { DataContext } from '../../contexts/DataFilterContex';
import { toast } from 'react-toastify';

function DateInput ({filterCode, dataFilter, setDataFilter, reactLoading, setReactLoading}) {


	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [startValue, setStartValue] = useState('');
	const [endValue, setEndValue] = useState('');
	

	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	useEffect(() => {
		if (startDate) {
			setStartValue(startDate.toISOString().split("T")[0]);
		}
	}, [startDate]);

	useEffect(() => {
		if (endDate) {
			setEndValue(endDate.toISOString().split("T")[0]);
		}
	}, [endDate]);


	let {data_de_envio1} = filterCode.data_de_envio1
	let {data_de_envio2} = filterCode.data_de_envio2

	data_de_envio1 = startValue
	data_de_envio2 = endValue

	const handle = {
		...filterCode,
		data_de_envio1,
		data_de_envio2
	}

	async function onSubmitFunctionFilterCode (handle){
		try {
			setReactLoading(true)
			const token = localStorage.getItem('token')
			const response = await api.post('/codes', handle, {headers: {
				Authorization: `Bearer ${token}`
			}})
			
			const data = response.data
			setDataFilter(data)
			setReactLoading(false)
		} catch (error) {
			setReactLoading(false)
			toast.error('Erro ao buscar códigos')
		}
	}
	
	return (
		<>
			<DatePicker className='DatePicker'
			placeholderText={'Selecione uma data'}
			onChange={onChange}
			startDate={startDate}
			endDate={endDate}
			selectsRange
			showDisabledMonthNavigation/>
			<button onClick={()=>onSubmitFunctionFilterCode(handle)}>Buscar códigos</button>
		</>
	);
}

export default DateInput;



