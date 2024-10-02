import React from 'react'
import { ArrowDownCircle } from 'lucide-react'

import { Section } from '../ui/section'
import { Button } from '../ui/button'

export default function Hero({ data: { title, subTitle, link } }) {
    return (
        <Section className='h-hero bg-brand-500 text-neutral-50 flex items-center'>
            <div className='flex size-full max-w-screen-xl'>
                <div className='flex flex-col gap-11'>
                    <div className='mt-24 md:mt-40 flex flex-col gap-5 md:items-center md:text-center'>
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                    </div>

                    <div className='flex items-center md:justify-center md:w-full gap-5 flex-wrap bg-transparent w-fit font-medium text-neutral-50'>
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
                </div>
            </div>
        </Section>
    )
}
