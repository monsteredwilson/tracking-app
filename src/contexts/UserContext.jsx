import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"


export const UserContext = createContext({})

export function UserProvider ({children}){

	const navigate = useNavigate()

	const onSubmitFunctionLogin = data => {
		const { email, password } = data
		const loginUser = { email: email, password: password }
		loginUserSubmit(loginUser)
	}

	const onSubmitFunctionRegister = data => { 
		const {email, username, password} = data
		const registerUser = {
			username: username, 
			email: email, 
			password: password
		}
		registerUserSubmit (registerUser)

	}

	async function loginUserSubmit(loginUser) {
		try {
			const response = await api.post('/login', loginUser)
			const token = response.data.token
			console.log(response)
			localStorage.setItem('token', token)
			toast.success('Login realizado com sucesso')
			if(response.data.admin == true){
				navigate('/adminpanel')
				localStorage.setItem('isAdmin', true)
			} else {
				navigate('/dashboard')
			}
		} catch {
			toast.error('Erro ao fazer o login, usuário ou senha incorretos')
		}
	}

	async function registerUserSubmit (registerUser){
		try {
			const response = await api.post('/users', registerUser)
			toast.success('Cadastro realizado com sucesso')
			navigate('/')
		} catch {
			toast.error('Erro ao cadastrar')
		}
	}

	

	const [userData, setUserData] = useState({})

	async function getProfile() {
		try {
			const token = localStorage.getItem('token')
			const response = await api.get('/users/profile', {headers:{
				Authorization: `Bearer ${token}`
			}})
			setUserData(response.data)

		} catch (error) {

		}
	}

	useEffect(()=>{
		getProfile()
	},[])


	const [myCodes, setMyCodes] = useState([])

	async function getMyCodes(){
		try {
			const token = localStorage.getItem('token')
			const response = await api.get('/codes', {headers:{
				Authorization: `Bearer ${token}`
			}})

			setMyCodes(response.data)
		} catch (error) {

		}

	useEffect(()=>{
		getMyCodes()
	},[])

	

	return (
		<UserContext.Provider value={{navigate, onSubmitFunctionLogin, onSubmitFunctionRegister, userData, setUserData, getProfile, myCodes,setMyCodes,getMyCodes}}>
			{children}
		</UserContext.Provider>
	)
}
}