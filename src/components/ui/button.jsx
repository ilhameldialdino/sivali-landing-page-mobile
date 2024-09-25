import React from 'react'

import { cn } from '../../utils/cn'

export const Button = ({ className, colors = 'white', ...props }) => {
    return (
        <button
            className={cn(
                'px-6 py-2 rounded-button font-semibold w-fit h-12',
                colors === 'white' ? 'bg-neutral-50 text-brand-500' : 'bg-brand-500 text-neutral-50',
                className
            )}
            {...props}
        />
    )
}
