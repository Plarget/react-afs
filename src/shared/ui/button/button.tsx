import { forwardRef, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import './button.scss'

type BaseProps = {
	variant?: 'filled' | 'outline' | 'flattened' | 'icon' | 'menu'
	size?: 'default' | 'icon'
	renderIcon?: ReactNode
	className?: string
	children?: ReactNode
	isLoading?: boolean
}

type ButtonProps =
	| (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
	| (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
	({ className, variant = 'filled', renderIcon, isLoading, children, href, ...props }, ref) => {
		const classNames = clsx(
			'button',
			`button--${variant}`,
			`${isLoading ? 'button--loading' : ''}`,
			className
		)

		if (href) {
			return (
				<a
					className={classNames}
					href={href}
					ref={ref as React.Ref<HTMLAnchorElement>}
					{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
				>
					{renderIcon && renderIcon}
					{children && <span>{children}</span>}
				</a>
			)
		}
		return (
			<button
				className={classNames}
				ref={ref as React.Ref<HTMLButtonElement>}
				{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
			>
				{renderIcon && renderIcon}
				{children && <span>{children}</span>}
				{isLoading && <span className='button__spinner' />}
			</button>
		)
	}
)

Button.displayName = 'Button'

export { Button }
