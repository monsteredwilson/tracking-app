import { PageLoginContainer } from "./styled"
import { FormLogin } from "../../components/FormLogin"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom/dist"

export function Login(){
	const navigate = useNavigate()

	useEffect(()=>{

	},navigate('/login'))

	return(
		<PageLoginContainer>
			<FormLogin/>
		</PageLoginContainer>
	)
}