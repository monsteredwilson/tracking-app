import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import App from './App'
import './index.css'
import { AdminProvider } from './contexts/AdminContext'

ReactDOM.createRoot(document.getElementById('root')).render(

	<BrowserRouter>
		<AdminProvider>
			<UserProvider>
				
				<App />
				
			</UserProvider>
		</AdminProvider>

	</BrowserRouter>

)
