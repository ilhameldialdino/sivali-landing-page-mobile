import './App.css'

import { useQuery } from 'react-query'
import { getData } from './api/get-data'

import Header from './components/header'
import Hero from './components/section/hero'
import Role from './components/section/role'
import Benefit from './components/section/benefit'
import Contact from './components/section/contact'

import { urlFor } from './utils/urlForImage'

function App() {
    const { data: r, error, isLoading } = useQuery(['static'], getData)

    return (
        <>
            <Header />

            <main className='flex flex-col min-h-screen gap-20 md:gap-[176px]'>
                {!isLoading ? (
                    <>
                        <Hero data={r.data.heroSection} />
                        <div className='px-5 hidden md:flex items-center justify-center -mt-40 lg:-mt-[45vh]'>
                            <div className='w-full max-w-screen-xl'>
                                <img
                                    src={urlFor(r.data.heroSection.image)}
                                    alt='Sivali'
                                    className='size-auto rounded-3xl'
                                />
                            </div>
                        </div>
                        <Role data={r.data.jobRoleSection} />
                        <Benefit data={r.data.benefitSection} />
                        <Contact data={r.data.contactSection} />
                    </>
                ) : (
                    <div className='h-screen w-full grid place-content-center'>...loading</div>
                )}
            </main>
        </>
    )
}

export default App
