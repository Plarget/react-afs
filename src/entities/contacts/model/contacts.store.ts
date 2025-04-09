import { makeAutoObservable } from 'mobx'
import { IContacts } from './contacts.model'

class ContactStore {
	contact: IContacts = {
		id: 16,
		lastname: '',
		firstname: '',
		phone: '',
		email: '',
		createdAt: '',
		updatedAt: ''
	}

	constructor() {
		makeAutoObservable(this)
	}

	setContact(data: Partial<IContacts>) {
		this.contact = {
			...this.contact,
			...data
		}
	}
}

export const contactStore = new ContactStore()
