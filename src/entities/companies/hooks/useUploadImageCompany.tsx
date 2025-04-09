import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ICompanies } from '../model'
import { CompaniesService } from '../api'

export const useUploadImageCompany = (
	options?: UseMutationOptions<AxiosResponse<ICompanies>, Error, { file: File; id: number }>
) => {
	return useMutation({
		mutationKey: ['upload-image-company'],
		mutationFn: ({ file, id }: { file: File; id: number }) =>
			CompaniesService().uploadImage(id, file),

		...options
	})
}
