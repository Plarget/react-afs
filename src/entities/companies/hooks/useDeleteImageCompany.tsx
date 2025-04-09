import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ICompanies } from '../model'
import { CompaniesService } from '../api'

export const useDeleteImageCompany = (
	options?: UseMutationOptions<AxiosResponse<ICompanies>, Error, { imageName: string; id: number }>
) => {
	return useMutation({
		mutationKey: ['delete-image-company'],
		mutationFn: ({ imageName, id }: { imageName: string; id: number }) =>
			CompaniesService().deleteImage(id, imageName),

		...options
	})
}
