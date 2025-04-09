import { keepPreviousData, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ICompanies } from '../model'
import { CompaniesService } from '../api'

export const useGetByIdCompany = (
	id: number,
	options?: UseQueryOptions<AxiosResponse<ICompanies>>
) => {
	return useQuery({
		queryKey: ['company', id],
		queryFn: () => CompaniesService().getById(id),
		placeholderData: keepPreviousData,
		...options
	})
}
