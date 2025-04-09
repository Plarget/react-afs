import React, { useState, useEffect } from 'react'
import './input.scss'
import clsx from 'clsx'

const InputDate = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	({ className, value, ...props }, ref) => {
		const [internalValue, setInternalValue] = useState<string>('')

		useEffect(() => {
			// Если value передано с сервера, форматируем его для отображения в input date
			if (value) {
				const dateValue =
					typeof value === 'string' || typeof value === 'number'
						? new Date(value)
						: new Date(value[0])
				const formattedValue = dateValue.toISOString().split('T')[0]
				setInternalValue(formattedValue)
			}
		}, [value])

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const selectedDate = e.target.value
			// // Преобразуем дату в формат ISO для отправки на сервер
			// const formattedDate = new Date(selectedDate).toISOString()
			setInternalValue(selectedDate) // Обновляем внутреннее состояние
		}

		return (
			<input
				type={'date'}
				className={clsx('input', className)}
				ref={ref}
				value={internalValue} // Отображаем отформатированную дату
				onChange={handleChange}
				{...props}
			/>
		)
	}
)

InputDate.displayName = 'InputDate'

export { InputDate }
