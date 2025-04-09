import { observer } from 'mobx-react-lite'
import {
	companyStore,
	useDeleteImageCompany,
	useUploadImageCompany
} from '../../entities/companies'
import { Card } from '../../shared/ui/card/card'

import { Button, Image, Skeleton } from '../../shared/ui'
import { AddPhotoIcon } from '../../shared/icons'
import { useState } from 'react'

export const CompanyPhotosCard = observer(() => {
	const store = companyStore

	const [loadingPhoto, setLoadingPhoto] = useState(false)

	const { mutateAsync: uploadImage } = useUploadImageCompany()
	const { mutateAsync: deleteImage } = useDeleteImageCompany()

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			const file = e.target.files[0]
			setLoadingPhoto(true)

			try {
				const formData = new FormData()

				formData.append('file', file)

				const uploadedPhoto = await uploadImage({
					file: formData as unknown as File,
					id: store.company.id
				})

				const newPhoto = uploadedPhoto.data

				store.setCompany({
					...store.company,
					photos: [
						...store.company.photos,
						{
							filepath: newPhoto.filepath,
							name: newPhoto.name,
							thumbpath: newPhoto.thumbpath,
							createdAt: ''
						}
					]
				})
				setLoadingPhoto(false)
			} catch (error) {
				console.error('Ошибка при загрузке изображения', error)
				setLoadingPhoto(false)
			} finally {
				setLoadingPhoto(false)
			}
		}
	}

	// useEffect(() => {}, [store.company.photos])

	const handleDeletePhoto = async (photoName: string) => {
		try {
			await deleteImage({
				id: store.company.id,
				imageName: photoName
			})

			const updatedPhotos = store.company.photos.filter(photo => photo.name !== photoName)
			store.setCompany({
				...store.company,
				photos: updatedPhotos
			})
		} catch (error) {
			console.error('Error image deleting', error)
		}
	}

	return (
		<>
			<Card
				title='Photos'
				isRowView={false}
				renderAddPhotoButton={() => (
					<>
						<Button
							renderIcon={<AddPhotoIcon />}
							variant='flattened'
							onClick={() => document.getElementById('file-input')?.click()}
						>
							Add
						</Button>

						<input
							id='file-input'
							type='file'
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
					</>
				)}
			>
				<div className='card__body-list'>
					{store.company.photos.length > 0 ? (
						<>
							{store.company.photos.map((photo, index) => (
								<Image
									key={index}
									imageUrl={photo.filepath}
									thumbpath={photo.thumbpath}
									alt={photo.name}
									onDelete={() => handleDeletePhoto(photo.name)}
								/>
							))}
							{loadingPhoto && <Skeleton width={'144px'} height={'108px'} />}
						</>
					) : (
						<p>No photos available</p>
					)}
				</div>
			</Card>
		</>
	)
})
