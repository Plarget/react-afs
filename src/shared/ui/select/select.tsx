import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

import './select.scss'
import { ArrowDownIcon } from '../../icons'

interface SelectProps {
	options: { value: string; label: string }[]
	multiple?: boolean
	placeholder?: string
	className?: string
	onChange?: (selected: string | string[]) => void,
    value?: string | string[]
}

const Select: React.FC<SelectProps> = ({
	options,
	multiple = false,
	placeholder = 'Choose...',
	className,
	onChange,
    value = multiple ? [] : ''
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState<string | string[]>(value)
	const selectRef = useRef<HTMLDivElement>(null)

	const handleSelect = (value: string) => {
		if (multiple) {
			const newSelected = selected.includes(value)
				? (selected as string[]).filter(item => item !== value)
				: [...(selected as string[]), value]
			setSelected(newSelected)
			onChange?.(newSelected)
		} else {
			setSelected(value)
			onChange?.(value)
			setIsOpen(false)
		}
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const selectedLabels = multiple
		? (selected as string[])
				.map(value => options.find(opt => opt.value === value)?.label)
				.join(', ')
		: options.find(opt => opt.value === selected)?.label

	return (
		<div className={clsx('select', className)} ref={selectRef}>
			<div
				className={clsx('select__input-inner', isOpen && 'select__input-inner--opened')}
				onClick={() => setIsOpen(!isOpen)}
			>
				<input
					className='select__input'
					placeholder={placeholder}
					value={selectedLabels || ''}
					readOnly
				/>
				<ArrowDownIcon />
			</div>

			{isOpen && (
				<div className='select__options'>
					{options.map(option => (
						<div
							key={option.value}
							className={clsx('select__option', {
								'select__option--selected': multiple
									? selected.includes(option.value)
									: selected === option.value
							})}
							onClick={() => handleSelect(option.value)}
						>
							{multiple && (
								<div className='select__checkbox-inner'>
									<input
										type='checkbox'
										id={option.value}
										className='select__checkbox'
										checked={selected.includes(option.value)}
										readOnly
									/>
									<label
										htmlFor={option.value}
										className='select__checkbox-label'
										onClick={e => e.stopPropagation()}
									></label>
								</div>
							)}
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export { Select }
