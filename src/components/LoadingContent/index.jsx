import './style.css'
import ReactLoading from 'react-loading'

export const Loader = ({type, color, height})=>(

	<ReactLoading type={type} color={color} height={height}/>
)