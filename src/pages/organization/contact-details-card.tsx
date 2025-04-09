import { observer } from 'mobx-react-lite'

import { Card } from '../../shared/ui/card/card'

import { useEffect, useState } from 'react'

import { contactStore, IContacts, usePatchContacts } from '../../entities/contacts'
import { Input, InputFormat } from '../../shared/ui'
import { formatPhoneNumber } from '../../shared/lib'

export const ContactDetailsCard = observer(() => {
	const store = contactStore

	const [contactFormData, setContactFormData] = useState<IContacts>({} as IContacts)
	const { mutateAsync: patch } = usePatchContacts()

	const formData = {
		...store.contact,
		...contactFormData
	}

	const handleSave = async () => {
		await patch({
			data: {
				...contactFormData
			},
			id: store.contact.id
		})
		store.setContact(formData)
	}

	const handleCancel = () => {
		setContactFormData({} as IContacts)
	}

	const [rawInput, setRawInput] = useState(`${store.contact.firstname} ${store.contact.lastname}`)

	const handleBlur = () => {
		const [firstname, ...rest] = rawInput.trim().replace(/\s+/g, ' ').split(' ')
		const lastname = rest.join(' ')
		setContactFormData(prev => ({
			...prev,
			firstname,
			lastname
		}))
	}

	useEffect(() => {
		if (store.contact.firstname || store.contact.lastname) {
			setRawInput(`${store.contact.firstname} ${store.contact.lastname}`)
		}
	}, [store.contact.firstname, store.contact.lastname])

	return (
		<Card title='Contacts' onSave={handleSave} onCancel={handleCancel}>
			<Card.Row
				label='Responsible person:'
				view={
					<>
						<p>{`${store.contact.firstname} ${store.contact.lastname}`}</p>
					</>
				}
				edit={
					<>
						<Input
							value={rawInput}
							onChange={e => setRawInput(e.target.value)}
							onBlur={handleBlur}
						/>
					</>
				}
			/>

			<Card.Row
				label='Phone number:'
				view={formatPhoneNumber(store.contact.phone)}
				edit={
					<InputFormat
						mask='+1 000 000 0000'
						value={contactFormData.phone || store.contact.phone}
						onAccept={(value: string) =>
							setContactFormData(prev => ({ ...prev, phone: value.replace(/[\s+]/g, '') }))
						}
					/>
				}
			/>
			<Card.Row
				label='E-mail:'
				view={store.contact.email}
				edit={
					<Input
						value={contactFormData.email || store.contact.email}
						onChange={e =>
							setContactFormData(prev => ({
								...prev,
								email: e.target.value
							}))
						}
					/>
				}
			/>
		</Card>
	)
})
