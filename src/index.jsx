import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/style.scss'
import { HashRouter } from 'react-router-dom'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<HashRouter>
		<App />
	</HashRouter>
)
