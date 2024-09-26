import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Card, CardContent, CardHeader, CardPlaceholder, CardTitle } from '../ui/card'
import { RoleBadge } from './role-badge'
import { Section } from '../ui/section'

export default function Role({ data }) {
    const [index, setIndex] = useState(0)

    const handlePrev = () => {
        if (index >= 0) setIndex((prev) => prev - 1)
    }

    const handleNext = () => {
        if (index <= data.card.length - 1) setIndex((prev) => prev + 1)
    }

    return (
        <Section className='flex flex-col px-5 gap-8'>
            <div className='space-y-3'>
                <h2>{data.title}</h2>
                <p>{data.subTitle}</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-6'>
                {data.card.map((role, idx) => {
                    return (
                        <Card
                            key={role.id}
                            className={idx === index ? 'flex' : 'hidden'}
                        >
                            <CardHeader>
                                <CardPlaceholder>{/* <span className='text-4xl'>{role.image}</span> */}</CardPlaceholder>

                                <CardTitle>{role.cardHeader.title}</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <RoleBadge badges={role.badge} />
                            </CardContent>
                        </Card>
                    )
                })}

                <div className='flex gap-3 w-fit items-center'>
                    <button
                        disabled={index <= 0}
                        onClick={handlePrev}
                        className='bg-neutral-100 p-3 disabled:text-black/50 rounded-button size-11'
                    >
                        <ArrowLeft className='size-5' />
                    </button>

                    <span className='text-sm'>
                        {index + 1} dari {data.card.length}
                    </span>

                    <button
                        disabled={index >= data.card.length - 1}
                        onClick={handleNext}
                        className='bg-neutral-100 p-3 disabled:text-black/50 rounded-button size-11'
                    >
                        <ArrowRight className='size-5' />
                    </button>
                </div>
            </div>
        </Section>
    )
}
