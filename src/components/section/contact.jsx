import React from 'react'
import { Section } from '../ui/section'
import { Button } from '../ui/button'

export default function Contact({data}) {
    return (
        <Section className='bg-brand-500 text-neutral-50 h-[572px] rounded-t-3xl pt-10 pb-11 px-5'>
            <div className='flex flex-col items-center justify-between size-full'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <h2 className='text-center tracking-normal'>{data.title}</h2>

                    {data.link.map((data) => (
                        <Button key={data.id}
                        onClick={() => {
                            // {data.link}
                        }}
                        >{data.text}</Button>
                    ))}
                </div>
                <div>
                    <div className='flex gap-2'>
                        <p>Kontak</p>
                        <span className='block'>•</span>
                        <p>Syarat dan ketentuan</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
