import React, { useEffect, useState } from 'react'
import { Links } from './links'
import { Button } from '../../ui/button'

export const Menu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isMenuActive ? 'hidden' : 'auto'
    }, [isMenuActive])

    return (
        <>
            <button
                onClick={() => setIsMenuActive(!isMenuActive)}
                className='size-6 flex md:hidden flex-col justify-between py-0.5'
            >
                {Array.from({ length: 3 }).map((_, i) => (
                    <span
                        key={i}
                        className='block h-[2px] w-full bg-neutral-50'
                    />
                ))}
            </button>

            <div className='fixed top-0 left-0 h-screen w-full pointer-events-none overflow-hidden'>
                <nav
                    className='size-full bg-neutral-50 text-black pt-16 px-5 pb-10 will-change-transform pointer-events-auto'
                    style={{
                        transform: isMenuActive ? 'translateX(0%)' : 'translateX(100%)',
                        transition: 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
                    }}
                >
                    <div className='flex flex-col size-full justify-between'>
                        <div className='flex flex-col gap-10'>
                            <div className='w-full justify-between flex items-center'>
                                <img
                                    src='sivali-logo-2.png'
                                    alt='Sivali Logo'
                                    className='size-logo'
                                />

                                <button
                                    onClick={() => setIsMenuActive(!isMenuActive)}
                                    className='size-6 flex flex-col justify-center items-center'
                                >
                                    {Array.from({ length: 2 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className='block h-[2px] w-full bg-black odd:rotate-45 even:-rotate-45 odd:translate-y-1/2 even:-translate-y-1/2'
                                        />
                                    ))}
                                </button>
                            </div>

                            <Links />
                        </div>

                        <div className='w-full'>
                            <Button
                                colors='blue'
                                className='w-full'
                            >
                                Download
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
