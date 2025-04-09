import { useState } from 'react'
import { EditIcon, TrashIcon } from '../../../../shared/icons'
import { IconButton } from '../../../../shared/ui'
import { EditOrganizationDialog } from '../edit-organization-dialog/EditOrganizationDialog'
import { DeleteOrganizationDialog } from '../delete-organization-dialog/DeleteOrganizationDialog'
import { companyStore } from '../../../../entities/companies'

export function OrganizationHeader() {
	const store = companyStore
	const [isEditDialogOpen, setEditDialogOpen] = useState(false)
	const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false)

	const handleOpenEditDialog = () => setEditDialogOpen(true)
	const handleCloseEditDialog = () => setEditDialogOpen(false)

	const handleOpenDeleteDialog = () => setDeleteDialogOpen(true)
	const handleCloseDeleteDialog = () => setDeleteDialogOpen(false)
	return (
		<>
			<section className='page__header'>
				<h1>{store.company.name}</h1>
				<div className='page__header-actions'>
					<IconButton onClick={handleOpenEditDialog}>
						<EditIcon />
					</IconButton>
					<IconButton
						onClick={handleOpenDeleteDialog}
						style={{ color: 'var(--color-assistitive-red-active)' }}
					>
						<TrashIcon />
					</IconButton>
				</div>
			</section>

			<EditOrganizationDialog
				isOpen={isEditDialogOpen}
				onClose={handleCloseEditDialog}
				onSuccess={handleCloseEditDialog}
			/>
			<DeleteOrganizationDialog
				isOpen={isDeleteDialogOpen}
				onClose={handleCloseDeleteDialog}
				onSuccess={handleCloseDeleteDialog}
			/>
		</>
	)
}
