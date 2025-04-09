import { useEffect } from 'react'
import { companyStore, useGetByIdCompany } from '../../entities/companies'
import { contactStore, useGetByIdContacts } from '../../entities/contacts'
import { OrganizationHeader } from '../../features/organizations/ui/organization-header/OrganizationHeader'
import { ChevronIcon } from '../../shared/icons'
import { IconButton, Skeleton } from '../../shared/ui'
import { CompanyDetailsCard } from './company-details-card'
import { CompanyPhotosCard } from './company-photos-card'
import { ContactDetailsCard } from './contact-details-card'

export default function OrganizationPage({ id }: { id: number }) {
	const { data: response, isLoading } = useGetByIdCompany(id)
	const organization = response?.data

	const { data: responseContact } = useGetByIdContacts(organization?.contactId || 16)
	const contact = responseContact?.data

	useEffect(() => {
		if (organization) {
			companyStore.setCompany(organization)
		}
	}, [organization])

	useEffect(() => {
		if (contact) {
			contactStore.setContact(contact)
		}
	}, [contact])

	return (
		<div className='page__content-inner'>
			<IconButton className='page__content-back'>
				<ChevronIcon />
			</IconButton>
			<div className='page__content-wrapper'>
				{isLoading && !organization ? (
					<>
						<Skeleton width={'100%'} height={'40px'} />
						<Skeleton width={'100%'} height={'192px'} />
						<Skeleton width={'100%'} height={'192px'} />
						<Skeleton width={'100%'} height={'192px'} />
					</>
				) : (
					<>
						<OrganizationHeader />
						<CompanyDetailsCard />
						<ContactDetailsCard />
						<CompanyPhotosCard />
					</>
				)}
			</div>
		</div>
	)
}
