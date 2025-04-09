import { TrashIcon } from '../../icons'
import { Button } from '../button'
import './image.scss'

interface Props {
	imageUrl: string
	thumbpath?: string
	alt?: string
	onDelete?: () => void
}

export const Image = ({ imageUrl, thumbpath, alt = '', onDelete }: Props) => {
	return (
		<div className='image'>
			<a href={imageUrl} target='_blank' rel='nofollow norefferer'>
				<img src={thumbpath} alt={alt} className='image__img' />
			</a>
			{onDelete && (
				<Button
					className='image__delete'
					onClick={e => {
						e.stopPropagation()
						onDelete?.()
					}}
					renderIcon={<TrashIcon />}
				/>
			)}
		</div>
	)
}
