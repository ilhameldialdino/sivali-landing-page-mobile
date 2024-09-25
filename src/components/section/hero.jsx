import React from 'react'
import { Button } from '../ui/button'
import { Section } from '../ui/section'

export default function Hero() {
    return (
        <Section className='h-hero bg-brand-500 text-neutral-50 gap-11'>
            <div className='mt-24 space-y-5'>
                <h1>Mulai perjalanan kerja fleksibelmu sekarang!</h1>
                <p>Download sekarang dan dapatkan penghasilan tambahan dengan fleksibilitas penuh</p>
            </div>

            <Button>Download sekarang</Button>
        </Section>
    )
}
