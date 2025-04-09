import axios from 'axios'
import { getAuthToken } from './auth'

export const API_URL = import.meta.env.VITE_BASE_URL

export const $API = (contentType?: 'application/json' | 'multipart/form-data') => {
	const instance = axios.create({
		baseURL: API_URL,
		headers: {
			'Content-Type': contentType || 'application/json'
		}
	})

	// Интерсептор запросов для добавления токена
	instance.interceptors.request.use(config => {
		const token = getAuthToken()
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	})

	return instance
}
