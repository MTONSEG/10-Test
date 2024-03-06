import React from 'react'
import Header from '../../widgets/Header/Header'
import './Layout.scss'

const Layout = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />

			<main className='main'>{children}</main>
		</div>
	)
}

export default Layout
