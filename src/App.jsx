import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FormRegister } from './components/FormRegister'
import BackGroundImage from "./assets/bg.jpg"
import { Routes, Route, Router } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AdminPanel } from './pages/Admin'
import { NotFound } from './pages/NotFound'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/adminpanel' element={<AdminPanel />} />
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>

			<GlobalStyle />
			<ToastContainer />
		</div>
	)
}

export default App
