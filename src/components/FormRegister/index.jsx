import { useState,useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FormInput } from "../FormInput"
import { RegisterContainer } from "./styled"
import { UserContext } from "../../contexts/UserContext"
import { api } from "../../services/api"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"

export function FormRegister() {
	const navigate = useNavigate()

	const {onSubmitFunctionRegister} = useContext(UserContext)

	// useEffect(()=>{
	// 	const token = localStorage.getItem('token')
		
	// 	if(token){
	// 		async function autoLogin(){
	// 			try {
	// 				const response = await api.get('/profile', {headers:{Authorization:`Bearer ${token}`}})
	// 				navigate('/dashboard')
					
	// 			} catch (error) {
					
	// 			}
	// 		}
	// 		autoLogin()
	// 	}
	// },[])

	
	const formSchema = yup.object().shape({
		username: yup.string().required('Username obrigatório'),
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup
			.string()
			.matches(/.{8,}/, 'Deve conter pelo menos 8 carateres')
			.required(),
		passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
	})

	const { register, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(formSchema),
	})


	
	return (
		<RegisterContainer>
			<form onSubmit={handleSubmit(onSubmitFunctionRegister)} className='FormRegister'>
				<h1 className="TitleRegister">Crie sua conta</h1>
				<span className="SubtitleRegister">Cadastre-se!</span>
				<FormInput
					label="Username *"
					id="username"
					type="text"
					register={register}
					error={errors.username?.message}
					placeholder='Digite aqui seu nome'
				/>
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
				<FormInput
					label="Confirmar senha *"
					id="passwordconfirmation"
					type="password"
					register={register}
					error={errors.passwordConfirmation?.message}
					placeholder='Confirme aqui sua senha'
				/>
				<button className="ButtonSubmitNegative" type="submit">Cadastrar</button>
				<p>Ou</p>
				<button className="ButtonToLogin" type="button" onClick={()=> navigate('/login')}>Login</button>
			</form>
			
		</RegisterContainer>
		

	)
}