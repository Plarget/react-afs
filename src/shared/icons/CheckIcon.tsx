import { SVGProps, forwardRef } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: string | number
	absoluteStrokeWidth?: boolean
}

export const CheckIcon = forwardRef<SVGSVGElement, IconProps>(
	({ size = 20, absoluteStrokeWidth, ...props }, ref) => {
		return (
			<svg
				width={size}
				height={size}
				viewBox='0 0 20 20'
				fill='none'
				stroke='currentColor'
				strokeWidth={absoluteStrokeWidth ? undefined : 1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
				ref={ref}
				{...props}
			>
				<path d='M16.875 5.62537L8.125 14.375L3.75 10.0004' />
			</svg>
		)
	}
)
