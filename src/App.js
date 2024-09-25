import './App.css';

import Header from './components/header'
import Hero from './components/section/hero'
import Role from './components/section/role'
import Benefit from './components/section/benefit'
import Contact from './components/section/contact'

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-screen gap-20'>
        <Hero />
        <Role />
        <Benefit />
        <Contact />
      </main>
    </>
  );
}

export default App;
