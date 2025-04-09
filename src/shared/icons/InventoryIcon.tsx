import { SVGProps, forwardRef } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: string | number
	absoluteStrokeWidth?: boolean
}

const InventoryIcon = forwardRef<SVGSVGElement, IconProps>(
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
				<path d='M10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9Z' />
				<path d='M15 7C15 11.5 10 15 10 15C10 15 5 11.5 5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7V7Z' />
				<line x1='5.75' y1='17.25' x2='14.25' y2='17.25' />
			</svg>
		)
	}
)

export default InventoryIcon
