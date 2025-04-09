import { TBusinessEntity, TCompanyType } from "./companies.type"

export interface ICompaniesPatch {
	name?: string
	shortName?: string
	businessEntity?: TBusinessEntity
	contract?: {
		no?: string
		issue_date?: string
	}
	type?: TCompanyType[]
}
