import { useMutation } from '@tanstack/react-query'

import { CompaniesService } from '../api'

export const useDeleteCompany = () => {
	return useMutation({
		mutationKey: ['delete-company'],
		mutationFn: (id: number) => CompaniesService().delete(id)
	})
}
