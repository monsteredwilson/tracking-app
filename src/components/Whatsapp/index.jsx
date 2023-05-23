import './style.css'
import whatsapp from '../../assets/whatsapp.png'
import { Link } from 'react-router-dom'

export function WhatsappButton() {



	return (
		<div className='WhatsappContainer'>
			<Link to='https://wa.me/5531999421839' target='_blank'>
				<img src={whatsapp} alt="" className='WhatsappButton'/>
			</Link>
		</div>
	)
}