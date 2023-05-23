import { PageLoginContainer } from "./styled"
import { FormLogin } from "../../components/FormLogin"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Login(){
	navigate = useNavigate()

	useEffect(()=>{

	},[])

	return(
		<PageLoginContainer>
			<FormLogin/>
		</PageLoginContainer>
	)
}