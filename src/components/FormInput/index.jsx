import { DivForm } from "./style"

export function FormInput({ label, id, type, register, error, placeholder, setFunctionInput }) {
	
	function resultInput(event){
		if(id == 'sendcity'){
			setFunctionInput(event.currentTarget.value)
		} else {
			setFunctionInput(event.currentTarget.value)
		}
	}

	return (
		<DivForm>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} {...register(id)} placeholder={placeholder} 
			onChange={(event)=> resultInput(event)}/>
			{error ? <p className="ErrorInput">{error}</p> : null}
		</DivForm>
	)

}