import { $API } from '../../../shared/api'
import { IContactsPatch } from '../model'

import { CONTACTS_API_URL } from './contacts.config'

export const ContactsService = () => ({
	async getById(id: number) {
		return $API().get(`${CONTACTS_API_URL}/${id}`)
	},
	async patch(id: number, data: IContactsPatch) {
		return $API().patch(`${CONTACTS_API_URL}/${id}`, data)
	}
})
