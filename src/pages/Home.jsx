import React from 'react'
import Hero from '../components/Hero'
import NewReleases from '../components/NewReleases'
import Popular from '../components/Popular'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { Context } from '../Context'

const Home = () => {
  const [size, setSize] = useState(window.innerWidth);
  return (
    <Context.Provider value={{size, setSize}}>
    <div className='fle nn p-[1rem] md:p-[2rem] md:pr-[5rem]'>
        <SideBar />
        <div className='ml-[3rem] md:ml-[7rem]'>
            <Hero/>
            <NewReleases />
            <Popular />
            
        </div>
        
    </div>
    </Context.Provider>
  )
}

export default Home