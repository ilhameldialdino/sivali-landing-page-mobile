import React from 'react'
import { Button } from '../ui/button'
import { Section } from '../ui/section'

export default function Hero({ data: { title, subTitle, link } }) {
    return (
        <Section className='h-hero bg-brand-500 text-neutral-50 gap-11'>
            <div className='mt-24 space-y-5'>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>

            <div className='flex items-center justify-center gap-5 flex-wrap'>
                {link.map((data) => (
                    <Button
                        key={data.text}
                        onClick={() => {
                            // {data.link} go to link
                        }}
                    >
                        {data.text}
                    </Button>
                ))}
            </div>
        </Section>
    )
}
