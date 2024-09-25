import React from 'react'
import { cn } from '../../utils/cn'

export const Section = ({ className, ...props }) => {
    return <section className={cn('flex flex-col px-5 gap-8', className)} {...props} />
}
