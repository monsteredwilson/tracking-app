import { useContext, useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Loader } from '../../components/LoadingContent'
import { AdminContext } from '../../contexts/AdminContext'
import { ListUsers } from '../../components/AdminComponents/ListUsers'
import { CreditsModal } from '../../components/AdminComponents/CreditsModal'
import { DeleteModal } from '../../components/AdminComponents/DeleteModal'

export function AdminPanel() {
	const { loading, setLoading, getListUsers, showCreditsModal, setShowCreditsModal, showDeleteModal, setShowDeleteModal, codesRows, getCodesRows, listUser, soldCredits, setSoldCredits } = useContext(AdminContext)


	const navigate = useNavigate()

	useEffect(() => {
		const admin = localStorage.getItem('isAdmin')
		const token = localStorage.getItem('token')
		if (!admin || !token || (!admin && !token)) {
			navigate('/login')
			toast.error('Não autorizado')
		}
		getListUsers()
		getCodesRows()
		calcSoldCodes()
		
	}, [])

	const totalCredits = listUser.reduce((accumulator, item) => accumulator + item.credits, 0);
	function calcSoldCodes(){
		setSoldCredits(totalCredits)
		// localStorage.setItem('totalCredits', totalCredits)
	}
	calcSoldCodes()

	function logout(){
		localStorage.clear()
		navigate('/login')
	}

	return (
		<div className='AdminContainer'>
			<header className="HeaderMenu">
				<nav className="NavMenu">
					<h1>Tracking Codes</h1>
					<div className="ButtonsNavMenu">
						{/* <span>Username</span> */}
						<button onClick={() => logout()} className="LogoutButton">Sair</button>
					</div>
				</nav>
			</header>
			<p className="UserEmail">Admin</p>
			<div className='UsersContainer'>
				{
					loading == true ?
						<Loader type={'spin'} className="LoaderContainer" />
						:
						<ListUsers />
				}
				{
					showCreditsModal == true ?
						<CreditsModal />
						:
						<></>
				}
				{
					showDeleteModal == true ?
						<DeleteModal />
						:
						<></>
				}
			</div>
			<section className='AvailableCodes'>
				<h3>
					Códigos Disponíveis: <span>{codesRows}</span>
				</h3>
				<h3>
					Créditos Vendidos: <span>{soldCredits}</span>
				</h3>
			</section>
		</div>
	)

}