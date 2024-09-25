import React from 'react'
import { cn } from '../../utils/cn'

const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                'w-full h-fit bg-neutral-50 rounded-2xl px-5 pt-5 pb-7 flex flex-col gap-6 shadow-card text-card-foreground',
                className
            )}
        >
            {children}
        </div>
    )
}

Card.displayName = 'Card'

const CardHeader = ({ className, children }) => {
    return <div className={cn('flex gap-3 items-center', className)}>{children}</div>
}

CardHeader.displayName = 'CardHeader'

const CardPlaceholder = ({ children }) => {
    return <div className='bg-card-placeholder flex items-center justify-center size-20 rounded-button'>{children}</div>
}

CardPlaceholder.displayName = 'CardPlaceholder'

const CardTitle = ({ className,children }) => {
    return <h3 className={cn('font-medium text-black', className)}>{children}</h3>
}

CardTitle.displayName = 'CardTitle'

const CardDescription = ({ children }) => {
    return <p className='font-medium text-brand-100'>{children}</p>
}

CardDescription.displayName = 'CardDescription'

const CardContent = ({ children }) => {
    return <div className='w-full flex flex-col gap-3'>{children}</div>
}

CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardPlaceholder, CardTitle, CardDescription, CardContent }
