import { useContext, useState } from "react";

export const StateFilterContext = createContext({})

export function StateFilterProvider ({children}){
	const [sendState, setSendState] = useState('')
	const [destinateState, setDestinateState] = useState('')


	function responseSelect (event){
		if (state === 'Envio'){
			setFunction(event.currentTarget.value)

		} else {
			setFunction(event.currentTarget.value)

		}

	}

	return (
		<StateFilterProvider value={{state, sendState, setSendState, destinateState, setDestinateState, responseSelect}}>
			{children}
		</StateFilterProvider>
	)
}