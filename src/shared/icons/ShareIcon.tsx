import { SVGProps, forwardRef } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: string | number
	absoluteStrokeWidth?: boolean
}

export const ShareIcon = forwardRef<SVGSVGElement, IconProps>(
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
				<path d='M7.15833 11.2583L12.85 14.575M12.8417 5.42496L7.15833 8.74163M17.5 4.16663C17.5 5.54734 16.3807 6.66663 15 6.66663C13.6193 6.66663 12.5 5.54734 12.5 4.16663C12.5 2.78591 13.6193 1.66663 15 1.66663C16.3807 1.66663 17.5 2.78591 17.5 4.16663ZM7.5 9.99996C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 9.99996C2.5 8.61925 3.61929 7.49996 5 7.49996C6.38071 7.49996 7.5 8.61925 7.5 9.99996ZM17.5 15.8333C17.5 17.214 16.3807 18.3333 15 18.3333C13.6193 18.3333 12.5 17.214 12.5 15.8333C12.5 14.4526 13.6193 13.3333 15 13.3333C16.3807 13.3333 17.5 14.4526 17.5 15.8333Z' />
			</svg>
		)
	}
)
