import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ICompanies, ICompaniesPatch } from '../model'
import { CompaniesService } from '../api'

export const usePatchCompany = (
	options?: UseMutationOptions<
		AxiosResponse<ICompanies>,
		Error,
		{ data: ICompaniesPatch; id: number }
	>
) => {
	return useMutation({
		mutationKey: ['patch-company'],
		mutationFn: ({ data, id }: { data: ICompaniesPatch; id: number }) =>
			CompaniesService().patch(id, data),

		...options
	})
}
