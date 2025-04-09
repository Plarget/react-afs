import { SVGProps, forwardRef } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: string | number
	absoluteStrokeWidth?: boolean
}

export const AddPhotoIcon = forwardRef<SVGSVGElement, IconProps>(
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
				<path d='M18.3337 9.58329V12.1666C18.3337 14.0335 18.3337 14.9669 17.9703 15.6799C17.6508 16.3071 17.1408 16.8171 16.5136 17.1366C15.8006 17.5 14.8672 17.5 13.0003 17.5H7.00033C5.13348 17.5 4.20006 17.5 3.48702 17.1366C2.85982 16.8171 2.34988 16.3071 2.0303 15.6799C1.66699 14.9669 1.66699 14.0335 1.66699 12.1666V7.83329C1.66699 5.96645 1.66699 5.03303 2.0303 4.31999C2.34988 3.69278 2.85982 3.18285 3.48702 2.86327C4.20006 2.49996 5.13348 2.49996 7.00033 2.49996H10.417M15.8337 6.66663V1.66663M13.3337 4.16663H18.3337M13.3337 9.99996C13.3337 11.8409 11.8413 13.3333 10.0003 13.3333C8.15938 13.3333 6.66699 11.8409 6.66699 9.99996C6.66699 8.15901 8.15938 6.66663 10.0003 6.66663C11.8413 6.66663 13.3337 8.15901 13.3337 9.99996Z' />
			</svg>
		)
	}
)


