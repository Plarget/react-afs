import React from 'react'
import './skeleton.scss'
import clsx from 'clsx'

interface SkeletonProps {
	width?: string | number
	height?: string | number
	className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ width, height, className }) => {
	const style = {
		width,
		height
	}

	return <div className={clsx('skeleton', className)} style={style} />
}
