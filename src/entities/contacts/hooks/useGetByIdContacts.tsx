import { keepPreviousData, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IContacts } from '../model'
import { ContactsService } from '../api'

export const useGetByIdContacts = (
	id: number,
	options?: UseQueryOptions<AxiosResponse<IContacts>>
) => {
	return useQuery({
		queryKey: ['contact', id],
		queryFn: () => ContactsService().getById(id),
		placeholderData: keepPreviousData,
		...options
	})
}
