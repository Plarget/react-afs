import { useEffect, useState } from 'react'
import { Dialog, Input } from '../../../../shared/ui'
import { companyStore, usePatchCompany } from '../../../../entities/companies'

type Props = {
	isOpen: boolean
	onClose: () => void
	onSuccess?: () => void
}
export function EditOrganizationDialog({ isOpen, onClose, onSuccess }: Props) {
	const store = companyStore
	const [name, setName] = useState(store.company.name || '')
	const [error, setError] = useState('')

	const { mutateAsync: patch, isPending: isLoading } = usePatchCompany()

	useEffect(() => {
		if (isOpen) {
			setName(store.company.name || '')
		}
	}, [isOpen, store.company.name])

	const handleConfirm = async () => {
		try {
			setError('')
			await patch({
				data: { name },
				id: companyStore.company.id
			})
			companyStore.setCompany({ name: name })
			onSuccess?.()
		} catch (error) {
			console.error('Error updating organization:', error)
			setError('An error occurred while updating the organization')
		}
	}
	return (
		<Dialog
			isOpen={isOpen}
			title={"Specify the Organization's name"}
			onClose={onClose}
			onConfirm={handleConfirm}
			confirmText='Save changes'
			cancelText='Cancel'
			isLoading={isLoading}
		>
			<Input placeholder='Write name' value={name} onChange={e => setName(e.target.value)} />
			{error && <span className='error-message'>{error}</span>}
		</Dialog>
	)
}
