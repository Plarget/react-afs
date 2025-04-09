import axios from 'axios'
import Cookies from 'js-cookie'

const AUTH_URL = `${import.meta.env.VITE_BASE_URL}/auth`
const COOKIE_KEY = 'auth_token'

export async function authorization(username: string): Promise<string> {
	try {
		const response = await axios.get(`${AUTH_URL}?user=${username}`, {
			validateStatus: () => true
		})

		const token = response.headers['authorization']
		if (!token) throw new Error('Токен отсутствует')

		// Удаляем префикс "Bearer " с помощью split
		const cleanToken = token.split(' ')[1] || token

		Cookies.set(COOKIE_KEY, cleanToken, {
			expires: 7,
			secure: true,
			sameSite: 'Lax'
		})

		window.location.href = '/'

		return token
	} catch (error) {
		throw new Error(
			`Ошибка авторизации: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
		)
	}
}

export function getAuthToken(): string | undefined {
	return Cookies.get(COOKIE_KEY)
}

export function logout() {
	Cookies.remove(COOKIE_KEY)
	window.location.href = '/auth'
}
