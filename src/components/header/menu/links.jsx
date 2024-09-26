import React from 'react'
import { Divider } from '../../ui/divider'

const LINKS = [
    {
        href: '',
        label: 'Untuk perusahaan',
    },
    {
        href: '',
        label: 'Syarat dan ketentuan',
    },
    {
        href: '',
        label: 'Kontak',
    },
]

export const Links = () => {
    return (
        <ul
            key={'link'}
            className='flex flex-col gap-5'
        >
            {LINKS.map((link, idx) => (
                <React.Fragment key={`${link.label}-${idx}-f7s65f8as`}>
                    <li className='font-medium text-lg'>
                        <span>{link.label}</span>
                    </li>

                    {idx < LINKS.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </ul>
    )
}
