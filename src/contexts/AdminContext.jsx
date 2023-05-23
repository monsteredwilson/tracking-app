import { createContext } from "react"
import { useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const AdminContext = createContext({})

export function AdminProvider({ children }) {

	const [loading, setLoading] = useState(false)
	const [listUser, setListUsers] = useState([])
	const [codesRows, setCodesRows] = useState(0)
	const [userData, setUserData] = useState({})
	const [showCreditsModal, setShowCreditsModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [userId, setUserId] = useState(0)
	const [userEmail, setUserEmail] = useState('')
	const [soldCredits, setSoldCredits] = useState(0)

	async function getListUsers() {
		try {
			setLoading(true)
			const token = localStorage.getItem('token')
			const response = await api.get('/users', {headers:{
				Authorization: `Bearer ${token}`
			}})
			setListUsers(response.data)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast.error('Erro')
		}
	}

	async function getCodesRows(){
		try {
			setLoading(true)
			const token = localStorage.getItem('token')
			const response = await api.get('/codes/rows', {headers:{
				Authorization: `Bearer ${token}`
			}})
			setLoading(false)
			setCodesRows(response.data)
			
		} catch (error) {
			setLoading(false)
			toast.error('Erro')
		}
	}


	async function getUserByEmail(userEmail){
		try {
			setLoading(true)
			const token = localStorage.getItem('token')
			const response = await api.post('/users/email', userEmail, {headers:{
				Authorization: `Bearer ${token}`
			}})
			setLoading(false)
			setUserData(response.data)
		} catch (error) {
			setLoading(false)
			toast.error('Erro')
		}
	}

	async function inputCreditsById(userId, credits){
		let creditos = {
				credits: 0
			}
		try {
			setLoading(true)
			creditos = {
				credits: credits
			}
			const token = localStorage.getItem('token')
			const response = await api.patch(`/users/credits/${userId}`, creditos ,{headers:{
				Authorization: `Bearer ${token}`
			}})
			response
			setLoading(false)
			getListUsers()
			setUserData(userData)
			toast.success('Créditos enviados')
		} catch (error) {
			setLoading(false)
			toast.error('Erro')
		}
	}

	async function deleteUserById(userId){
		try {
			setLoading(true)
			const token = localStorage.getItem('token')
			const response = await api.delete(`/users/${userId}`, {headers:{
				Authorization: `Bearer ${token}`
			}})
			response
			setLoading(false)
			getListUsers()
			setUserData(userData)
			toast.success('Usuário desativado com sucesso')
		} catch (error) {
			setLoading(false)
			toast.error('Erro')
		}
	}

	return (
		<AdminContext.Provider value={{getListUsers,listUser, loading, setLoading, getCodesRows, codesRows, showCreditsModal, setShowCreditsModal, userId, setUserId, inputCreditsById, showDeleteModal, setShowDeleteModal,userEmail, setUserEmail, deleteUserById,soldCredits, setSoldCredits}}>
			{children}
		</AdminContext.Provider>
	)
}