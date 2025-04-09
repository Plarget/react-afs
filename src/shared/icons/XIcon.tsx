import { SVGProps, forwardRef } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: string | number
	absoluteStrokeWidth?: boolean
}

export const XIcon = forwardRef<SVGSVGElement, IconProps>(
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
				<path d='M15.625 4.375L4.375 15.625' />
				<path d='M15.625 15.625L4.375 4.375' />
			</svg>
		)
	}
)
