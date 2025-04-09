import React from 'react'
import './input.scss'
import { IMaskInput } from 'react-imask'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	mask?: string
	onAccept?: (value: string) => void
}

const InputFormat = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, onAccept, value, mask, ...props }, ref) => {
		return (
			<IMaskInput
				mask={mask}
				unmask={false}
				className={clsx(`input`, className)}
				value={value?.toString()}
				ref={ref}
				onAccept={onAccept}
				{...props}
			/>
		)
	}
)
InputFormat.displayName = 'InputFormat'

export { InputFormat }
