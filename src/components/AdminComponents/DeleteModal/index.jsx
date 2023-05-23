import { useContext, useState } from 'react'
import './style.css'
import { AdminContext } from '../../../contexts/AdminContext'

export function DeleteModal() {
	const { showDeleteModal, setShowDeleteModal, userId, setUserId, deleteUserById, userEmail } = useContext(AdminContext)


	function closeDeleteModal() {
		setShowDeleteModal(false)
	}

	function deleteUser(event){
		event.preventDefault()
		deleteUserById(userId)
	}

	return (
		<div className='DeleteModalBg'>
			<div className='DeleteContainer'>
				<section className='DeleteHeaderModal'>
					<h3 className='UserEmailDeleteModal'>{userEmail}</h3>
					<button className='CloseDeleteModal' onClick={() => closeDeleteModal()}>X</button>
				</section>
				<p>Você tem certeza de que quer desativar o usuário {userEmail}?</p>
				
				<button className='DeleteButtonSubmit' onClick={(event)=> deleteUser(event)}>Desativar usuário</button>
			</div>
		</div>
	)
}