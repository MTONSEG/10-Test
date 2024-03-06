import React, { useEffect } from 'react'
import { instance } from '../services/axios.config'
import Layout from './containers/Layout/Layout'
import { getToken } from '@/services/getToken'
import { getUsers } from '@/services/getUsers'

const App = () => {
	useEffect(() => {
		const fetch = async () => {
			const token = await getToken()
			const users = await getUsers('')


			console.log(token);
			console.log(users)
		}

		fetch()
	}, [])

	return <Layout>lol</Layout>
}

export default App
