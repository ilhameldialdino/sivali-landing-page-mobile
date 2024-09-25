import React from 'react'
import { cn } from '../../utils/cn'

export const Badge = ({ className, ...props }) => {
    return (
        <div
            className={cn('px-6 py-3 border rounded-button', className)}
            {...props}
        />
    )
}
