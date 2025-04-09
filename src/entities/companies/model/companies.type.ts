export type TCompanyType = 'funeral_home' | 'logistics_services' | 'burial_care_contractor'
export type TBusinessEntity = 'Partnership' | 'Sole_Proprietorship' | 'Limited_Liability_Company'

export const companyTypes: { [key in TCompanyType]: string } = {
	funeral_home: 'Funeral Home',
	logistics_services: 'Logistics Services',
	burial_care_contractor: 'Burial Care Contractor'
}
export const businessEntity: { [key in TBusinessEntity]: string } = {
	Partnership: 'Partnership',
	Sole_Proprietorship: 'Sole Proprietorship',
	Limited_Liability_Company: 'Limited Liability Company'
}

export const COMPANY_TYPES_OPTIONS = Object.entries(companyTypes).map(([key, value]) => ({
	label: value,
	value: key
}))
export const BUSINESS_ENTITY_OPTIONS = Object.entries(businessEntity).map(([key, value]) => ({
	label: value,
	value: key
}))
