import { TBusinessEntity, TCompanyType } from './companies.type'

export interface ICompanies {
	id: number
	contactId: number
	name: string
	shortName: string
	businessEntity?: TBusinessEntity
	contract: {
		no: string
		issue_date: string
	}
	type: TCompanyType[]
	status: string
	photos: {
		name: string
		filepath: string
		thumbpath: string
		createdAt: string
	}[]
	createdAt: string
	updatedAt: string
}
