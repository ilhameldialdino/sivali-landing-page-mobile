import React from 'react'
import { Menu } from './menu'

export default function Header() {
    return (
        <header className='w-full bg-brand-500 text-neutral-50 px-5 pt-16 relative'>
            <div className='size-full justify-between flex items-center'>
                <button>
                    <img
                        src='sivali-logo.png'
                        alt='Sivali Logo'
                        className='size-logo'
                    />
                </button>

                <Menu />
            </div>
        </header>
    )
}
