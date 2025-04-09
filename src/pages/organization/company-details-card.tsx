/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite'
import {
	BUSINESS_ENTITY_OPTIONS,
	businessEntity,
	COMPANY_TYPES_OPTIONS,
	companyStore,
	companyTypes,
	ICompanies,
	usePatchCompany
} from '../../entities/companies'
import { Card } from '../../shared/ui/card/card'
import { Input, InputDate, Select } from '../../shared/ui'
import { useState } from 'react'
import moment from 'moment'

export const CompanyDetailsCard = observer(() => {
	const store = companyStore
	const [companyFormData, setCompanyFormData] = useState<ICompanies>({} as ICompanies)
	const { mutateAsync: patch } = usePatchCompany()

	const formData = {
		...store.company,
		...companyFormData
	}

	const handleSave = async () => {
		try {
			await patch({
				data: {
					...companyFormData
				},
				id: store.company.id
			})
			store.setCompany(formData)
		} catch (error) {
			console.error('Error', error)
		}
	}

	const handleCancel = () => {
		setCompanyFormData({} as ICompanies)
	}

	return (
		<Card title='Company Details' onSave={handleSave} onCancel={handleCancel}>
			<Card.Row
				label='Agreement:'
				view={
					<>
						<p>{store.company.contract.no}</p>
						<span>/</span>
						<p>{moment(store.company.contract.issue_date).format('MM.DD.YY')}</p>
					</>
				}
				edit={
					<>
						<Input
							value={companyFormData.contract?.no || store.company.contract.no}
							onChange={e => {
								setCompanyFormData({
									...companyFormData,
									contract: {
										...companyFormData.contract,
										no: e.target.value
									}
								})
							}}
						/>

						<span className={'card__row-label'}>Date:</span>
						<InputDate
							value={
								companyFormData.contract?.issue_date ||
								moment(store.company.contract.issue_date).format('YYYY-MM-DD')
							}
							onChange={e => {
								setCompanyFormData({
									...companyFormData,
									contract: {
										...companyFormData.contract,
										issue_date: new Date(e.target.value).toISOString()
									}
								})
							}}
						/>
					</>
				}
			/>

			<Card.Row
				label='Business entity:'
				view={store.company.businessEntity ? businessEntity[store.company.businessEntity] : ''}
				edit={
					<Select
						value={companyFormData.businessEntity || store.company.businessEntity}
						onChange={(selected: string[] | string) => {
							setCompanyFormData((prev: any) => ({
								...prev,
								type: selected
							}))
						}}
						options={BUSINESS_ENTITY_OPTIONS}
					/>
				}
			/>

			<Card.Row
				label='Company type:'
				view={store.company.type.map(t => companyTypes[t]).join(', ')}
				edit={
					<Select
						multiple
						value={companyFormData.type || store.company.type}
						onChange={(selected: string[] | string) => {
							setCompanyFormData((prev: any) => ({
								...prev,
								type: selected
							}))
						}}
						options={COMPANY_TYPES_OPTIONS}
					/>
				}
			/>
		</Card>
	)
})
