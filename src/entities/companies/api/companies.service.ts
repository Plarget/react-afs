import { $API } from '../../../shared/api'
import { ICompaniesPatch } from '../model'
import { COMPANIES_API_URL } from './companies.config'

export const CompaniesService = () => ({
	async getById(id: number) {
		return $API().get(`${COMPANIES_API_URL}/${id}`)
	},
	async patch(id: number, data: ICompaniesPatch) {
		return $API().patch(`${COMPANIES_API_URL}/${id}`, data)
	},
	async delete(id: number) {
		return $API().patch(`${COMPANIES_API_URL}/${id}`)
	},
	async uploadImage(id: number, file: File) {
		return $API('multipart/form-data').post(`${COMPANIES_API_URL}/${id}/image`, file)
	},
	async deleteImage(id: number, imageName: string) {
		return $API().delete(`${COMPANIES_API_URL}/${id}/image/${imageName}`)
	}
})
