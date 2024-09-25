import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Card, CardContent, CardHeader, CardPlaceholder, CardTitle } from '../ui/card'
import { RoleBadge } from './role-badge'
import { Section } from '../ui/section'

const ROLE = [
    {
        title: 'Kecantikan',
        image: '💄',
        badge: ['Barista', 'Chef', 'Hot Kitchen', 'Sous Chef', 'Pastry', 'Massage', 'Massage'],
    },
    {
        title: 'Kuliner',
        image: '🍽️',
        badge: ['Barista', 'Chef', 'Hot Kitchen', 'Sous Chef', 'Pastry', 'Massage', 'Massage'],
    },
    {
        title: 'Acara',
        image: '🪩',
        badge: ['Barista', 'Chef', 'Hot Kitchen', 'Sous Chef', 'Pastry', 'Massage', 'Massage'],
    },
    {
        title: 'Keamanan',
        image: '👮🏻‍♂️',
        badge: ['Barista', 'Chef', 'Hot Kitchen', 'Sous Chef', 'Pastry', 'Massage', 'Massage'],
    },
    {
        title: 'Kurir',
        image: '📦',
        badge: ['Barista', 'Chef', 'Hot Kitchen', 'Sous Chef', 'Pastry', 'Massage', 'Massage'],
    },
    {
        title: 'Hotel',
        image: '🏢',
        badge: ['Barista', 'Chef', 'Hot Kitchen', 'Sous Chef', 'Pastry', 'Massage', 'Massage'],
    },
]

export default function Role() {
    const [index, setIndex] = useState(0)

    const handlePrev = () => {
        if (index >= 0) setIndex((prev) => prev - 1)
    }

    const handleNext = () => {
        if (index <= ROLE.length) setIndex((prev) => prev + 1)
    }

    return (
        <Section className='flex flex-col px-5 gap-8'>
            <div className='space-y-3'>
                <h2>30+ Role pekerjaan</h2>
                <p>Temukan pekerjaan favorit sesuai pengalaman dan background kamu</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-6'>
                {ROLE.map((role, idx) => {
                    return (
                        <Card className={idx === index ? 'flex' : 'hidden'}>
                            <CardHeader>
                                <CardPlaceholder>
                                    <span className='text-4xl'>{role.image}</span>
                                </CardPlaceholder>

                                <CardTitle>{role.title}</CardTitle>
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
                        {index + 1} dari {ROLE.length}
                    </span>

                    <button
                        disabled={index >= ROLE.length - 1}
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
