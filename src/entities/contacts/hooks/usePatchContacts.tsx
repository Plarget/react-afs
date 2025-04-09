import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IContacts, IContactsPatch } from '../model'
import { ContactsService } from '../api'

export const usePatchContacts = (
	options?: UseMutationOptions<
		AxiosResponse<IContacts>,
		Error,
		{ data: IContactsPatch; id: number }
	>
) => {
	return useMutation({
		mutationKey: ['patch-contact'],
		mutationFn: ({ data, id }: { data: IContactsPatch; id: number }) =>
			ContactsService().patch(id, data),

		...options
	})
}
