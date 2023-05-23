import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FormInput } from "../FormInput"
import { Link } from "react-router-dom"
import { LoginContainer } from "./styled"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"


export function FormLogin() {
	const navigate = useNavigate()
	// useEffect(()=>{
	// 	const token = localStorage.getItem('token')
		
	// 	if(token){
	// 		async function autoLogin(){
	// 			try {
	// 				const response = await api.get('/profile', {headers:{Authorization:`Bearer ${token}`}})
					
	// 				navigate('/dashboard')
	// 				// window.location.replace('/dashboard')
	// 			} catch (error) {
					
	// 			}
	// 		}
	// 		autoLogin()
	// 	}
	// },[])

	const { onSubmitFunctionLogin } = useContext(UserContext)

	const formSchema = yup.object().shape({
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup.string().required('Senha obrigatória')
	})

	const { register, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(formSchema),
	})

	return (
		<LoginContainer>
			<form onSubmit={handleSubmit(onSubmitFunctionLogin)} className='FormLogin'>
				<h1 className="TitleLogin">Login</h1>
				<FormInput
					label="Email *"
					id="email"
					type="email"
					register={register}
					error={errors.email?.message}
					placeholder='Digite aqui seu email'
				/>
				<FormInput
					label="Senha *"
					id="password"
					type="password"
					register={register}
					error={errors.password?.message}
					placeholder='Digite aqui sua senha'
				/>

				<button className="ButtonSubmit" type="submit">Entrar</button>
				<span>Ainda não possui uma conta?</span>
				<button className="ButtonToRegister" onClick={()=> navigate('/')}>Cadastre-se</button>
			</form>
		</LoginContainer>

	)
}