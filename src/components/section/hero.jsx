import React from 'react'
import { Button } from '../ui/button'
import { Section } from '../ui/section'
import { urlFor } from '../../utils/urlForImage'

export default function Hero({ data: { title, subTitle, link, image } }) {
    return (
        <Section className='h-hero bg-brand-500 text-neutral-50 w-full overflow-hidden'>
            <div className='flex w-full max-w-screen-xl mx-auto flex-col md:flex-row md:justify-between md:items-center'>
                <div className='gap-11 flex flex-col w-full'>
                    <div className='mt-24 space-y-5'>
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                    </div>

                    <div className='flex items-center gap-5 flex-wrap'>
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
                </div>

                <div className='hidden md:block'>
                    <div className='h-full w-[520px] p-20'>
                        <img
                            src={urlFor(image)}
                            alt={image.alt || ''}
                            className='size-full'
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}
