import React from 'react'
import { Section } from '../ui/section'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

const BENEFIT = [
    {
        title: 'Loker pasti sesuai',
        subTitle: 'Kita pastiin loker yang muncul sesuai sama kemampuan dan pengalaman kamu',
        image: '',
    },
    {
        title: 'Absen digital',
        subTitle: 'Cukup satu klik, data kehadiran kamu udah beres',
        image: '',
    },
    {
        title: 'Cek saldo',
        subTitle: 'Setiap pendapatan yang kamu terima bisa kamu pantau langsung',
        image: '',
    },
    {
        title: 'Pantau lamaran',
        subTitle: 'Status loker yang kamu lamar bakal di update secara real-time',
        image: '',
    },
]

const STEP = [
    {
        title: 'Download',
        subTitle: 'Cari di App Store atau Playstore',
        image: '⬇️',
    },
    {
        title: 'Daftar',
        subTitle: 'Isi profil dengan informasi keahlian dan preferensi kerjamu.',
        image: '✍🏻',
    },
    {
        title: 'Verifikasi',
        subTitle: 'Selesaikan verifikasi untuk mengaktifkan akun dan memulai pencarian pekerjaan.',
        image: '✅',
    },
    {
        title: 'Siap kerja',
        subTitle: 'Mulai bekerja segera dan nikmati penghasilan yang cepat.',
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
                    <h2 className='text-center text-balance'>Langkah mudah mendaptkan pekerjaan</h2>
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
