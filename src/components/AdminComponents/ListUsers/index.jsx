import { useContext, useEffect } from "react"
import { AdminContext } from "../../../contexts/AdminContext"
import './style.css'

export function ListUsers(){
	const {listUser, getListUsers, loading, setLoading, showCreditsModal, setShowCreditsModal,userId, setUserId, setShowDeleteModal, userEmail, setUserEmail} = useContext(AdminContext)

	function userEmailFilter(valueId){
		const userEmailValue = listUser.filter(element => {
			return element.id == valueId
		})
		setUserEmail(userEmailValue[0].email)
	}

	function handleUserCredits(event){
		setUserId(event.currentTarget.id)
		setShowCreditsModal(true)
		userEmailFilter(event.currentTarget.id)
	}

	function handleUserDelete(event){
		setUserId(event.currentTarget.id)
		setShowDeleteModal(true)
		userEmailFilter(event.currentTarget.id)
	}

	return (
		<div className="ListUsersContainer">
			<ol className="ListUsers">
				{
					listUser?
					listUser.sort((a, b) => a.id - b.id).map(element =>{
						return(
							<li key={element.id} className="UserCard">
								<div>
									<h3>ID</h3>
									<p>{element.id}</p>
								</div>
								<div>
									<h3>Username</h3>
									<p>{element.username}</p>
								</div>
								<div>
									<h3>Email</h3>
									<p>{element.email}</p>
								</div>
								<div>
									<h3>Créditos</h3>
									<p>{element.credits}</p>
								</div>
								<div>
									<h3>Status</h3>
									<p>{element.active?'Ativo':'Inativo'}</p>
								</div>
								<div className="ButtonsUser">
									<button id={element.id} onClick={(event)=>handleUserCredits(event)}>Créditos</button>
									<button id={element.id} onClick={(event)=>handleUserDelete(event)}>Excluir</button>
								</div>
							</li>
						)
					})
					:
					'Não encontrado'
				}
			</ol>
		</div>
	)
}