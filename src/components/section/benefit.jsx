import React from 'react'
import { Section } from '../ui/section'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

const BENEFIT = [
    {
        title: 'Kandidat berkualitas',
        subTitle: 'Siap memberikan kontribusi instan untuk bisnis Anda',
        image: '',
    },
    {
        title: 'Pantau',
        subTitle: 'Monitor status kandidat yang melamar secara real-time',
        image: '',
    },
    {
        title: 'Absen digital',
        subTitle: 'Memastikan akurasi dan efisiensi tanpa administrasi manual',
        image: '',
    },
]

const STEP = [
    {
        title: 'Daftar',
        subTitle: 'Lengkapi profil perusahaan untuk mendapatkan kandidat yang tepat',
        image: '⬇️',
    },
    {
        title: 'Buat lowongan',
        subTitle: 'Set kriteria, keahlian, dan waktu kerja untuk kandidat terbaik',
        image: '✍🏻',
    },
    {
        title: 'Pilih kandidat terbaik',
        subTitle: 'Bandingkan pengalaman, keterampilan, dan ketersediaan kandidat, lalu pilih yang sesuai',
        image: '✅',
    },
    {
        title: 'Kerja berjalan, pantau terus progresnya',
        subTitle: 'Pantau perkembangan dan hasil kerja kandidat di platform kami untuk memastikan tugas selesai',
        image: '🎉',
    },
]

export default function Benefit() {
    return (
        <Section className='gap-6 px-0'>
            <div className='px-5'>
                <h2>Benefit buat kamu</h2>
            </div>

            <div className='gap-5 flex flex-col px-5'>
                {BENEFIT.map((benefit, idx) => (
                    <Card
                        key={idx}
                        className='bg-brand-500 text-neutral-50 h-[386px] px-4'
                    >
                        <CardHeader className='flex-col items-start'>
                            <CardTitle className='text-neutral-50'>{benefit.title}</CardTitle>
                            <CardDescription>{benefit.subTitle}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <div className='flex flex-col gap-10'>
                <div className='bg-brand-500 text-neutral-50 p-10 gap-10 flex flex-col justify-center items-center'>
                    <div className='text-[160px] font-semibold bg-step-number text-transparent bg-clip-text'>4</div>
                    <h2 className='text-center text-balance'>Langkah mudah mendaptkan kandidat</h2>
                </div>

                <ul className='flex flex-col gap-8 px-5 pt-8'>
                    {STEP.map((step, idx) => (
                        <li
                            key={idx}
                            className='pl-2 w-full'
                        >
                            <div className='flex gap-5'>
                                <div className='size-[102px] shrink-0 bg-neutral-200 rounded-2xl relative grid place-content-center'>
                                    <div className='rounded-button absolute top-0 left-0 flex items-center justify-center p-1 size-fit bg-card-placeholder -translate-y-2 -translate-x-2'>
                                        <div className='bg-neutral-100 size-[26px] flex items-center justify-center rounded-button font-medium'>
                                            {idx + 1}
                                        </div>
                                    </div>

                                    <div className='size-fit text-3xl'>{step.image}</div>
                                </div>

                                <div>
                                    <h4 className='text-[#020617]'>{step.title}</h4>
                                    <p className='text-[#334155] text-sm'>{step.subTitle}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}
