import React, { ReactNode, useState } from 'react'

import { CheckIcon, EditIcon, XIcon } from '../../icons'
import { Button } from '../../ui'
import './card.scss'
import clsx from 'clsx'

type CardRowProps = {
	label: string
	view?: React.ReactNode
	edit?: React.ReactNode
}

type CardProps = {
	title: string
	children: unknown
	onSave?: () => void
	onCancel?: () => void
	onEdit?: () => void
	className?: string
	isRowView?: boolean
	renderAddPhotoButton?: () => React.ReactNode
}

export function Card({
	title,
	children,
	isRowView = true,
	renderAddPhotoButton,
	onSave,
	onCancel
}: CardProps) {
	const [isEditing, setIsEditing] = useState(false)

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleSave = () => {
		onSave?.()
		setIsEditing(false)
	}

	const handleCancel = () => {
		onCancel?.()
		setIsEditing(false)
	}

	return (
		<section className={'card'}>
			<header className={'card__header'}>
				<h5 className='card__title'>{title}</h5>
				<div className='card__header-actions'>
					{renderAddPhotoButton && renderAddPhotoButton()}
					{!renderAddPhotoButton &&
						(!isEditing ? (
							<Button onClick={handleEdit} variant='flattened' renderIcon={<EditIcon />}>
								Edit
							</Button>
						) : (
							<>
								<Button onClick={handleSave} variant='flattened' renderIcon={<CheckIcon />}>
									Save changes
								</Button>
								<Button onClick={handleCancel} variant='flattened' renderIcon={<XIcon />}>
									Cancel
								</Button>
							</>
						))}
				</div>
			</header>
			<div className={clsx('card__body', { 'card__body--is-editing': isEditing })}>
				{isRowView
					? React.Children.map(
							children as React.ReactElement<CardRowProps>[],
							(child: React.ReactElement<CardRowProps>, idx: number) => (
								<div className={'card__row'} key={idx}>
									<span className={'card__row-label'}>{child.props.label}</span>
									<div className={'card__row-value'}>
										{isEditing ? child.props.edit : child.props.view}
									</div>
								</div>
							)
					  )
					: (children as ReactNode)}
			</div>
		</section>
	)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Card.Row = (_props: CardRowProps) => null // хелпер для подсветки типов
