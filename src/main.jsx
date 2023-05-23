import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import App from './App'
import './index.css'
import { AdminProvider } from './contexts/AdminContext'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { AdminPanel } from './pages/Admin'

ReactDOM.createRoot(document.getElementById('root')).render(

	<BrowserRouter>
		<AdminProvider>
			<UserProvider>
				{/* <StateFilterProvider> */}
				<App />
				{/* </StateFilterProvider> */}

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/adminpanel' element={<AdminPanel />} />
				</Routes>
			</UserProvider>
		</AdminProvider>

	</BrowserRouter>

)
