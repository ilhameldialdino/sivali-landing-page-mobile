import React from 'react'
import { Menu } from './menu'
import { Button } from '../ui/button'
import { Divider } from '../ui/divider'

export default function Header() {
    return (
        <header className='w-full bg-brand-500 text-neutral-50 px-5 pt-16 pb-0 md:pb-6 md:pt-6 relative flex items-center justify-center'>
            <div className='size-full justify-between flex items-center max-w-screen-xl'>
                <button>
                    <img
                        src='sivali-logo.png'
                        alt='Sivali Logo'
                        className='size-logo'
                    />
                </button>

                <div className='hidden md:flex gap-6 items-center h-fit w-fit'>
                    <div>Untuk Perusahaan</div>

                    <Divider className='w-[0.25px] h-8' />

                    <Button>Download</Button>
                </div>
                <Menu />
            </div>
        </header>
    )
}
