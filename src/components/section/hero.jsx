import React from 'react'
import { ArrowDownCircle } from 'lucide-react'

import { Section } from '../ui/section'
import { Button } from '../ui/button'

export default function Hero({ data: { title, subTitle, link } }) {
    return (
        <Section className='h-hero bg-brand-500 text-neutral-50 gap-11'>
            <div className='mt-24 space-y-5'>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>

            <div className='flex items-center gap-5 flex-wrap bg-transparent w-fit font-medium text-neutral-50'>
                {link.map((data) => (
                    <Button
                        key={data.text}
                        onClick={() => {
                            // {data.link} go to link
                        }}
                        className='stroke-[0.8] bg-transparent text-neutral-50 px-0 py-0 flex gap-2'
                    >
                        <span className='block'>{data.text}</span>
                        <ArrowDownCircle />
                    </Button>
                ))}
            </div>
        </Section>
    )
}
