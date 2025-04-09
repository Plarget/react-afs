import React from 'react'
import './input.scss'
import clsx from 'clsx'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, onChange, value, ...props }, ref) => {
		return (
			<input
				type={type}
				value={value}
				onChange={onChange}
				className={clsx(`input`, className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
