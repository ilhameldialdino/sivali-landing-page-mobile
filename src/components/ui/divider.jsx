import React from 'react'
import { cn } from '../../utils/cn'

export const Divider = ({ className }) => {
    return <span className={cn('block h-[0.75px] w-full shrink-0 bg-neutral-300', className)} />
}
