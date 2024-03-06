import { instance } from './axios.config'

export const setUser = async (body) => {
	try {
		const response = await instance.post(`/users`, body)

		return response.data
	} catch (error) {
		console.error('Failed create user:', error)
	}
}
