import React from 'react'
import { ArrowDownCircle } from 'lucide-react'

import { Section } from '../ui/section'

export default function Hero() {
    return (
        <Section className='h-hero bg-brand-500 text-neutral-50 gap-11'>
            <div className='mt-24 space-y-5'>
                <h1>Fleksibel, cepat, efektif — Temukan tenaga kerja harian sekarang!</h1>
                <p>Menghubungkan Anda dengan pekerja part-time yang tepat, sesuai kebutuhan, dengan proses yang cepat dan aman</p>
            </div>

            <div className='flex items-center justify-center gap-2 bg-transparent w-fit font-medium text-neutral-50'>
                <span className='block stroke-[0.8]'>Download sekarang</span>
                <ArrowDownCircle />
            </div>
        </Section>
    )
}
