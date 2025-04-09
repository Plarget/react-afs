import { makeAutoObservable } from 'mobx'
import { ICompanies } from './companies.model'

class CompanyStore {
	company: ICompanies = {
		id: 12,
		contactId: 16,
		name: '',
		shortName: '',
		contract: {
			no: '',
			issue_date: ''
		},
		type: [],
		status: '',
		photos: [],
		createdAt: '',
		updatedAt: ''
	}

	constructor() {
		makeAutoObservable(this)
	}

	setCompany(data: Partial<ICompanies>) {
		this.company = {
			...this.company,
			...data,
			contract: {
				...this.company.contract,
				...(data.contract || {})
			}
		}
	}
}

export const companyStore = new CompanyStore()
