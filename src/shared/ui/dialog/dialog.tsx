import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import './dialog.scss'
import { Button } from '../button'

type DialogProps = {
	isOpen: boolean
	children?: React.ReactNode
	title: string
	description?: string
	message?: string
	onClose: () => void
	onConfirm?: () => void
	confirmText?: string
	cancelText?: string
    isLoading?: boolean
}

export function Dialog({
	isOpen,
	title,
	description,
	children,
	onClose,
	onConfirm,
	confirmText = 'Save changes',
	cancelText = 'Cancel',
    isLoading
}: DialogProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		document.addEventListener('keydown', handleEscape)

		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [onClose])

	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className='dialog__overlay'>
			<div className='dialog'>
				<div className='dialog__header'>
					<h5 className='dialog__header-title'>{title}</h5>
					<p className='dialog__header-description'>{description}</p>
				</div>
				{children}
				<div className='dialog__actions'>
					<Button variant='outline' onClick={onClose}>
						{cancelText}
					</Button>

					{onConfirm && (
						<Button
                            isLoading={isLoading}
							onClick={() => {
								onConfirm()
							}}
						>
							{confirmText}
						</Button>
					)}
				</div>
			</div>
		</div>,
		document.body
	)
}
