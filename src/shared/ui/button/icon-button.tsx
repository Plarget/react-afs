import { forwardRef } from 'react'
import clsx from 'clsx'
import './button.scss'

const IconButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
	({ className, ...props }, ref) => {
		return <button className={clsx('icon-button', className)} ref={ref} {...props} />
	}
)

IconButton.displayName = 'IconButton'

export { IconButton }
