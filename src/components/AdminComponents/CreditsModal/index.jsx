import { useContext, useState } from 'react'
import './style.css'
import { AdminContext } from '../../../contexts/AdminContext'

export function CreditsModal() {
	const { showCreditsModal, setShowCreditsModal, userId, setUserId, inputCreditsById , listUser, userEmail, setUserEmail} = useContext(AdminContext)
	
	

	const [credits, setCredits] = useState(0)

	function closeCreditsModal() {
		setShowCreditsModal(false)
	}

	function handleCredits(event){
		setCredits(event.currentTarget.value)
	}

	function inputCredits(event){
		event.preventDefault()
		inputCreditsById(userId,credits)
		
	}

	return (
		<div className='CreditsModalBg'>
			<div className='CreditsContainer'>
				<section className='CreditsHeaderModal'>
					<h3 className='UserEmailCreditsModal'>{userEmail}</h3>
					<button className='CloseCreditsModal' onClick={() => closeCreditsModal()}>X</button>
				</section>
				<form className='FormCredits' onSubmit={(event)=> inputCredits(event)}>
					<div className='InputCreditsContainer'>
						<label htmlFor="creditsInput">Créditos</label>
						<input type="text" name='creditsInput' placeholder='Insira os créditos' onChange={(event)=>handleCredits(event)}/>
					</div>
					<button>Enviar créditos</button>
				</form>
			</div>
		</div>
	)
}