import { SVGProps, forwardRef } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: string | number
	absoluteStrokeWidth?: boolean
}

export const CompanyIcon = forwardRef<SVGSVGElement, IconProps>(
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
				<path d='M16.8755 5.625H3.12549C2.78031 5.625 2.50049 5.90482 2.50049 6.25V16.25C2.50049 16.5952 2.78031 16.875 3.12549 16.875H16.8755C17.2207 16.875 17.5005 16.5952 17.5005 16.25V6.25C17.5005 5.90482 17.2207 5.625 16.8755 5.625Z' />
				<path d='M13.125 5.625V4.375C13.125 4.04348 12.9933 3.72554 12.7589 3.49112C12.5245 3.2567 12.2065 3.125 11.875 3.125H8.125C7.79348 3.125 7.47554 3.2567 7.24112 3.49112C7.0067 3.72554 6.875 4.04348 6.875 4.375V5.625' />
				<path d='M17.5006 9.86792C15.2211 11.1867 12.6334 11.8792 9.99998 11.875C7.36696 11.8792 4.77968 11.1869 2.50049 9.86858' />
				<path d='M9.0625 9.375H10.9375' />
			</svg>
		)
	}
)
