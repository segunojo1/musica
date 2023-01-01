import React from 'react'
import {CiSearch} from 'react-icons/ci'
import HeroImg from '../assets/hero1.png'
import ChartsComp from './ChartsComp'
import Album1 from '../assets/album2.png'
import Album2 from '../assets/album1.png'
import Album3 from '../assets/album4.png'

const Hero = () => {
  return (
    <div className='mb-[3rem]'>
        <div className='relative mb-[1rem]'>
            <CiSearch className='absolute my-auto h-full ml-[2rem]'/>
            <input type="text" className='p-[1rem] px-[4rem]  w-full text-lg outline-text-col focus:outline-double bg-transparent rounded-full' placeholder='Search artists'/>
        </div>
        <div className='flex gap-[2rem]'>
            <img src={HeroImg} alt="hero" className=''/>
            <div className=' grid gap-[.5rem] overflow-hidden'>
                <h1 className='text-3xl'>Top charts</h1>
                <ChartsComp img={Album1} title='Tomorrows Tunes' name="Justin bieber" timestamp="3:50:5"/>
                <ChartsComp img={Album2} title='Tomorrows Tunes' name="Justin bieber" timestamp="3:50:5"/>
                <ChartsComp img={Album3} title='Tomorrows Tunes' name="Justin bieber" timestamp="3:50:5"/>
            </div>
        </div>
    </div>
  )
}

export default Hero