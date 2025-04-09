import { useState } from 'react'
import { Dialog } from '../../../../shared/ui'
import { companyStore, useDeleteCompany } from '../../../../entities/companies'
import { logout } from '../../../../shared/api'

type Props = {
	isOpen: boolean
	onClose: () => void
	onSuccess?: () => void
}
export function DeleteOrganizationDialog({ isOpen, onClose, onSuccess }: Props) {
	const [error, setError] = useState('')

	const { mutateAsync: deleteAction, isPending: isLoading } = useDeleteCompany()

	const handleConfirm = async () => {
		try {
			setError('')
			await deleteAction(companyStore.company.id)
			await logout()
			onSuccess?.()
		} catch (error) {
			console.error('Error deleting organization:', error)
			setError('An error occurred while deleting the organization')
		}
	}

	return (
		<Dialog
			isOpen={isOpen}
			title={'Remove the Organization?'}
			description={'Are you sure you want to remove this Organozation?'}
			onClose={onClose}
			onConfirm={handleConfirm}
			confirmText='Yes, remove'
			cancelText='No'
			isLoading={isLoading}
		>
			{error && <span className='error-message'>{error}</span>}
		</Dialog>
	)
}
